/* eslint-disable @next/next/no-img-element */
import styles from "./page.module.scss";
import Link from "next/link";
import Data from "../../public/assets/data.json"

export default function Home() {
  return (

    <>


      <article id={styles.flexContainer}>
        <Link href={'/house'}>

          <img id={styles.klimahus} src={Data.content.globals.frontpage} alt="Logo" draggable="false" />

        </Link>

        <Link id={styles.koncept} href={'/koncept'}>Koncept</Link>

        <section id={styles.infoboks}>
          <h3 id={styles.infoboks_h3}>{Data.content.infoboks}</h3>
        </section>
      </article>

    </>



  )
}
