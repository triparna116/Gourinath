// app/online-classes/page.tsx
import Link from 'next/link';
import React from 'react';

export default function OnlineClassesPage() {
  const gold = '#FFB100';
  const dark = '#050505';
  const cardBg = '#111';
  const number = '916290956284';

  const sections = [
    {
      id: 'shruti-natok',
      title: 'Shruti-Natok',
      description: 'Learn the art of audio drama and voice acting. Master emotional delivery and character portrayal purely through vocal expression.',
      bgImg: 'url("/g1.jpg")', // fallback to existing images, could use unsplash instead but Next.js might block external unconfigured images if using next/image, we are using inline URL though. Let's use generic online ones or simple gradient
      gradient: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1478720568477-152d9b164e26?auto=format&fit=crop&q=80&w=1000")`,
      packages: [
        { name: 'One-to-One Class', classes: 12, duration: '1 hour', time: '3 months', cost: '₹3,000' },
        { name: 'Group Class', classes: 12, duration: '1.5 hours', time: '3 months', cost: '₹1,500' },
        { name: 'Offline Class', classes: 8, duration: '2 hours', time: '2 months', cost: '₹4,000' }
      ]
    },
    {
      id: 'voice-modulation',
      title: 'Voice-Modulation',
      description: 'Develop a versatile and powerful voice. Perfect for public speaking, dubbing, and professional communication.',
      gradient: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&q=80&w=1000")`,
      packages: [
        { name: 'One-to-One Class', classes: 10, duration: '1 hour', time: '2.5 months', cost: '₹2,500' },
        { name: 'Group Class', classes: 10, duration: '1.5 hours', time: '2.5 months', cost: '₹1,200' }
      ]
    },
    {
      id: 'script-writing',
      title: 'Script-Writing',
      description: 'Master the craft of creating compelling narratives. Learn structure, dialogue, and character development.',
      gradient: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url("https://images.unsplash.com/photo-1455390582262-044cdead2708?auto=format&fit=crop&q=80&w=1000")`,
      packages: [
        { name: 'One-to-One Class', classes: 16, duration: '1 hour', time: '4 months', cost: '₹4,000' },
        { name: 'Group Class', classes: 16, duration: '1.5 hours', time: '4 months', cost: '₹2,000' }
      ]
    }
  ];

  const getWhatsAppLink = (section: string, pkg: string) => {
    const text = `Want to join online ${section} class ${pkg}, please share me details.`;
    return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
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
                    {pkg.cost}
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
                    <a 
                      href={getWhatsAppLink(sec.title, pkg.name)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="join-now-btn"
                      style={{
                        display: 'block',
                        textAlign: 'center',
                        backgroundColor: gold,
                        color: dark,
                        padding: '15px 0',
                        borderRadius: '30px',
                        textDecoration: 'none',
                        fontWeight: 'bold',
                        fontSize: '1.1rem',
                        transition: 'opacity 0.2s',
                      }}
                    >
                      JOIN NOW
                    </a>
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
    </main>
  );
}
