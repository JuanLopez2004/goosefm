import Background from '@/components/background';
import Header from '@/components/header';
import ContentBody from '@/components/contentbody';
import Footer from '@/components/footer';

export default function Schedule() {
  return (
    <>
      <Background />
      <Header />
      <ContentBody>
        <h2>Weekly Schedule</h2>
        <p>Check out our programming schedule below. All times are in Central Time (CT).</p>
        
        <img 
          src="https://github.com/user-attachments/assets/660a6f52-016c-4ec3-a6ca-df298b2a3223" 
          alt="Goose FM Weekly Schedule" 
          style={{ width: '100%', maxWidth: '400px', margin: '2rem auto', display: 'block' }}
        />
      </ContentBody>
      <Footer />
    </>
  )
}
