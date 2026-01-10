"use client";
import { useState } from 'react';

// ১. থিয়েটার প্রোডাকশন ডেটা
export const worksData = [
    {
        id: "4",
        year: "1976",
        title: "SONAKTO",
        direction: "Gourinath Bandyopadhyay",
        acting: "Tridib Banerjee, Atanu Dey, kankana banerjee, Alik biswas, Sutapa Chattopadhyay", 
        desc: "A story of a ghost scripted in comedy",
        synopsis: "Full synopsis: A hilarious story of a ghost who visits a family and becomes their daily chaos."
    },
    {
        id: "5",
        year: "1980",
        title: "Oshompurno",
        direction: "Gourinath Bandyopadhyay",
        acting: "shreya halder, Tridib banerjee, Amit Roy, Suparna Banerjee, Sourya Chakroborty",
        desc: "A story of a eunuch on stage",
        synopsis: "Full synopsis : It is the story of the struggles and life of a eunuch."
    },
    {
        id: "6",
        year: "1985",
        title: "Hotat Nayok",
        direction: "Gourinath Bandyopadhyay",
        acting: "Shanto Das, Sudipta Sanyal, Sristi Pramanik, Ratul Dey, Shyam Pal",
        desc: "The story of a young boy who dreamt to be an actor",
        synopsis: "Full synopsis : It is the story of the life of a young boy who dreamt to be an actor."
    },
    {
        id:  "7",
        year: "1988",
        title: "POSTMASTER",
        direction: "Gourinath Bandyopadhyay",
        acting: "Mita Chaudhury, Priya Mondal, Anirban Das, Sana Das, Debasish Mondal",
        desc: "The story written by Rabindranath Tagore scripted in drama on stage",
        synopsis: "Based on Tagore's profound writing this play focuses on relationship between postmaster and ratan."
    },
    {
        id: "8",
        year: "1991",
        title: "MAHANAYAK",
        direction: "Gourinath Bandyopadhyay",
        acting: "Gourinath Bandyopadhyay, Piyali Das, Kankana Banerjee, Sukumar Mondal, Biplab Halder, Kumkum Ghosh",
        desc: "The description about the life of the legendary actor Uttam Kumar",
        synopsis: "This play explores the journey of greatest star of bengali cinema, Uttam Kumar, his struggles and his legendary rise to fame."
    },
    {
        id: "4",
        year: "1995",
        title: "BISHORJONER BADDI",
        direction: "Gourinath Bandyopadhyay",
        acting: "Arpita Samanta, Atanu Dey, Kankana Banerjee, Tridib Banerjee, Ratan Halder, Madhura Roy",
        desc: "Story of a poor and innocent girl concluding to her most saddest tragedy",
        synopsis: "Explores the journey of a poor and innocent girl who got murdered by a very wicked villager."
    },
    {
        id: "1",
        year: "2000",
        title: "ITI BINODINI",
        direction: "Gourinath Bandyopadhyay",
        acting: "Saswati Bhattacharya, Alo Biswas, Kumkum Ghosh, Rajeswari Das, Sanjib Roy",
        desc: "Story of a renowned actress Binodini Dasi",
        synopsis: "This drama depicts the tragic yet inspiring life of Binodini Dasi, the first star of Bengali Stage."
    },
    {
        id: "2",
        year: "2006",
        title: "DENA PAONA",
        direction: "Gourinath Bandyopadhyay",
        acting: "Sana Das, Atanu Dey, Oindrila Halder, Subhra Chatterjee, Mrinal Dey, Abhirup Bose",
        desc: "Story scripted in stage whhich was written by Tagore highlights the evils of dowry system",
        synopsis: "Potrays the suffering of Nirmala, a gentle woman oppressed by her in laws due to dowry demands."
    }
    
];


export const nonTheatreWorks = [
    { 
        id: "n1", 
        year: "2000", 
        title: "Jononi", 
        type: "Serial", 
        role: "Anukul Babu (Lead Character)",
        details: "Played the role of an aged, wise man who becomes the moral and legal support of the family during their toughest times." 
    },
    { 
        id: "n2", 
        year: "2003", 
        title: "Sudhu Tomari Jonnye", 
        type: "Movie", 
        role: "Uncle / Family Mentor",
        details: "A pivotal character who guides the protagonist. He is portrayed as a man who shaped the family into a proper lifestyle through clear understanding and values." 
    },
    { 
        id: "n3", 
        year: "2006", 
        title: "Jamuna Dhaki", 
        type: "Serial", 
        role: "Bhusan Mondal (Antagonist)",
        details: "A negative lead role; portrayed as a wicked villager constantly plotting to trap others' property and wealth." 
    },
    { 
        id: "n4", 
        year: "2007", 
        title: "Bamakhepa", 
        type: "Movie", 
        role: "The Devoted Monk (Bama)",
        details: "A soulful character of a monk who devoted his entire life to the puja of Ma Kali and eventually becomes her greatest disciple." 
    },
    { 
        id: "n5", 
        year: "2010", 
        title: "Erao Sotru", 
        type: "Serial", 
        role: "Chief Minister",
        details: "A powerful character portraying a dedicated leader who struggles against systemic corruption to improve the conditions of society." 
    }
];

export default function WorksPage() {
    const gold = '#FFB100';
    const [openId, setOpenId] = useState<string | null>(null);

    const toggleWork = (id: string) => {
        setOpenId(openId === id ? null : id);
    };

    return (
        <main style={{ backgroundColor: '#050505', color: '#fff', padding: '80px 15px', minHeight: '100vh', overflowX: 'hidden' }}>
            <h1 style={{ textAlign: 'center', color: gold, fontSize: '2.5rem', marginBottom: '40px' }}>Productions</h1>

            {/* থিয়েটার সেকশন */}
            <div style={{ maxWidth: '600px', margin: '0 auto 80px auto' }}>
                {worksData.map((work) => (
                    <div key={work.id} onClick={() => toggleWork(work.id)} style={{ borderBottom: '1px solid #333', padding: '25px 0', cursor: 'pointer' }}>
                        <span style={{ color: gold, fontWeight: 'bold' }}>{work.year}</span>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h2 style={{ margin: '5px 0', fontSize: '1.4rem', textTransform: 'uppercase' }}>{work.title}</h2>
                            <span style={{ color: gold }}>{openId === work.id ? '−' : '+'}</span>
                        </div>
                        <p style={{ color: '#bbb', fontSize: '0.95rem' }}>{work.desc}</p>
                        {openId === work.id && (
                            <div style={{ marginTop: '15px', padding: '15px', backgroundColor: '#111', borderLeft: '3px solid #FFB100' }}>
                                <p><strong>Direction:</strong> {work.direction}</p>
                                <p><strong>Acting:</strong> {work.acting}</p>
                                <hr style={{ borderColor: '#333', margin: '10px 0' }} />
                                <h4 style={{ color: gold, marginBottom: '8px' }}>Synopsis:</h4>
                                <p style={{ color: '#eee', lineHeight: '1.5' }}>{work.synopsis}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* মুভি ও সিরিয়াল সেকশন */}
            <h1 style={{ textAlign: 'center', color: gold, fontSize: '2.5rem', marginBottom: '40px' }}>Movies & Serials</h1>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
                    {nonTheatreWorks.map((work) => (
                        <div key={work.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px', borderBottom: '1px solid #222', backgroundColor: '#0a0a0a' }}>
                            <div style={{ flex: 1 }}>
                                <h3 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1.1rem' }}>{work.title}</h3>
                                <span style={{ color: gold, fontSize: '0.85rem' }}>{work.type} | {work.year}</span>
                            </div>
                            <div style={{ flex: 1, textAlign: 'right' }}>
                                <span style={{ color: '#888', display: 'block', fontSize: '0.7rem' }}>ROLE</span>
                                <span style={{ color: '#eee' }}>{work.role}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}