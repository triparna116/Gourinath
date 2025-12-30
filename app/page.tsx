// app/page.tsx
import Link from 'next/link';

export default function HomePage() {
  const gold = '#FFB100';
  const dark = '#050505';
  const cardBg = '#111';

  return (
    <main style={{
      backgroundColor: dark,
      color: '#ffffff',
      minHeight: '100vh',
      fontFamily: 'sans-serif',
      width: '100%',
      overflowX: 'hidden'
    }}>

      {/* 1. CINEMATIC HERO SECTION */}
      <section style={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/g1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: `4px solid ${gold}`, // এখানে ভেরিয়েবল ঠিক করা হয়েছে
        padding: '0 15px',
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '900px', width: '100%' }}>
          <h1 style={{
            fontSize: 'clamp(2.2rem, 12vw, 5.5rem)',
            margin: '0',
            fontWeight: '900',
            letterSpacing: '-1px',
            lineHeight: '1.1'
          }}>
            GOURINATH <span style={{ color: gold, display: 'inline-block' }}>BANERJEE</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.8rem, 3vw, 1.2rem)',
            color: '#ccc',
            letterSpacing: '2px',
            textTransform: 'uppercase',
            marginTop: '15px'
          }}>
            Actor • Director • Writer • Teacher
          </p>
        </div>
      </section>

      {/* 2. THE ARTIST BIO */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', color: gold, marginBottom: '20px' }}>The Artist</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#bbb' }}>
              A veteran legend of the stage, Gourinath Banerjee has dedicated his life to the arts since 1976.
              As the founder of Theatre-Place, he has not only acted in countless roles but has also directed more than 40 drama productions.
            </p>
            <div style={{ marginTop: '30px', borderLeft: `3px solid ${gold}`, paddingLeft: '20px' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#eee' }}>
                "Directed 40+ Plays | Writing Scripts for Decades | Mentoring New Talents"
              </p>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '300px' }}>
            <img
              src="/g3.jpg"
              alt="Gourinath Banerjee"
              style={{
                width: '100%',
                height: 'auto',
                maxHeight: '600px',
                objectFit: 'cover',
                objectPosition: 'top',
                borderRadius: '20px',
                border: '1px solid #333'
              }}
            />
          </div>
        </div>
      </section >

      {/* কাকার নতুন ইনস্ট্রাকশন: THEATRE-PLACE সেকশন (তোমার কোডের সাথে যোগ করা হলো) */}
      <section style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#000' }}>
        <div style={{ maxWidth: '850px', margin: '0 auto', border: `1px solid ${gold}`, padding: '40px', borderRadius: '20px' }}>
          <h2 style={{ color: gold, fontSize: '2.5rem', marginBottom: '15px', fontWeight: 'bold' }}>THEATRE-PLACE</h2>
          <p style={{ fontSize: '1.1rem', color: '#ccc', lineHeight: '1.6' }}>
            A legacy of creative excellence, nurturing theatrical talent and delivering powerful stage performances since 1976.
          </p>
        </div>
      </section>

      {/* 3. CURRENT & NEXT PRODUCTION */}
      <section style={{ backgroundColor: '#0a0a0a', padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ color: gold, fontSize: '2.5rem', marginBottom: '40px' }}>On Stage Now</h2>
        <div style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '40px',
          border: `1px solid ${gold}`,
          borderRadius: '20px',
          backgroundColor: cardBg
        }}>
          <h3 style={{ fontSize: '2rem', marginBottom: '10px' }}>Current: Ontorale Nayika</h3>
          <p style={{ color: gold, fontWeight: 'bold' }}>2025 Season</p>
          <p style={{ color: '#888', marginTop: '15px' }}>Next Production: Scripting in progress for Summer 2026.</p>
        </div >
      </section >

      {/* 4. EXPERTISE GRID */}
      <section style={{ backgroundColor: cardBg, padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: gold }}>Core Expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>
            {[
              { title: "Direction", desc: "Directed 40+ successful stage productions." },
              { title: "Acting", desc: "Powerful character acting in theatre and web series." },
              { title: "Script Writing", desc: "Original scripts and adaptations for Theatre-Place." },
              { title: "Teaching", desc: "Drama workshops and training since 1976." }
            ].map((item, i) => (
              <div key={i} style={{ padding: '40px 30px', backgroundColor: '#1a1a1a', borderRadius: '15px', textAlign: 'center', border: '1px solid #333' }}>
                <h3 style={{ color: gold, marginBottom: '15px' }}>{item.title}</h3>
                <p style={{ color: '#888' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* 5. CALL TO ACTION */}
      <section style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Experience The Magic Of Theatre</h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
          <Link href="/works">
            <button style={{
              backgroundColor: gold, color: dark, padding: '15px 40px',
              fontSize: '1.1rem', fontWeight: 'bold', border: 'none',
              borderRadius: '50px', cursor: 'pointer'
            }}>
              VIEW WORKS
            </button>
          </Link>
          <Link href="/contact">
            <button style={{
              backgroundColor: 'transparent', color: gold, padding: '15px 40px',
              fontSize: '1.1rem', fontWeight: 'bold', border: `2px solid ${gold}`,
              borderRadius: '50px', cursor: 'pointer'
            }}>
              CONTACT US
            </button>
          </Link>
        </div >
      </section >

      {/* কাকার নতুন ইনস্ট্রাকশন: ফুটার সেকশন */}
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

    </main >
  );
}