"use client";

export default function TermsPage() {
    const gold = '#FFB100';
    const dark = '#050505';

    return (
        <main style={{
            backgroundColor: dark,
            color: '#ffffff',
            minHeight: '100vh',
            padding: '100px 20px',
            fontFamily: 'sans-serif',
            lineHeight: '1.8'
        }}>
            <div style={{ maxWidth: '900px', margin: '0 auto' }}>

                {/* Header */}
                <h1 style={{ color: gold, fontSize: '3rem', marginBottom: '40px', textAlign: 'center' }}>
                    Terms & Copyright Protection
                </h1>

                {/* 1. Ownership and Copyright */}
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: gold }}>1. Intellectual Property Rights</h2>
                    <p>
                        All content on this website, including but not limited to <strong>drama scripts, production photographs,
                            performance videos, and direction notes</strong>, is the exclusive intellectual property of
                        <strong> Gourinath Banerjee</strong> and <strong>Theatre-Place</strong>.
                    </p>
                    <p style={{ backgroundColor: '#111', padding: '15px', borderLeft: `4px solid ${gold}`, marginTop: '10px' }}>
                        Any unauthorized reproduction, distribution, or public performance of these works without explicit
                        written consent from Gourinath Banerjee is strictly prohibited and subject to legal action under
                        the <strong>Copyright Act of 1957 (India)</strong>.
                    </p>
                </section>

                {/* 2. Usage Policy */}
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: gold }}>2. Professional Use & Licensing</h2>
                    <p>
                        If you wish to perform a play directed or written by Gourinath Banerjee, or use any media material for
                        academic or journalistic purposes, you must obtain a formal license or permission.
                    </p>
                    <ul style={{ paddingLeft: '20px' }}>
                        <li>Requests for performance rights should be sent via the <strong>Contact Page</strong>.</li>
                        <li>Photos and videos used for news/media must credit <em>"Theatre-Place Archive / Gourinath Banerjee"</em>.</li>
                    </ul>
                </section>

                {/* 3. Privacy and Data */}
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: gold }}>3. User Information</h2>
                    <p>
                        Any information submitted through our contact form is kept strictly confidential. We do not share
                        your personal details with third-party organizations.
                    </p>
                </section>

                {/* 4. Limitation of Liability */}
                <section style={{ marginBottom: '40px' }}>
                    <h2 style={{ color: gold }}>4. Disclaimer</h2>
                    <p>
                        While we strive for accuracy, <strong>Theatre-Place</strong> is not responsible for any technical
                        issues or outdated information found on external links mentioned in this portal.
                    </p>
                </section>

                {/* Footer info within Terms */}
                <div style={{
                    marginTop: '60px',
                    borderTop: '1px solid #333',
                    paddingTop: '20px',
                    textAlign: 'center',
                    color: '#888',
                    fontSize: '0.9rem'
                }}>
                    <p>© {new Date().getFullYear()} Theatre-Place. All Rights Reserved. Authorized by Gourinath Banerjee.</p>
                    <p>Last Updated: December 2025</p>
                </div>

            </div>
        </main >
    );
}