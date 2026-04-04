"use client";
import Link from 'next/link';
import React, { useState } from 'react';
import Script from 'next/script';
import { nanoid } from 'nanoid';

// Define Razorpay on Window
declare global {
  interface Window {
    Razorpay: any;
  }
}

export default function OnlineClassesPage() {
  const gold = '#FFB100';
  const dark = '#050505';
  const cardBg = '#111';

  const sections = [
    {
      id: 'shruti-natok',
      title: 'Shruti-Natok',
      description: 'Learn the art of audio drama and voice acting. Master emotional delivery and character portrayal purely through vocal expression.',
      gradient: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1000")`,
      packages: [
        { id: 'sn-1', name: 'One-to-One Class', classes: 12, duration: '1 hour', time: '3 months', cost: '3000' },
        { id: 'sn-2', name: 'Group Class', classes: 12, duration: '1.5 hours', time: '3 months', cost: '1500' },
        { id: 'sn-3', name: 'Offline Class', classes: 8, duration: '2 hours', time: '2 months', cost: '4000' }
      ]
    },
    {
      id: 'voice-modulation',
      title: 'Voice-Modulation',
      description: 'Develop a versatile and powerful voice. Perfect for public speaking, dubbing, and professional communication.',
      gradient: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000")`,
      packages: [
        { id: 'vm-1', name: 'One-to-One Class', classes: 10, duration: '1 hour', time: '2.5 months', cost: '2500' },
        { id: 'vm-2', name: 'Group Class', classes: 10, duration: '1.5 hours', time: '2.5 months', cost: '1200' }
      ]
    },
    {
      id: 'script-writing',
      title: 'Script-Writing',
      description: 'Master the craft of creating compelling narratives. Learn structure, dialogue, and character development.',
      gradient: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=1000")`,
      packages: [
        { id: 'sw-1', name: 'One-to-One Class', classes: 16, duration: '1 hour', time: '4 months', cost: '4000' },
        { id: 'sw-2', name: 'Group Class', classes: 16, duration: '1.5 hours', time: '4 months', cost: '2000' }
      ]
    }
  ];

  // Modal State
  const [showCheckout, setShowCheckout] = useState(false);
  const [selectedPkg, setSelectedPkg] = useState<any>(null);
  
  // Form State
  const [formData, setFormData] = useState({ name: '', email: '', phone: '' });
  const [isLoading, setIsLoading] = useState(false);

  const startCheckout = (pkg: any) => {
    setSelectedPkg(pkg);
    setShowCheckout(true);
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const initRes = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          packageId: selectedPkg.id,
          amount: selectedPkg.cost,
          totalClasses: selectedPkg.classes
        })
      });

      const orderData = await initRes.json();
      if (!initRes.ok) throw new Error(orderData.error || 'Failed to create order');

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID || '', 
        amount: orderData.amount,
        currency: orderData.currency,
        name: "Theatre-Place",
        description: `Booking for ${selectedPkg.name}`,
        order_id: orderData.id,
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch('/api/webhook', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });
            const verifyData = await verifyRes.json();
            if (verifyData.success) {
              alert("Payment successful! Redirecting you to the Class Booking Dashboard...");
              setShowCheckout(false);
              window.location.href = '/book';
            } else {
              alert("Payment verification failed!");
            }
          } catch(err) {
            console.error(err);
            alert("Error during verification");
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone
        },
        theme: {
          color: gold
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();

    } catch (error: any) {
      console.error(error);
      alert('Error initiating checkout. Please try again. ' + error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main style={{
      backgroundColor: dark,
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      width: '100%',
      overflowX: 'hidden'
    }}>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />

      <style>{`
        .join-now-btn:hover {
          opacity: 0.8 !important;
          transform: translateY(-2px);
        }
        .join-now-btn {
          transition: all 0.2s ease-in-out !important;
        }
      `}</style>

      {/* HEADER SECTION */}
      <section style={{
        padding: '120px 20px 60px',
        textAlign: 'center',
        borderBottom: `2px solid #222`,
        backgroundColor: '#0a0a0a'
      }}>
        <h1 style={{
          fontSize: 'clamp(2.5rem, 8vw, 4rem)',
          margin: '0 0 20px 0',
          fontWeight: '900',
          color: gold,
          letterSpacing: '-1px'
        }}>
          ONLINE CLASSES
        </h1>
        <p style={{
          fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
          color: '#ccc',
          maxWidth: '700px',
          margin: '0 auto',
          lineHeight: '1.6'
        }}>
          Elevate your skills from anywhere through specialized courses tailored for aspiring actors, writers, and speakers.
        </p>
      </section>

      {/* CLASSES SECTIONS */}
      {sections.map((sec, idx) => (
        <section key={sec.id} style={{
          padding: '80px 20px',
          borderBottom: '1px solid #222',
          backgroundColor: idx % 2 === 0 ? dark : '#0a0a0a'
        }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            
            {/* Class Header/Banner */}
            <div style={{
              backgroundImage: sec.gradient,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              padding: '60px 40px',
              borderRadius: '20px',
              border: `1px solid ${gold}`,
              marginBottom: '50px',
              textAlign: 'center'
            }}>
              <h2 style={{ fontSize: '2.5rem', color: gold, marginBottom: '20px', fontWeight: 'bold' }}>
                {sec.title}
              </h2>
              <p style={{ fontSize: '1.2rem', color: '#eee', maxWidth: '800px', margin: '0 auto', lineHeight: '1.6' }}>
                {sec.description}
              </p>
            </div>

            <h3 style={{ fontSize: '1.8rem', color: '#fff', marginBottom: '30px', paddingLeft: '10px', borderLeft: `4px solid ${gold}` }}>
              Available Packages
            </h3>

            {/* Packages Carousel / Grid */}
            <div style={{
              display: 'flex',
              gap: '25px',
              overflowX: 'auto',
              paddingBottom: '20px',
              scrollSnapType: 'x mandatory',
              WebkitOverflowScrolling: 'touch' // for smooth iOS styling
            }}>
              {sec.packages.map((pkg, pIdx) => (
                <div key={pIdx} style={{
                  minWidth: '300px',
                  backgroundColor: cardBg,
                  borderRadius: '15px',
                  padding: '30px',
                  border: '1px solid #333',
                  display: 'flex',
                  flexDirection: 'column',
                  scrollSnapAlign: 'start',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.5)'
                }}>
                  <h4 style={{ fontSize: '1.5rem', color: gold, marginBottom: '10px' }}>{pkg.name}</h4>
                  <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: '#fff', marginBottom: '25px' }}>
                    ₹{pkg.cost}
                  </div>
                  
                  <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '15px', color: '#bbb' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Classes:</span>
                      <span style={{ color: '#fff' }}>{pkg.classes}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Duration:</span>
                      <span style={{ color: '#fff' }}>{pkg.duration}/class</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <span>Completion:</span>
                      <span style={{ color: '#fff' }}>{pkg.time}</span>
                    </div>
                  </div>

                  <div style={{ marginTop: '35px' }}>
                    <button 
                      onClick={() => startCheckout(pkg)}
                      className="join-now-btn"
                      style={{
                        display: 'block',
                        width: '100%',
                        textAlign: 'center',
                        backgroundColor: gold,
                        color: dark,
                        padding: '15px 0',
                        borderRadius: '30px',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      PAY NOW
                    </button>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>
      ))}

      {/* CTA BACK HOME */}
      <section style={{ padding: '80px 20px', textAlign: 'center', backgroundColor: '#000' }}>
         <Link href="/">
           <button style={{
             backgroundColor: 'transparent',
             color: gold,
             border: `2px solid ${gold}`,
             padding: '15px 40px',
             fontSize: '1.1rem',
             borderRadius: '50px',
             cursor: 'pointer',
             fontWeight: 'bold'
           }}>
             BACK TO HOME
           </button>
         </Link>
      </section>
      
      {/* FOOTER */}
      <footer style={{
        padding: '60px 20px',
        textAlign: 'center',
        borderTop: '1px solid #222',
        backgroundColor: '#000'
      }}>
        <h2 style={{ color: gold, fontSize: '1.8rem', marginBottom: '10px', fontWeight: 'bold' }}>THEATRE-PLACE</h2>
        <p style={{ color: '#666', fontSize: '0.9rem' }}>
          © 2025 Gourinath Banerjee. All Rights Reserved.
        </p>
      </footer>

      {/* Checkout Modal */}
      {showCheckout && selectedPkg && (
        <div style={{
          position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
          backgroundColor: 'rgba(0,0,0,0.85)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '20px', zIndex: 9999
        }}>
          <div style={{
            backgroundColor: '#111', padding: '40px', borderRadius: '20px',
            maxWidth: '500px', width: '100%', border: `1px solid ${gold}`
          }}>
            <h3 style={{ fontSize: '1.8rem', color: gold, marginBottom: '20px' }}>Checkout - {selectedPkg.name}</h3>
            <p style={{ marginBottom: '20px', color: '#ccc' }}>Total Classes: {selectedPkg.classes} | Amount: ₹{selectedPkg.cost}</p>
            
            <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <input
                required type="text" placeholder="Full Name"
                value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})}
                style={{ padding: '15px', borderRadius: '10px', border: '1px solid #333', backgroundColor: '#222', color: '#fff' }}
              />
              <input
                required type="email" placeholder="Email Address"
                value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}
                style={{ padding: '15px', borderRadius: '10px', border: '1px solid #333', backgroundColor: '#222', color: '#fff' }}
              />
              <input
                required type="tel" placeholder="Phone Number"
                value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}
                style={{ padding: '15px', borderRadius: '10px', border: '1px solid #333', backgroundColor: '#222', color: '#fff' }}
              />
              
              <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
                <button type="button" onClick={() => setShowCheckout(false)} style={{
                  flex: 1, padding: '15px', backgroundColor: 'transparent',
                  color: '#fff', border: '1px solid #555', borderRadius: '10px', cursor: 'pointer'
                }}>Cancel</button>
                <button type="submit" disabled={isLoading} style={{
                  flex: 1, padding: '15px', backgroundColor: gold,
                  color: dark, border: 'none', borderRadius: '10px', cursor: 'pointer', fontWeight: 'bold'
                }}>
                  {isLoading ? 'Processing...' : `Pay ₹${selectedPkg.cost}`}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </main>
  );
}
