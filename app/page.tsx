import Background from '@/components/background';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import ContentBody from "@/components/contentbody";

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Background />
      <Header />
      <Hero />
      <ContentBody>
        
        <img src="https://github.com/user-attachments/assets/2af4e33c-53b6-4123-8333-785fe5d761a4" alt="Goose FM Logo" width="200" />
        <h3>About Goose FM</h3>
        <p>Established in 2026, goosefm, DeKalb's alternative, noncomercial, online radio station,
           is ran for NIU students by NIU students. We are dedicated to providing a platform for
            diverse voices and music that you won't find on mainstream stations.
        </p>
        
        <section>
          <h3>What We Offer</h3>
          <ul>
            <li>Live radio broadcasts</li>
            <li>Curated music playlists</li>
            <li>Talk shows and interviews</li>
            <li>Community events and updates</li>
          </ul>
        </section>
        
        <section>
          <h3>Join Our Community!</h3>
          <p>Follow us on Instagram and stay updated with the latest news and events from goosefm.
             Whether you're a listener, a DJ, or just curious, there's a place for you here.
          </p>
        </section>
      </ContentBody>
      <Footer />
    </div>
  )
}
