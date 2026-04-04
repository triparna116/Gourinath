"use client";
import React, { useEffect, useState } from 'react';

export default function AdminDashboard() {
  const [data, setData] = useState({ orders: [], bookings: [], slots: [] });
  const [auth, setAuth] = useState(false);
  const [pwd, setPwd] = useState('');

  useEffect(() => {
    if (auth) {
      fetch('/api/admin/data')
        .then(res => res.json())
        .then(d => setData(d));
    }
  }, [auth]);

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

  const orders = data.orders || [];
  const bookings = data.bookings || [];
  const slots = data.slots || [];

  return (
    <div>
      <h1 style={{ color: '#FFB100', fontSize: '2.5rem', marginBottom: '20px' }}>Admin Overview</h1>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px' }}>
        <div>
          <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>Recent Orders (Packages)</h2>
          {orders.map((o: any) => (
            <div key={o.id} style={{ backgroundColor: '#111', padding: '15px', borderRadius: '10px', marginBottom: '15px', border: '1px solid #333' }}>
              <h4 style={{ color: '#FFB100', margin: 0 }}>{o.name} ({o.email})</h4>
              <p style={{ margin: '5px 0 0 0', color: '#ccc' }}>Pkg: {o.packageId} | Paid: ₹{o.amount} | Phone: {o.phone}</p>
              <p style={{ margin: '5px 0 0 0', color: '#888', fontSize: '0.9rem' }}>Status: {o.status} | Classes Booked: {o.classesBooked || 0}/{o.totalClasses}</p>
              <p style={{ margin: '5px 0 0 0', color: '#666', fontSize: '0.8rem' }}>Order ID: {o.id}</p>
            </div>
          ))}
          {orders.length === 0 && <p>No orders yet.</p>}
        </div>

        <div>
          <h2 style={{ fontSize: '1.5rem', borderBottom: '1px solid #333', paddingBottom: '10px', marginBottom: '20px' }}>Recent Class Bookings</h2>
          {bookings.map((b: any) => {
            const slotDetails = (slots as any[]).find((s:any) => s.id === b.slotId);
            return (
              <div key={b.id} style={{ backgroundColor: '#111', padding: '15px', borderRadius: '10px', marginBottom: '15px', border: '1px solid #333' }}>
                <h4 style={{ color: '#FFB100', margin: 0 }}>User: {b.userId}</h4>
                <p style={{ margin: '5px 0 0 0', color: '#ccc' }}>For Order: {b.orderId}</p>
                <p style={{ margin: '5px 0 0 0', color: '#888', fontSize: '0.9rem' }}>
                  Slot Date: {slotDetails ? new Date(slotDetails.date).toLocaleDateString() : 'N/A'} | 
                  Time: {slotDetails ? slotDetails.time : 'N/A'}
                </p>
              </div>
            );
          })}
          {bookings.length === 0 && <p>No bookings yet.</p>}
        </div>
      </div>
    </div>
  );
}
