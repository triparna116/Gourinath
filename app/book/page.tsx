"use client";
import React, { useState, useEffect } from 'react';

// For brevity, we allow user to input their email to view their confirmed packages 
// Since full auth wasn't explicitly requested for regular users, we use email as the identifier
export default function UserBookingDashboard() {
  const gold = '#FFB100';
  const dark = '#050505';

  const [email, setEmail] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [orders, setOrders] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Booking details
  const [selectedOrder, setSelectedOrder] = useState<any>(null);
  const [slots, setSlots] = useState<any[]>([]);
  const [selectedSlot, setSelectedSlot] = useState<any>(null);
  const [showOtp, setShowOtp] = useState(false);
  const [otp, setOtp] = useState('');

  const fetchOrders = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const res = await fetch(`/api/orders?email=${encodeURIComponent(email)}`);
      const data = await res.json();
      setOrders(data.orders || []);
      setIsAuthenticated(true);
    } catch (err) {
      alert("Error fetching orders");
    } finally {
      setIsLoading(false);
    }
  };

  const loadSlots = async (order: any) => {
    setSelectedOrder(order);
    try {
      // In real scenario, fetch slots from DB for next 15 days
      const res = await fetch(`/api/slots`);
      const data = await res.json();
      setSlots(data.slots || []);
    } catch (err) {
      console.error(err);
    }
  };

  const handleBookSlot = async () => {
    if (!selectedSlot) return alert("Select a slot");
    setIsLoading(true);
    try {
      // Send OTP First
      const res = await fetch('/api/otp/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      });
      if (res.ok) {
        setShowOtp(true);
      } else {
        alert("Failed to send OTP");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const confirmBooking = async () => {
    setIsLoading(true);
    try {
      const res = await fetch('/api/booking/confirm', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          orderId: selectedOrder.id,
          slotId: selectedSlot.id,
          email,
          otp
        })
      });
      const data = await res.json();
      if (data.success) {
        alert("Slot Booked Successfully!");
        setShowOtp(false);
        setSelectedSlot(null);
        setSelectedOrder(null);
        // Refresh orders
        const reload = await fetch(`/api/orders?email=${encodeURIComponent(email)}`);
        setOrders((await reload.json()).orders);
      } else {
        alert(data.error || "OTP Invalid or Class Limit Reached");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <main style={{ backgroundColor: dark, minHeight: '100vh', padding: '100px 20px', color: '#fff', textAlign: 'center' }}>
        <h2 style={{ color: gold, fontSize: '2rem', marginBottom: '20px' }}>Access Your Bookings</h2>
        <form onSubmit={fetchOrders} style={{ maxWidth: '400px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <input 
            type="email" required placeholder="Enter Email used for booking"
            value={email} onChange={e => setEmail(e.target.value)}
            style={{ padding: '15px', borderRadius: '10px', backgroundColor: '#111', color: '#fff', border: '1px solid #333' }}
          />
          <button type="submit" disabled={isLoading} style={{
            padding: '15px', backgroundColor: gold, color: dark, border: 'none', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer'
          }}>
            {isLoading ? 'Loading...' : 'View My Packages'}
          </button>
        </form>
      </main>
    );
  }

  return (
    <main style={{ backgroundColor: dark, minHeight: '100vh', padding: '60px 20px', color: '#fff' }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
          <h2 style={{ color: gold, fontSize: '2rem' }}>My Packages ({email})</h2>
          <button onClick={() => setIsAuthenticated(false)} style={{ color: '#aaa', backgroundColor: 'transparent', border: 'none', cursor: 'pointer' }}>Logout</button>
        </div>

        <div style={{ display: 'grid', gap: '20px', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
          {orders.map(o => {
            const isFinished = o.classesBooked >= o.totalClasses;
            return (
              <div key={o.id} style={{ backgroundColor: '#111', padding: '25px', borderRadius: '15px', border: '1px solid #333' }}>
                <h3 style={{ fontSize: '1.4rem', color: gold, marginBottom: '10px' }}>Package: {o.packageId}</h3>
                <p style={{ color: '#ccc', marginBottom: '5px' }}>Status: {o.status}</p>
                <p style={{ color: '#ccc', marginBottom: '15px' }}>Classes Booked: {o.classesBooked || 0} / {o.totalClasses}</p>
                
                {o.status === 'confirm' && !isFinished && (
                  <button onClick={() => loadSlots(o)} style={{
                    backgroundColor: gold, color: dark, padding: '10px 20px', borderRadius: '30px', border: 'none', fontWeight: 'bold', cursor: 'pointer', width: '100%'
                  }}>
                    Book A Class
                  </button>
                )}
                {isFinished && <p style={{ color: 'lightgreen', fontWeight: 'bold' }}>All Classes Booked!</p>}
              </div>
            );
          })}
        </div>
      </div>

      {/* Slots Modal */}
      {selectedOrder && !showOtp && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '20px', maxWidth: '600px', width: '100%', border: `1px solid ${gold}`, maxHeight: '80vh', overflowY: 'auto' }}>
            <h3 style={{ fontSize: '1.5rem', color: gold, marginBottom: '20px' }}>Select a Date & Time</h3>
            <div style={{ display: 'grid', gap: '10px', gridTemplateColumns: '1fr 1fr' }}>
              {slots.map(s => (
                <button key={s.id} onClick={() => setSelectedSlot(s)} style={{
                  padding: '15px', backgroundColor: selectedSlot?.id === s.id ? gold : '#222',
                  color: selectedSlot?.id === s.id ? dark : '#fff',
                  border: '1px solid #444', borderRadius: '10px', cursor: 'pointer',
                  opacity: s.currentCapacity >= s.maxCapacity ? 0.5 : 1
                }} disabled={s.currentCapacity >= s.maxCapacity}>
                  <div style={{ fontWeight: 'bold' }}>{new Date(s.date).toLocaleDateString()}</div>
                  <div style={{ fontSize: '0.9rem' }}>{s.time}</div>
                  <div style={{ fontSize: '0.8rem', marginTop: '5px' }}>Seats: {s.currentCapacity}/{s.maxCapacity}</div>
                </button>
              ))}
            </div>
            {slots.length === 0 && <p>No slots available right now.</p>}

            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              <button onClick={() => setSelectedOrder(null)} style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', color: '#fff', border: '1px solid #555', borderRadius: '10px' }}>Cancel</button>
              <button onClick={handleBookSlot} disabled={!selectedSlot || isLoading} style={{ flex: 1, padding: '15px', backgroundColor: gold, color: dark, border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
                {isLoading ? 'Sending...' : 'Confirm & Request OTP'}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* OTP Modal */}
      {showOtp && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', zIndex: 9999 }}>
          <div style={{ backgroundColor: '#111', padding: '40px', borderRadius: '20px', maxWidth: '400px', width: '100%', border: `1px solid ${gold}` }}>
            <h3 style={{ fontSize: '1.5rem', color: gold, marginBottom: '20px', textAlign: 'center' }}>Enter Verification Code</h3>
            <p style={{ color: '#ccc', textAlign: 'center', marginBottom: '20px' }}>An OTP has been sent to {email}</p>
            <input 
              type="text" placeholder="Enter OTP" maxLength={6}
              value={otp} onChange={e => setOtp(e.target.value)}
              style={{ width: '100%', padding: '15px', borderRadius: '10px', backgroundColor: '#222', color: '#fff', border: '1px solid #333', textAlign: 'center', fontSize: '1.5rem', letterSpacing: '5px' }}
            />
            <div style={{ display: 'flex', gap: '15px', marginTop: '30px' }}>
              <button onClick={() => setShowOtp(false)} style={{ flex: 1, padding: '15px', backgroundColor: 'transparent', color: '#fff', border: '1px solid #555', borderRadius: '10px' }}>Cancel</button>
              <button onClick={confirmBooking} disabled={isLoading || otp.length < 6} style={{ flex: 1, padding: '15px', backgroundColor: gold, color: dark, border: 'none', borderRadius: '10px', fontWeight: 'bold' }}>
                {isLoading ? 'Verifying...' : 'Verify & Book'}
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
