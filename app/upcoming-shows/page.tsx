import Background from "@/components/background";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { upcomingShows } from "@/data/shows";
import styles from "@/styles/shows.module.css";
import Image from "next/image";

export default function UpcomingShowsPage() {
  return (
    <>
      <Background />
      <Header />
      <main className={styles.showsPage}>
        <h1 className={styles.pageTitle}>Upcoming Shows</h1>
        <p className={styles.pageIntro}>
          The next run of shows from local artists and venues in DeKalb.
        </p>

        <div className={styles.showsGrid}>
          {upcomingShows.map((show) => (
            <article key={show.id} className={styles.showCard}>
              {show.imageUrl ? (
                <div className={styles.showImageWrap}>
                  <Image
                    src={show.imageUrl}
                    alt={show.imageAlt ?? show.title}
                    width={640}
                    height={360}
                    className={styles.showImage}
                  />
                </div>
              ) : null}

              <p className={styles.showDate}>{show.date}</p>
              <h2 className={styles.showTitle}>{show.title}</h2>
              <p className={styles.showVenue}>{show.venue}</p>
              <p className={styles.showTime}>{show.time}</p>
              <p className={styles.showArtists}>Lineup: {show.artists.join(", ")}</p>
              <p className={styles.showNotes}>{show.notes}</p>

              <div className={styles.showActions}>
                {show.ticketUrl ? (
                  <a href={show.ticketUrl} className={styles.ticketLink}>
                    Tickets / RSVP
                  </a>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}
