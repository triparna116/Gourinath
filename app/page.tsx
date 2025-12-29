// app/page.tsx

export default function HomePage() {
  const gold = '#FFB100';
  const dark = '#050505';
  const cardBg = '#111';

  return (
    <main style={{ backgroundColor: dark, color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>

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
        borderBottom: `4px solid ${gold}`
      }}>
        <div style={{ padding: '20px', maxWidth: '900px' }}>
          <h1 style={{ fontSize: 'clamp(3rem, 10vw, 6rem)', margin: '0', fontWeight: '900', letterSpacing: '-2px' }}>
            GOURINATH <span style={{ color: gold }}>BANERJEE</span>
          </h1>
          <div style={{ width: '80px', height: '4px', backgroundColor: gold, margin: '20px auto' }}></div>
          <p style={{ fontSize: '1.5rem', color: '#ccc', letterSpacing: '4px', textTransform: 'uppercase', fontWeight: '300' }}>
            Actor • Drama Teacher • Script Writer
          </p>
        </div>
      </section>

      {/* 2. THE BIO SECTION - মাথা কাটা সমস্যা এখানে ঠিক করা হয়েছে */}
      <section style={{ padding: '100px 20px', maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '60px', alignItems: 'center' }}>
          <div style={{ flex: '1', minWidth: '300px' }}>
            <h2 style={{ fontSize: '2.5rem', color: gold, marginBottom: '20px' }}>The Artist</h2>
            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#bbb' }}>
              A veteran theatre artist and actor with decades of experience in drama, cinema, and web series.
              Founder of a renowned drama group established in 1976, dedicated to nurturing talent and storytelling.
            </p>
            <div style={{ marginTop: '30px', borderLeft: `3px solid ${gold}`, paddingLeft: '20px' }}>
              <p style={{ fontStyle: 'italic', fontSize: '1.1rem', color: '#eee' }}>
                "Theatre is not just a performance; it's the heartbeat of human experience."
              </p>
            </div>
          </div>

          <div style={{ flex: '1', minWidth: '300px' }}>
            {/* Image Styling Updated to prevent head crop */}
            <img
              src="/g3.jpg"
              alt="Gourinath Banerjee"
              style={{
                width: '100%',
                height: 'auto',        // এটি ছবিকে জুম করা থেকে আটকাবে
                maxHeight: '600px',    // ছবির দৈর্ঘ্য নিয়ন্ত্রণ করবে
                objectFit: 'cover',
                objectPosition: 'top', // এটি নিশ্চিত করবে যেন উপরের অংশ (মাথা) আগে দেখা যায়
                borderRadius: '20px',
                border: '1px solid #333'
              }}
            />
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE GRID */}
      <section style={{ backgroundColor: cardBg, padding: '100px 20px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: gold }}>Expertise</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px' }}>

            {[
              { title: "Theatre & Stage", desc: "Classical and modern stage performances." },
              { title: "Drama Teaching", desc: "Professional workshops and training since 1976." },
              { title: "Script Writing", desc: "Original scripts for stage and screen." },
              { title: "Cinema & Web", desc: "Character acting for digital and silver screens." }
            ].map((item, i) => (
              <div key={i} style={{
                padding: '40px 30px',
                backgroundColor: '#1a1a1a',
                borderRadius: '15px',
                border: '1px solid #333',
                textAlign: 'center'
              }}>
                <h3 style={{ color: gold, marginBottom: '15px' }}>{item.title}</h3>
                <p style={{ color: '#888', margin: '0' }}>{item.desc}</p>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* 4. FOOTER CALL TO ACTION */}
      <section style={{ padding: '80px 20px', textAlign: 'center' }}>
        <h2 style={{ marginBottom: '30px' }}>Ready to collaborate?</h2>
        <button style={{
          backgroundColor: gold,
          color: dark,
          padding: '15px 50px',
          fontSize: '1.1rem',
          fontWeight: 'bold',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer'
        }}>
          VIEW WORKS
        </button>
      </section>

    </main>
  );
}