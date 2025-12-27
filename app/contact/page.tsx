import Image from "next/image";
import Background from '@/components/background';
import Header from '@/components/header';
import Footer from '@/components/footer';
import styles from '@/styles/contact.module.css';

export default function Contact() {
  return (
    <>
      <Background />
      <Header />
      <main className={styles.contactPage}>
        <div className={styles.contactGrid}>
          <div className={styles.contactContent}>
            <h1 className={styles.mainTitle}>Contact Us!</h1>

            <section className={styles.section}>
              <h2>Want to DJ?</h2>
              <p>Please fill <a href="#" className={styles.link}>this form</a> out</p>
            </section>

            <section className={styles.section}>
              <h2>Want to Donate?</h2>
              <p>Please donate to our <a href="#" className={styles.link}>PayPal here</a></p>
            </section>

            <section className={styles.section}>
              <h2>General Inquiry?</h2>
              <p>Please email <a href="mailto:thisemail@email.com" className={styles.link}>thisemail@email.com</a></p>
            </section>
          </div>
          
          <div className={styles.imageContainer}>
            <img 
              src="https://github.com/user-attachments/assets/2af4e33c-53b6-4123-8333-785fe5d761a4" 
              alt="Goose FM Logo" 
              className={styles.contactImage}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
