import Image from "next/image";
import Background from "@/components/background";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { scenePhotos } from "@/data/photos";
import styles from "@/styles/shows.module.css";

export default function PhotosPage() {
  return (
    <>
      <Background />
      <Header />
      <main className={styles.showsPage}>
        <h1 className={styles.pageTitle}>Photos</h1>
        <p className={styles.pageIntro}>
          A quick gallery from DeKalb shows and event announcements.
        </p>

        <section className={styles.photoGrid}>
          {scenePhotos.map((photo) => (
            <figure key={photo.id} className={styles.photoCard}>
              <div className={styles.photoImageWrap}>
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={900}
                  height={600}
                  className={styles.photo}
                />
              </div>
              <figcaption className={styles.photoCaption}>{photo.caption}</figcaption>
            </figure>
          ))}
        </section>
      </main>
      <Footer />
    </>
  );
}
