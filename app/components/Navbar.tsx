"use client";
import Link from 'next/link';

export default function Navbar() {
    const gold = '#FFB100';

    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '1rem',
        fontWeight: '500',
        transition: '0.3s ease',
        padding: '8px 12px',
        cursor: 'pointer' // এটি মাউস নিলে হাতের চিহ্ন দেখাবে
    };

    return (
        <nav style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
            padding: '20px 50px', backgroundColor: '#000', borderBottom: '1px solid #222',
            position: 'sticky', top: 0, zIndex: 1000
        }}>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
                <img src="/logo.png" alt="Logo" style={{ width: '40px', height: '40px' }} />
                <span style={{ color: gold, fontWeight: 'bold', fontSize: '1.2rem' }}>THEATRE-PLACE</span>
            </Link>

            <div style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
                <Link href="/" style={linkStyle}>HOME</Link>
                <Link href="/about" style={linkStyle}>ABOUT</Link>
                <Link href="/works" style={linkStyle}>WORKS</Link>
                <Link href="/drama-group" style={linkStyle}>GROUP</Link>
                <Link href="/contact" style={{
                    ...linkStyle,
                    border: `1px solid ${gold}`,
                    borderRadius: '5px',
                    color: gold
                }}>CONTACT</Link>
            </div>
        </nav >
    );
}