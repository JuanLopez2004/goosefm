import Background from '@/components/background';
import Header from '@/components/header';
import Hero from '@/components/hero';
import Footer from '@/components/footer';
import ContentBody from "@/components/contentbody";
import styles from '@/styles/contentbody.module.css';

export default function Home() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Background />
      <Header />
      <Hero />
      <ContentBody noHeaderOffset>
        <section style={{ marginBottom: '1.25rem' }}>
          <h3 style={{ marginTop: 0, marginBottom: '0.5rem' }}>About DeKalb Music Scene</h3>
          <img
            src="https://github.com/user-attachments/assets/2af4e33c-53b6-4123-8333-785fe5d761a4"
            alt="DeKalb Music Scene"
            width="200"
            style={{ marginBottom: '0.65rem' }}
          />
          <p>
            The DeKalb Music scene is a small music scene in the heart of Northern Illinois and nestled inbetween Rockford and Chicago. Many bands
            from Chicago, Elgin, Aurora, Rockford, The Quad Cities, Kankakee, Joliet, Southern Wisconsin, and Northwestern Indiana travel through the cornfields of DeKalb.
          </p>
        </section>
        
        <section>
          <h3>Venues in the Area</h3>
          <ul>
            <li>Fargo Venue</li>
            <li>The 7th Street Space</li>
            <li>The Egyptian Theatre</li>
          </ul>
        </section>
        
        <section>
          <h3>Built For The Local Scene</h3>
          <p>
            This site is focused on in-person music culture in DeKalb, Check the About page to learn more and use the show pages to explore what is next.
          </p>
          <p>
            Join the <a href="https://discord.gg/tdjqRACpwn" className={styles.discordLink}>Discord!</a>
          </p>
        </section>
      </ContentBody>
      <Footer />
    </div>
  )
}
