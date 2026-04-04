"use client";
import React, { useEffect, useState } from 'react';

export default function SlotManagement() {
  const [data, setData] = useState({ slots: [] });
  const [auth, setAuth] = useState(false);
  const [pwd, setPwd] = useState('');
  
  // New slot form
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [maxCapacity, setMaxCapacity] = useState(1);

  const loadData = () => {
    fetch('/api/admin/data')
      .then(res => res.json())
      .then(d => setData(d));
  };

  useEffect(() => {
    if (auth) loadData();
  }, [auth]);

  const addSlot = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('/api/admin/slots', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ date, time, maxCapacity: parseInt(maxCapacity.toString()) })
    });
    if (res.ok) {
      alert("Slot added");
      loadData();
    }
  };

  const deleteSlot = async (slotId: string) => {
    if(!confirm("Are you sure?")) return;
    const res = await fetch(`/api/admin/slots?id=${slotId}`, {
      method: 'DELETE'
    });
    if (res.ok) {
      alert("Slot removed");
      loadData();
    }
  };

  if (!auth) {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '100px 0' }}>
        <h2>Enter Admin Password</h2>
        <input 
          type="password" value={pwd} onChange={e => setPwd(e.target.value)} 
          style={{ padding: '10px', marginTop: '20px', borderRadius: '5px', backgroundColor: '#222', color: '#fff' }} 
        />
        <button onClick={() => { if(pwd === 'Admin@2025') setAuth(true); else alert('Wrong!') }}
          style={{ padding: '10px 20px', backgroundColor: '#FFB100', color: '#000', marginTop: '20px', border: 'none', borderRadius: '5px' }}>
          Login
        </button>
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ color: '#FFB100', fontSize: '2.5rem', marginBottom: '20px' }}>Slot Management</h1>
      
      <div style={{ backgroundColor: '#111', padding: '30px', borderRadius: '15px', marginBottom: '40px', border: '1px solid #333' }}>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Add New Slot</h2>
        <form onSubmit={addSlot} style={{ display: 'flex', gap: '20px', alignItems: 'flex-end' }}>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Date</label>
            <input type="date" required value={date} onChange={e => setDate(e.target.value)} 
              style={{ width: '100%', padding: '10px', backgroundColor: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Time String (e.g. 10:00 AM)</label>
            <input type="text" required value={time} onChange={e => setTime(e.target.value)} 
              style={{ width: '100%', padding: '10px', backgroundColor: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px' }} />
          </div>
          <div style={{ flex: 1 }}>
            <label style={{ display: 'block', marginBottom: '5px', color: '#ccc' }}>Max Capacity</label>
            <input type="number" required min={1} value={maxCapacity} onChange={e => setMaxCapacity(parseInt(e.target.value))} 
              style={{ width: '100%', padding: '10px', backgroundColor: '#222', border: '1px solid #444', color: '#fff', borderRadius: '5px' }} />
          </div>
          <button type="submit" style={{ padding: '10px 30px', backgroundColor: '#FFB100', color: '#000', border: 'none', borderRadius: '5px', fontWeight: 'bold', height: '42px', cursor: 'pointer' }}>
            Add Slot
          </button>
        </form>
      </div>

      <h2 style={{ fontSize: '1.5rem', marginBottom: '20px' }}>All Created Slots</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {data.slots.map((s: any) => (
          <div key={s.id} style={{ backgroundColor: '#111', padding: '20px', borderRadius: '10px', border: '1px solid #333' }}>
            <h4 style={{ color: '#FFB100', margin: '0 0 10px 0', fontSize: '1.2rem' }}>{new Date(s.date).toLocaleDateString()}</h4>
            <p style={{ margin: '0 0 5px 0', color: '#ccc' }}>Time: {s.time}</p>
            <p style={{ margin: '0 0 15px 0', color: '#888' }}>Booked: {s.currentCapacity || 0} / {s.maxCapacity}</p>
            <button onClick={() => deleteSlot(s.id)} style={{ padding: '8px 15px', backgroundColor: 'transparent', color: '#ff4444', border: '1px solid #ff4444', borderRadius: '5px', cursor: 'pointer', width: '100%' }}>
              Remove Slot
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
