import Image from "next/image";
import styles from "./page.module.scss";

export default function Home() {
  return (

    /* HEADER */

    <header id={styles.headerContainer}>

        <img id={styles.logo} src={'https://unsplash.it/200/140'} alt="Logo" />

    </header>

    /* HEADER END */

  )
}
