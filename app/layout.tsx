import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// উন্নত মেটাডেটা: Geo-elements এবং Canonical URL যোগ করা হয়েছে
export const metadata: Metadata = {
  title: "Gourinath Banerjee | Legend of Bengali Theatre | Theatre-Place",
  description: "Official website of veteran theatre director Gourinath Banerjee. Exploring 40+ years of Bengali drama since 1976.",
  keywords: ["Gourinath Banerjee", "Theatre-Place", "Bengali Theatre", "Drama Director West Bengal", "Indian Theatre Actor"],
  alternates: {
    canonical: 'http://localhost:3000', // লাইভ হলে আপনার ডোমেইন দেবেন
  },
  openGraph: {
    title: "Gourinath Banerjee | Theatre-Place",
    description: "Legacy of Bengali Theatre since 1976.",
    url: "http://localhost:3000",
    siteName: "Theatre-Place",
    images: [{ url: "/og-image.jpg" }],
    type: "website",
  },
  // Geo-tags এআই বটের জন্য
  other: {
    "geo.region": "IN-WB",
    "geo.placename": "Kolkata",
    "geo.position": "22.5726;88.3639",
    "ICBM": "22.5726, 88.3639",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  // Advanced TheaterGroup Schema (AI বটের জন্য বিস্তারিত তথ্য)
  const theaterSchema = {
    "@context": "https://schema.org",
    "@type": "TheaterGroup",
    "name": "Theatre-Place",
    "alternateName": "থিয়েটার-প্লেস",
    "description": "Legendary Bengali theatre group led by veteran director Gourinath Banerjee since 1976.",
    "url": "http://localhost:3000",
    "logo": "http://localhost:3000/logo.png",
    "founder": {
      "@type": "Person",
      "name": "Gourinath Banerjee",
      "jobTitle": "Theatre Director and Actor",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "addressCountry": "India"
      }
    },
    "location": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Kolkata",
        "addressRegion": "West Bengal",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "22.5726",
        "longitude": "88.3639"
      }
    },
    "foundingDate": "1976"
  };

  // FAQ Schema (ChatGPT এবং Gemini-র জন্য)
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "Who is the director of Theatre-Place?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The director of Theatre-Place is Gourinath Banerjee, a veteran of Bengali theatre since 1976."
      }
    }, {
      "@type": "Question",
      "name": "Where is Gourinath Banerjee's theatre group located?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Theatre-Place is located in Kolkata, West Bengal, India."
      }
    }]
  };

  return (
    <html lang="en">
      <head>
        {/* Theater Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(theaterSchema) }}
        />
        {/* FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', margin: 0 }}>
        <Navbar />

        <main style={{ flex: 1 }}>
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}