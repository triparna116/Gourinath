"use client"; // বাটন এবং ইন্টারঅ্যাকশনের জন্য এটি জরুরি
import Link from 'next/link';

export default function DramaGroupPage() {
    const gold = '#FFB100';
    const dark = '#050505';
    const cardBg = '#111';

    return (
        <main style={{ backgroundColor: dark, color: '#ffffff', minHeight: '100vh', fontFamily: 'sans-serif' }}>

            {/* 1. HERO SECTION */}
            <section style={{
                padding: '100px 20px 60px',
                textAlign: 'center',
                borderBottom: `3px solid ${gold}`
            }}>
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
                    <img src="/logo.png" alt="Theatre-Place Official Logo- Gourinath Banerjee Drama Group Kolkata" style={{ width: '80px', height: '80px', marginBottom: '10px' }} />
                    <h1 style={{ fontSize: 'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: '900', margin: '0' }}>
                        THEATRE-<span style={{ color: gold }}>PLACE</span>
                    </h1>
                    <p style={{ color: gold, letterSpacing: '3px', textTransform: 'uppercase', fontSize: '1.1rem', fontWeight: 'bold' }}>
                        Established 1976 • A Legacy of Excellence
                    </p>
                </div>
            </section>

            {/* 2. ABOUT THE GROUP */}
            <section style={{ padding: '80px 20px', maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2.5rem', color: gold, marginBottom: '30px' }}>Our Journey</h2>
                <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: '#bbb' }}>
                    <strong>Theatre-Place</strong> was founded in 1976 under the visionary leadership of Gourinath Banerjee.
                    For nearly five decades, we have been at the forefront of the theatrical arts, producing thought-provoking plays
                    and nurturing generations of actors. With over <strong>40+ drama productions directed by Gourinath Banerjee</strong>,
                    our group continues to define the standards of stage performance.
                </p>
            </section>

            {/* 3. CURRENT & NEXT PRODUCTION (এখানেই আপনার ভুল ছিল) */}
            <section style={{ padding: '60px 20px', backgroundColor: '#0a0a0a' }}>
                <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', color: gold, marginBottom: '50px' }}>Productions</h2>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center' }}>

                        {/* Current Production - Fixed Border */}
                        <div style={{
                            flex: '1', minWidth: '300px', backgroundColor: cardBg, padding: '40px', borderRadius: '20px', border: '1px solid ${gold}'
                        }}>
                            <span style={{ backgroundColor: gold, color: dark, padding: '5px 15px', borderRadius: '50px', fontSize: '0.8rem', fontWeight: 'bold' }}>NOW SHOWING</span>
                            <h3 style={{ fontSize: '2rem', marginTop: '20px' }}>Ontorale Nayika</h3>
                            <p style={{ color: '#888', marginTop: '10px' }}>A grand adaptation of the legendary actress Suchitra Sen directed by Gourinath Banerjee.</p>
                            <p style={{ color: gold, marginTop: '20px', fontWeight: 'bold' }}>Schedule: 2025 Winter Tour</p>
                        </div>

                        {/* Next Production - Fixed Border */}
                        <div style={{
                            flex: '1', minWidth: '300px', backgroundColor: '#1a1a1a', padding: '40px', borderRadius: '20px', border: '1px solid #333'
                        }}>
                            <span style={{ color: '#888', border: '1px solid #888', padding: '5px 15px', borderRadius: '50px', fontSize: '0.8rem' }}>UPCOMING</span>
                            <h3 style={{ fontSize: '2rem', marginTop: '20px', color: '#eee' }}>Summer Project 2026</h3>
                            <p style={{ color: '#666', marginTop: '10px' }}>An original script exploring contemporary social themes. Scripting and casting are in progress.</p>
                        </div>

                    </div>
                </div>
            </section>

            {/* 4. THE GALLERY */}
            <section style={{ padding: '100px 20px' }}>
                <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                    <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '60px', color: gold }}>The Legacy in Pictures</h2>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '25px'
                    }}>
                        {["/g1.jpg", "/g2.jpg", "/g3.jpg"].map((imgSrc, index) => (
                            <div key={index} style={{
                                height: '400px', borderRadius: '15px', overflow: 'hidden', border: '1px solid #333', backgroundColor: '#111'
                            }}>
                                <img
                                    src={imgSrc}
                                    alt={`Performance ${index + 1}`}
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: '#000', display: 'block' }}
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. GET IN TOUCH */}
            <section style={{ padding: '100px 20px', textAlign: 'center', backgroundColor: '#0a0a0a' }}>
                <h2 style={{ marginBottom: '30px', fontSize: '2.5rem' }}>Want to join the legacy?</h2>
                <p style={{ color: '#bbb', marginBottom: '40px', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto 40px' }}>
                    We are always looking for passionate actors, writers, and stage hands to join <strong>Theatre-Place</strong>.
                </p>
                <Link href="/contact">
                    <button style={{
                        backgroundColor: gold, color: dark, padding: '18px 50px', fontSize: '1.2rem', fontWeight: 'bold', border: 'none', borderRadius: '50px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(255, 177, 0, 0.2)'
                    }}>
                        GET IN TOUCH
                    </button>
                </Link>
            </section>

        </main>
    );
}