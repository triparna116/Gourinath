export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-8 py-20 text-black">
      <h1 className="text-4xl font-bold mb-4">
        Gourinath Banerjee
      </h1>

      <p className="text-lg mb-6">
        Actor • Drama Teacher • Script Writer
      </p>

      <p className="max-w-2xl text-base mb-10">
        A veteran theatre artist and actor with decades of experience in
        drama, cinema, and web series. Founder of a renowned drama group
        established in 1976, dedicated to nurturing talent and storytelling.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Expertise</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Theatre & Stage Acting</li>
          <li>Drama Teaching & Training</li>
          <li>Script Writing</li>
          <li>Cinema & Web Series</li>
        </ul>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-3">Since 1976</h2>
        <p>
          His drama group has been shaping artists and creating powerful
          performances for nearly five decades.
        </p>
      </section>
    </main>
  );
}