export default function WorksPage() {
    const gold = '#FFB100';
    const dark = '#050505';
    const cardBg = '#111';
    const grayText = '#bbbbbb';

    // Data for your works
    const cinemaWorks = [
        { title: "Sudhu Tomari jonno", role: "father", year: "2003" },
        { title: "bamakhepa", role: "priest", year: "2004" },
        { title: "jamuna dhaki", role: "lead role", year: "2019" },
    ];

    const scriptWorks = [
        { title: "mahanayak", description: "Adapted to stage drama" },
        { title: "dena paona", description: "Adapted to stage drama" },
    ];

    // Shared styles
    const sectionStyle = { padding: '80px 20px', maxWidth: '1200px', margin: '0 auto' };
    const cardStyle = {
        backgroundColor: cardBg,
        padding: '30px',
        borderRadius: '15px',
        border: '1px solid #333',
        // Adding a subtle hover effect
        transition: 'transform 0.3s ease, border-color 0.3s ease',
    };

    return (
        <main style={{ backgroundColor: dark, color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>

            {/* 1. CINEMATIC HERO HEADER */}
            <section style={{
                padding: '120px 20px 80px',
                textAlign: 'center',
                // Using a dark overlay on one of your images for a dramatic background
                backgroundImage: 'linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url("/g1.jpg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                borderBottom: `3px solid ${gold}`
            }}>
                <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: '900', margin: '0', letterSpacing: '-1px' }}>
                    WORKS & <span style={{ color: gold }}>PERFORMANCES</span>
                </h1>
                <p style={{ color: gold, fontSize: '1.2rem', letterSpacing: '3px', marginTop: '20px', textTransform: 'uppercase' }}>
                    Cinema • Web Series • Stage Scripts
                </p>
            </section>

            {/* 2. CINEMA & WEB SERIES SECTION */}
            <section style={sectionStyle}>
                <h2 style={{ fontSize: '2.5rem', color: gold, marginBottom: '50px', textAlign: 'center' }}>
                    🎬 Cinema & Web Series
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {cinemaWorks.map((work, index) => (
                        <div key={index} style={cardStyle}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '10px' }}>{work.title}</h3>
                            <p style={{ fontSize: '1.2rem', color: gold, marginBottom: '5px', fontWeight: 'bold' }}>
                                Role: {work.role}
                            </p>
                            <p style={{ color: grayText, fontStyle: 'italic' }}>Year: {work.year}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. SCRIPTS SECTION */}
            <section style={{ ...sectionStyle, backgroundColor: '#0a0a0a', paddingBottom: '120px' }}>
                <h2 style={{ fontSize: '2.5rem', color: gold, marginBottom: '50px', textAlign: 'center' }}>
                    📜 Scripts Adapted for Stage
                </h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                    {scriptWorks.map((work, index) => (
                        <div key={index} style={cardStyle}>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>{work.title}</h3>
                            <p style={{ fontSize: '1.1rem', color: grayText, lineHeight: '1.6' }}>
                                {work.description}
                            </p>
                        </div>
                    ))}
                </div>
            </section>

        </main>
    );
}