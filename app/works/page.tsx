"use client";
import { useState } from 'react';

// ১. থিয়েটার প্রোডাকশন ডেটা (বিশাল সিনোপসিস সহ)
export const worksData = [
    {
        id: "4",
        year: "1976",
        title: "SONAKTO",
        direction: "Gourinath Bandyopadhyay",
        acting: "Tridib Banerjee, Atanu Dey, kankana banerjee, Alik biswas, Sutapa Chattopadhyay", 
        desc: "A story of a ghost scripted in comedy",
        synopsis: "Set in the post-independence era of rural Bengal, 'SONAKTO' (The Identification) is a profound comedy type masterpiece that transcends the boundaries of a typical ghost story. The narrative centers on a once-aristocratic family struggling to maintain their dignity amidst fading wealth. The sudden 'appearance' of a spirit in their ancestral home is not presented as a horror element, but rather as a psychological mirror reflecting the family’s inner greed, secrets, and comical insecurities.\n\nThe play masterfully uses humor to dissect the human condition. As the family members attempt to 'identify' or 'sonakto' the ghost, they inadvertently strip away their own masks, revealing their true characters. It explores themes of existential crisis—where the living feel more like shadows than the dead. The spirit becomes a catalyst for truth, forcing a fractured family to confront the bonds they have long ignored. With sharp dialogues and meticulously crafted stagecraft, 'SONAKTO' remains a landmark production that questions the essence of identity in a changing society."
    },
    {
        id: "5",
        year: "1980",
        title: "Oshompurno",
        direction: "Gourinath Bandyopadhyay",
        acting: "shreya halder, Tridib banerjee, Amit Roy, Suparna Banerjee, Sourya Chakroborty",
        desc: "A story of a eunuch on stage",
        synopsis: "'OSHOMPURNO' (The Incomplete) is a daring and revolutionary production that brought the marginalized narrative of the 'third gender' to the forefront of Bengali theatre. The play is an emotional sentiment of an individual caught between biological reality and societal prejudice. It is a heart-wrenching portrayal of the 'incomplete' dreams, desires, and rights of a human being who is celebrated during festivities but shunned in daily life.\n\nThe story follows the protagonist's journey from a confused childhood to a resilient adulthood within the community. It celebrates their strength, their unique culture, and their capacity for unconditional love. The stage becomes a space for social justice, challenging the audience to look beyond the binary of gender. Through powerful performances, 'OSHOMPURNO' leaves the audience with a haunting realization: that the 'incompleteness' lies not within the individual, but within a society that refuses to accept the diversity of human existence."
    },
    {
        id: "6",
        year: "1985",
        title: "Hotat Nayok",
        direction: "Gourinath Bandyopadhyay",
        acting: "Shanto Das, Sudipta Sanyal, Sristi Pramanik, Ratul Dey, Shyam Pal",
        desc: "The story of a young boy who dreamt to be an actor",
        synopsis: "'HOTAT NAYOK' is a  tribute to the world of theatre itself. It tells the story of a young, wide-eyed boy from a small town whose heart beats for the stage. In a world that demands practical careers like engineering or medicine, his dream of becoming an actor is seen as a foolish whim. The play describes his struggles, the rejection he faces at auditions, and the immense loneliness of an artist.\n\nHowever, the narrative takes a magical turn when he finally gets his 'sudden' break. It explores the 'hero' (Nayok) that resides within every common man. The story is a deep dive into the sacrifices an artist makes—the hunger, the sleepless nights, and the ultimate euphoria of hearing the first clap from the audience. It is an inspirational saga for anyone who has ever dared to dream against all odds."
    },
    {
        id: "7",
        year: "1988",
        title: "POSTMASTER",
        direction: "Gourinath Bandyopadhyay",
        acting: "Mita Chaudhury, Priya Mondal, Anirban Das, Sana Das, Debasish Mondal",
        desc: "The story written by Rabindranath Tagore scripted in drama",
        synopsis: "Based on Rabindranath Tagore's immortal short story, this theatrical adaptation of 'POSTMASTER' is a lyrical exploration of loneliness and the silent bonds of the heart. Set in the lush but at  the village of Ulapur, it depicts the relationship between an urban postmaster and a simple orphan girl, Ratan. The play captures the immense 'gap' between two worlds—the postmaster’s longing for the city and Ratan’s growing emotional world built around him.\n\nThe production uses the sound of rain and the rustling of leaves to create an atmospheric experience. It delves into the tragedy of 'unspoken farewells.' When the postmaster eventually leaves the village, the play focuses on Ratan’s silent heartbreak—a pain so deep that it questions the very nature of human attachments. This adaptation is a tribute to Tagore’s philosophy of the profound sorrow that lies beneath simple human interactions."
    },
    {
        id: "8",
        year: "1991",
        title: "MAHANAYAK",
        direction: "Gourinath Bandyopadhyay",
        acting: "Gourinath Bandyopadhyay, Piyali Das, Kankana Banerjee, Sukumar Mondal, Biplab Halder, Kumkum Ghosh",
        desc: "The life of the legendary actor Uttam Kumar",
        synopsis: "'MAHANAYAK' is an epic biographical drama that pays homage to the 'God of Bengali Cinema,' Uttam Kumar. But this play is not just a collection of his film clips; it is an intimate look at the man behind the superstar. It explores the 'Mahanayak's' internal struggles, his legendary charisma, and the immense pressure of being the face of an entire industry. \n\nThe narrative moves between his early days of struggle as a 'flop master' to his rise as an unstoppable icon. It captures his relationship with his co-stars, his fans, and his own shadow. The play asks a fundamental question: What does it cost to become a legend? Through breathtaking performances, 'MAHANAYAK' recreates an era of glamour and tragedy, making the audience feel as if the legend has truly returned to the stage for one last bow."
    },
    {
        id: "4b",
        year: "1995",
        title: "BISHORJONER BADDI",
        direction: "Gourinath Bandyopadhyay",
        acting: "Arpita Samanta, Atanu Dey, Kankana Banerjee, Tridib Banerjee, Ratan Halder, Madhura Roy",
        desc: "Story of a poor girl's tragedy",
        synopsis: "'BISHORJONER BADDI' is a dark, gripping tragedy that exposes the horrific underbelly of social hierarchy and moral decay. It follows the life of a poor, innocent girl who becomes an easy target for the local powerful wicked man. The title symbolizes the 'drumbeat of sacrifice'—where a human life is sacrificed at the altar of ego and lust.\n\nThe play is a scathing critique of a society that watches in silence as innocence is murdered. As the narrative builds towards its shattering climax, the girl’s death becomes a haunting symbol of the 'Bishorjon' (immersion) of humanity itself. It is a loud, visceral cry against injustice, leaving the audience in a state of deep judgement about the 'villains' that exist among us in plain sight."
    },
    {
        id: "1",
        year: "2000",
        title: "ITI BINODINI",
        direction: "Gourinath Bandyopadhyay",
        acting: "Saswati Bhattacharya, Alo Biswas, Kumkum Ghosh, Rajeswari Das, Sanjib Roy",
        desc: "Story of the actress Binodini Dasi",
        synopsis: "'ITI BINODINI' (Yours, Binodini) is a tragic but empowering historical drama based on the life of Nati Binodini, the first female star of the Bengali stage. The play explores her journey from a marginalized background to becoming the soul of the Star Theatre. It highlights the betrayal she faced from those she trusted and the spiritual guidance she received from Sri Ramakrishna.\n\nThe production is a visual spectacle, recreating the 19th-century theatre era. It focuses on the 'woman' behind the 'actress'—her desire for respect, her love for the stage, and her ultimate sacrifice when she was forced to leave the limelight. The play is a powerful statement on female power and the price of artistic immortality and also depicting the politics and the cruel mindset of that century. "
    },
    {
        id: "2",
        year: "2006",
        title: "DENA PAONA",
        direction: "Gourinath Bandyopadhyay",
        acting: "Sana Das, Atanu Dey, Oindrila Halder, Subhra Chatterjee, Mrinal Dey, Abhirup Bose",
        desc: "Tagore's story on the dowry system",
        synopsis: "A haunting adaptation of Rabindranath Tagore's classic, 'DENA PAONA' (Debt and Payment) is a sharp attack on the dowry system that continues to plague society. It tells the story of Nirupama, a gentle girl whose life is systematically destroyed by her greedy in-laws. The play focuses on the dehumanization of women, where a bride is treated as a mere 'payment' or 'debt' to be settled.\n\nThe production highlights the emotional torture Nirupama undergoes as she witnesses her father’s bankruptcy and humiliation. The tragic end of the play serves as a mirror to a society that values money over human life. It is a timeless story that remains relevant even today, urging the audience to fight against the silent killers within our domestic spaces."
    }
];

export const nonTheatreWorks = [
    { 
        id: "n1", year: "2000", title: "Jononi", type: "Serial", role: "Anukul Babu",
        details: "Played the role of an aged, wise man who becomes the moral and legal support of the family." 
    },
    { 
        id: "n2", year: "2003", title: "Sudhu Tomari Jonnye", type: "Movie", role: "Uncle",
        details: "A pivotal character who guides the protagonist through values and shaping the family to right path." 
    },
    { 
        id: "n3", year: "2006", title: "Jamuna Dhaki", type: "Serial", role: "Bhusan Mondal",
        details: "A negative lead role; a wicked villager plotting to trap wealth and disturbing all the villager's life by his notorious charecter."  
    },
    { 
        id: "n4", year: "2007", title: "Bamakhepa", type: "Movie", role: "The Monk",
        details: "A soulful character of a monk devoted to Ma Kali, Bama walks his own wild path, free from every rule." 
    },
    { 
        id: "n5", year: "2010", title: "Erao Sotru", type: "Serial", role: "Chief Minister",
        details: "A powerful character portraying a dedicated leader describing his struggles and dedication towards shaping the society." 
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
                                
                                <div style={{ margin: '15px 0', padding: '10px', background: '#222', borderRadius: '5px' }}>
                                    <p style={{ fontSize: '0.75rem', color: gold, marginBottom: '5px' }}>Voiceover by Gourinath Bandyopadhyay:</p>
                                    <audio controls style={{ width: '100%', height: '35px' }}>
                                        <source src={`/audio/${work.title.toLowerCase().replace(/ /g,"_")}.mp3`} type="audio/mpeg" />
                                    </audio>
                                </div>

                                <hr style={{ borderColor: '#333', margin: '10px 0' }} />
                                <h4 style={{ color: gold, marginBottom: '8px' }}>Detailed Synopsis:</h4>
                                <p style={{ color: '#eee', lineHeight: '1.8', whiteSpace: 'pre-wrap', fontSize: '1rem' }}>
                                    {work.synopsis}
                                </p>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <h1 style={{ textAlign: 'center', color: gold, fontSize: '2.5rem', marginBottom: '40px' }}>Movies & Serials</h1>
            <div style={{ maxWidth: '600px', margin: '0 auto' }}>
                <div style={{ border: '1px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
                    {nonTheatreWorks.map((work) => (
                        <div key={work.id} onClick={() => toggleWork(work.id)} style={{ cursor: 'pointer', borderBottom: '1px solid #222', backgroundColor: '#0a0a0a' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
                                <div style={{ flex: 1 }}>
                                    <h3 style={{ margin: '0 0 5px 0', color: '#fff', fontSize: '1.1rem' }}>{work.title}</h3>
                                    <span style={{ color: gold, fontSize: '0.85rem' }}>{work.type} | {work.year}</span>
                                </div>
                                <div style={{ flex: 1, textAlign: 'right' }}>
                                    <span style={{ color: '#888', display: 'block', fontSize: '0.7rem' }}>ROLE</span>
                                    <span style={{ color: '#eee' }}>{work.role}</span>
                                    <span style={{ color: gold, marginLeft: '10px', fontSize: '0.8rem' }}>{openId === work.id ? '▲' : '▼'}</span>
                                </div>
                            </div>
                            {openId === work.id && (
                                <div style={{ padding: '0 20px 20px 20px', backgroundColor: '#0f0f0f' }}>
                                    <p style={{ color: '#ccc', fontSize: '0.9rem', lineHeight: '1.5', fontStyle: 'italic', borderLeft: `2px solid ${gold}`, paddingLeft: '12px' }}>
                                        {work.details}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}