export default function Home() {
  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      backgroundColor: '#fafafa'
    }}>
      <main style={{
        maxWidth: '768px',
        padding: '64px 32px',
        textAlign: 'center'
      }}>
        <h1 style={{
          fontSize: '2rem',
          fontWeight: 600,
          marginBottom: '1rem',
          color: '#171717'
        }}>
          To get started, edit the page.tsx file.
        </h1>
        <p style={{
          fontSize: '1.125rem',
          lineHeight: '1.75rem',
          color: '#525252',
          marginBottom: '2rem'
        }}>
          Looking for a starting point or more instructions? Head over to{" "}
          <a
            href="https://nextjs.org/learn"
            style={{ color: '#171717', textDecoration: 'underline' }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Learning
          </a>{" "}
          center.
        </p>
      </main>
    </div>
  );
}
