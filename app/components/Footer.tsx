export default function Footer() {
    const gold = '#FFB100';

    return (
        <footer style={{
            backgroundColor: '#050505',
            color: '#ffffff',
            padding: '60px 20px',
            borderTop: `1px solid #222`, // এরর এড়াতে এখানে ব্যাকটিক ব্যবহার করা হয়েছে
            marginTop: 'auto'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '40px'
            }}>

                {/* কলাম ১: লোগো ও বর্ণনা */}
                <div>
                    <h3 style={{ color: gold, marginBottom: '15px' }}>THEATRE-PLACE</h3>
                    <p style={{ color: '#bbb', fontSize: '0.9rem', lineHeight: '1.6' }}>
                        Established 1976. A legendary journey of Bengali theatre led by Gourinath Banerjee.
                        Promoting art and culture for over 4 decades.
                    </p>
                </div>

                {/* কলাম ২: দ্রুত লিঙ্ক (গুগল বটের জন্য ভালো) */}
                <div>
                    <h4 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Quick Links</h4>
                    <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
                        <li><a href="/" style={{ color: '#888', textDecoration: 'none' }}>Home</a></li>
                        <li><a href="/works" style={{ color: '#888', textDecoration: 'none' }}>Drama Works</a></li>
                        <li><a href="/drama-group" style={{ color: '#888', textDecoration: 'none' }}>Our Group</a></li>
                        <li><a href="/terms" style={{ color: '#888', textDecoration: 'none' }}>Terms & Copyright</a></li>
                    </ul>
                </div>

                {/* কলাম ৩: কন্টাক্ট ডিটেইলস (গুগল লোকাল সার্চের জন্য) */}
                <div>
                    <h4 style={{ marginBottom: '15px', fontSize: '1.1rem' }}>Contact Details</h4>
                    <address style={{ color: '#888', fontStyle: 'normal', lineHeight: '1.6', fontSize: '0.9rem' }}>
                        <p>📍 West Bengal, India</p>
                        <p>📧 Email: <a href="mailto:gourinathbanerjee@gmail.com" style={{ color: gold }}>gourinathbanerjee@gmail.com</a></p>
                        <p>📞 Phone: +91 916290956284</p>
                    </address>
                </div>

            </div>

            {/* কপিরাইট সেকশন */}
            <div style={{
                textAlign: 'center',
                marginTop: '50px',
                paddingTop: '20px',
                borderTop: '1px solid #111',
                fontSize: '0.8rem',
                color: '#666'
            }}>
                <p>© {new Date().getFullYear()} Theatre-Place. All Rights Reserved. Authorized by Gourinath Banerjee.</p>
            </div>
        </footer>
    );
}