"use client";
import Link from 'next/link';

export default function Navbar() {
    const gold = '#FFB100';

    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '0.9rem', // মোবাইলের জন্য ফন্ট সাইজ সামান্য কমানো হয়েছে
        fontWeight: '500',
        transition: '0.3s ease',
        padding: '8px 10px', // প্যাডিং অ্যাডজাস্ট করা হয়েছে
        cursor: 'pointer'
    };

    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'center', // নাম নেই তাই মেনু মাঝখানে রাখা হয়েছে
            alignItems: 'center',
            padding: '15px 10px', // ৫০ পিক্সেল প্যাডিং কমিয়ে ১০ পিক্সেল করা হয়েছে যাতে স্ক্রল না হয়
            backgroundColor: '#000',
            borderBottom: '1px solid #222',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
            boxSizing: 'border-box' // এটি সাইড স্ক্রল আটকানোর জন্য সবথেকে জরুরি
        }}>
            {/* বাঁদিকের লোগো ও নাম অংশটি কাকার কথামতো সরিয়ে দেওয়া হয়েছে */}

            <div style={{
                display: 'flex',
                gap: '8px', // আইটেমগুলোর মাঝের গ্যাপ কিছুটা কমানো হয়েছে
                alignItems: 'center',
                flexWrap: 'wrap', // স্ক্রিন খুব ছোট হলে মেনু নিচে নেমে আসবে, সাইডে স্ক্রল হবে না
                justifyContent: 'center'
            }}>
                <Link href="/" style={linkStyle}>HOME</Link>
                <Link href="/about" style={linkStyle}>ABOUT</Link>
                <Link href="/works" style={linkStyle}>WORKS</Link>
                <Link href="/drama-group" style={linkStyle}>GROUP</Link>
                <Link href="/contact" style={{
                    ...linkStyle,
                    border: `1px solid ${gold}`,
                    borderRadius: '5px',
                    color: gold,
                    padding: '6px 12px'
                }}>CONTACT</Link>
            </div>
        </nav >
    );
}