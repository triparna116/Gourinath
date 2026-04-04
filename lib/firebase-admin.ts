import fs from 'fs';
import path from 'path';

// We bypass Firebase entirely and use a local JSON file for the database!
const dbPath = path.join(process.cwd(), 'local-db.json');

if (!fs.existsSync(dbPath)) {
  fs.writeFileSync(dbPath, JSON.stringify({ orders: [], slots: [] }), 'utf-8');
}

const readDB = () => JSON.parse(fs.readFileSync(dbPath, 'utf-8'));
const writeDB = (data: any) => fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf-8');

const customMockCollection = (colName: string) => {
  return {
    doc: (id?: string) => {
      const docId = id || `doc_${Date.now()}_${Math.random().toString(36).substring(7)}`;
      return {
        id: docId,
        set: async (data: any) => {
          const db = readDB();
          if (!db[colName]) db[colName] = [];
          const existing = db[colName].findIndex((x: any) => x.id === docId);
          if (existing >= 0) db[colName][existing] = { id: docId, ...data };
          else db[colName].push({ id: docId, ...data });
          writeDB(db);
          return {};
        },
        get: async () => {
          const db = readDB();
          const item = (db[colName] || []).find((x: any) => x.id === docId || x.orderId === docId);
          return { exists: !!item, data: () => item };
        },
        update: async (data: any) => {
          const db = readDB();
          if (!db[colName]) return;
          const existing = db[colName].findIndex((x: any) => x.id === docId || x.orderId === docId);
          if (existing >= 0) {
            db[colName][existing] = { ...db[colName][existing], ...data };
            writeDB(db);
          }
          return {};
        },
        delete: async () => {
          const db = readDB();
          if (db[colName]) {
            db[colName] = db[colName].filter((x: any) => x.id !== docId && x.orderId !== docId);
            writeDB(db);
          }
          return {};
        }
      }
    },
    add: async (data: any) => {
      const docId = `doc_${Date.now()}`;
      const db = readDB();
      if (!db[colName]) db[colName] = [];
      db[colName].push({ id: docId, ...data });
      writeDB(db);
      return { id: docId };
    },
    where: function (field: string, op: string, val: any) {
      return {
        get: async () => {
          const db = readDB();
          const filtered = (db[colName] || []).filter((x: any) => x[field] === val);
          return { docs: filtered.map((v: any) => ({ id: v.id || v.orderId, data: () => v })) }
        }
      }
    },
    get: async () => {
      const db = readDB();
      return { docs: (db[colName] || []).map((v: any) => ({ id: v.id || v.orderId, data: () => v })) }
    }
  }
};

export const db = {
  collection: customMockCollection,
  batch: () => ({
    set: (ref: any, data: any) => ref.set(data),
    update: (ref: any, data: any) => ref.update(data),
    delete: (ref: any) => ref.delete(),
    commit: async () => { }
  })
} as any;
