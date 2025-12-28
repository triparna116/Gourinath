"use client";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="w-full border-b bg-white px-6 py-4">
            <div className="mx-auto flex max-w-5xl items-center justify-between">
                <Link href="/" className="text-xl font-semibold">
                    Actor Portfolio
                </Link>

                <div className="flex gap-6 text-sm font-medium">
                    <Link href="/" className="hover:underline">Home</Link>
                    <Link href="/about" className="hover:underline">About</Link>
                    <Link href="/works" className="hover:underline">Works</Link>
                    <Link href="/drama-group" className="hover:underline">Drama Group</Link>
                    <Link href="/contact" className="hover:underline">Contact</Link>
                </div>
            </div>
        </nav>
    );
}