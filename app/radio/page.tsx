import Image from "next/image";
import Background from '@/components/background';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <>
      <Background />
      <Header />
      
      <main style={{ 
        position: 'relative',
        zIndex: 1,
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        padding: '2rem',
        paddingTop: '150px'
      }}>
        <div style={{ 
          maxWidth: '800px', 
          width: '100%',
          background: 'white',
          padding: '2rem',
          borderRadius: '8px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
        }}>
          <h2 style={{ marginBottom: '1rem', color: 'black' }}>Listen Live</h2>
          <iframe
            src="https://live365.com/station/goosefm-a53538"
            width="100%"
            height="600"
            frameBorder="0"
            scrolling="no"
            allow="autoplay"
            style={{ border: 'none' }}
          ></iframe>
        </div>
      </main>

      <Footer />
    </>
  )
}
