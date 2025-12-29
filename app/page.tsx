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
      overflowX: 'hidden' // এটি নিশ্চিত করবে যে কোনো কিছুই সাইডে স্ক্রল হবে না
    }}>

      {/* 1. CINEMATIC HERO SECTION (আপডেট করা হয়েছে) */}
      <section style={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url("/g1.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        borderBottom: '4px solid ${gold}',
        padding: '0 15px', // মোবাইলের জন্য সাইডে প্যাডিং
        boxSizing: 'border-box'
      }}>
        <div style={{ maxWidth: '900px', width: '100%' }}>

          {/* কাকার কথামতো লোগো এবং থিয়েটার প্লেস নাম এখান থেকে ডিলিট করা হয়েছে */}

          <h1 style={{
            fontSize: 'clamp(2.2rem, 12vw, 5.5rem)', // মোবাইলে ফন্ট সাইজ নিজে থেকেই ছোট হবে
            margin: '0',
            fontWeight: '900',
            letterSpacing: '-1px',
            lineHeight: '1.1'
          }}>
            GOURINATH <span style={{ color: gold, display: 'inline-block' }}>BANERJEE</span>
          </h1>

          <p style={{
            fontSize: 'clamp(0.8rem, 3vw, 1.2rem)', // এটিও রেসপনসিভ করা হয়েছে
            color: '#ccc',
            letterSpacing: '2px', // ৪ পিক্সেল থেকে কমিয়ে ২ করা হয়েছে যাতে মোবাইলে লেখা না ফেটে যায়
            textTransform: 'uppercase',
            marginTop: '15px'
          }}>
            Actor • Director • Writer • Teacher
          </p>
        </div>
      </section>

      {/* 2. THE ARTIST BIO (আগের মতোই রাখা হয়েছে) */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', color: gold, marginBottom: '20px' }}>The Artist</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#bbb' }}>
              A veteran legend of the stage, Gourinath Banerjee has dedicated his life to the arts since 1976.
              As the founder of Theatre-Place, he has not only acted in countless roles but has also **directed more than 40 drama productions.
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

      {/* 3. CURRENT & NEXT PRODUCTION (অপরিবর্তিত) */}
      < section style={{ backgroundColor: '#0a0a0a', padding: '80px 20px', textAlign: 'center' }
      }>
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

      {/* 4. EXPERTISE GRID (অপরিবর্তিত) */}
      < section style={{ backgroundColor: cardBg, padding: '100px 20px' }}>
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

      {/* 5. CALL TO ACTION (অপরিবর্তিত) */}
      < section style={{ padding: '100px 20px', textAlign: 'center' }}>
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

    </main >
  );
}