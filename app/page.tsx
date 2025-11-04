export default function Home() {
  return (
    <main style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
    }}>
      <h1 style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        marginBottom: '1rem',
        textAlign: 'center',
      }}>
        Welcome to Your App
      </h1>
      <p style={{
        fontSize: '1.25rem',
        textAlign: 'center',
        maxWidth: '600px',
        opacity: 0.9,
      }}>
        This is a Next.js application ready for you to customize.
      </p>
    </main>
  )
}
