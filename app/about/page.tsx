import Background from "@/components/background";
import Header from "@/components/header";
import ContentBody from "@/components/contentbody";
import Footer from "@/components/footer";

export default function AboutPage() {
  return (
    <>
      <Background />
      <Header />
      <ContentBody>
        <h2>About the DeKalb Music Scene!</h2>
        <p>
          DeKalb Music Scene is a local-first project that tracks artists, venues, and live events
          in and around DeKalb, Illinois.
        </p>

        <section>
          <h3>What We Do</h3>
          <ul>
            <li>Highlight upcoming and past local shows</li>
            <li>Document each event with easy static blog posts</li>
            <li>Connect fans with artists, promoters, and DIY spaces</li>
          </ul>
        </section>

        <section>
          <h3>How To Contribute</h3>
          <p>
            If you are booking, performing, or hosting a show in DeKalb, send details for date,
            venue, lineup, and ticket links so we can add it to the listing at dekalbmusic815@gmail.com
          </p>
        </section>
      </ContentBody>
      <Footer />
    </>
  );
}
