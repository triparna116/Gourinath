import Link from 'next/link';

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const gold = '#FFB100';

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#050505', color: '#fff' }}>
      <aside style={{ width: '250px', backgroundColor: '#111', borderRight: '1px solid #333', padding: '30px 20px' }}>
        <h2 style={{ color: gold, fontSize: '1.5rem', marginBottom: '40px', fontWeight: 'bold' }}>Admin Panel</h2>
        <nav style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <Link href="/admin" style={{ color: '#fff', textDecoration: 'none', padding: '10px', borderRadius: '5px', backgroundColor: '#222' }}>
            Dashboard Overview
          </Link>
          <Link href="/admin/slots" style={{ color: '#fff', textDecoration: 'none', padding: '10px', borderRadius: '5px', backgroundColor: '#222' }}>
            Slot Management
          </Link>
          <Link href="/" style={{ color: '#aaa', textDecoration: 'none', marginTop: '40px' }}>
            &larr; Back to Website
          </Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: '40px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}
