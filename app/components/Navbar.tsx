"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const gold = '#FFB100';

    const linkStyle = {
        color: '#ffffff',
        textDecoration: 'none',
        fontSize: '0.9rem',
        fontWeight: '500',
        transition: '0.3s ease',
        padding: '8px 10px',
        cursor: 'pointer'
    };

    return (
        <nav style={{
            backgroundColor: '#000',
            borderBottom: '1px solid #222',
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            width: '100%',
        }}>
            <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
                {/* Mobile Hamburger Button */}
                <div className="md:hidden flex w-full justify-end">
                    <button 
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white hover:text-gray-300 focus:outline-none p-1"
                        aria-label="Toggle Menu"
                    >
                        <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            {isOpen ? (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            ) : (
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
                
                {/* Desktop Links - hidden on mobile, flex on md and larger */}
                <div className="hidden md:flex gap-2 items-center w-full justify-center">
                    <Link href="/" style={linkStyle}>HOME</Link>
                    <Link href="/about" style={linkStyle}>ABOUT</Link>
                    <Link href="/works" style={linkStyle}>WORKS</Link>
                    <Link href="/drama-group" style={linkStyle}>GROUP</Link>
                    <Link href="/online-classes" style={linkStyle}>COURSES</Link>
                    <Link href="/contact" style={{
                        ...linkStyle,
                        border: `1px solid ${gold}`,
                        borderRadius: '5px',
                        color: gold,
                        padding: '6px 12px'
                    }}>CONTACT</Link>
                </div>
            </div>

            {/* Mobile Menu Dropdown - hidden on desktop */}
            {isOpen && (
                <div className="md:hidden flex flex-col bg-black border-t border-gray-800 px-4 py-4 space-y-4 items-center">
                    <Link href="/" style={linkStyle} onClick={() => setIsOpen(false)}>HOME</Link>
                    <Link href="/about" style={linkStyle} onClick={() => setIsOpen(false)}>ABOUT</Link>
                    <Link href="/works" style={linkStyle} onClick={() => setIsOpen(false)}>WORKS</Link>
                    <Link href="/drama-group" style={linkStyle} onClick={() => setIsOpen(false)}>GROUP</Link>
                    <Link href="/online-classes" style={linkStyle} onClick={() => setIsOpen(false)}>COURSES</Link>
                    <Link href="/contact" onClick={() => setIsOpen(false)} style={{
                        ...linkStyle,
                        border: `1px solid ${gold}`,
                        borderRadius: '5px',
                        color: gold,
                        padding: '6px 12px'
                    }}>CONTACT</Link>
                </div>
            )}
        </nav>
    );
}