// app/components/Logo.tsx

export default function Logo({ size = 50 }) {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            cursor: 'pointer'
        }}>
            {/* লোগো ইমেজ */}
            <img
                src="/logo.png"
                alt="Theatre-Place Official Logo - Gourinath Banerjee Drama Group Kolkata"
                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
            />

            {/* ড্রামা গ্রুপের নাম ও সাল */}
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                    color: '#FFB100',
                    fontWeight: '900',
                    fontSize: '1.2rem',
                    letterSpacing: '1px',
                    lineHeight: '1'
                }}>
                    THEATRE-PLACE
                </span>
                <span style={{
                    color: '#888',
                    fontSize: '0.7rem',
                    letterSpacing: '2px',
                    marginTop: '4px'
                }}>
                    ESTD. 1976
                </span>
            </div>
        </div>
    );
}