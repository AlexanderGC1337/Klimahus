/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./page.module.scss";
import Page from "./house/page";
import Link from "next/link";
import Data from "../../public/assets/data.json"

export default function Home() {
  return (

    <>

      <header id={styles.headerContainer}>

        <Link id={styles.link} href={"/house"}>

          <img id={styles.logo} src={Data.content.globals.logo} alt="Logo" />

        </Link>


      </header>

      <Link href={'/house'}>

        <img id={styles.tinyhouse} src={'https://unsplash.it/500/500'} alt="Logo" />

      </Link>

      <section id={styles.infoboks}>
        <h3 id={styles.infoboks_h3}>{Data.content.infoboks}</h3>
      </section>

    </>



  )
}
