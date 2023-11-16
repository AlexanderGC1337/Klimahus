/* eslint-disable @next/next/no-img-element */
import styles from "@/app/koncept/page.module.scss"
import Data from "../../../public/assets/data.json"
import Link from "next/link"

export default function Page() {


    return (
        <>
            <Link href={'/'} >
                <img id={styles.arrowleft} src={Data.content.globals.arrowleft} alt="" />

            </Link>
            <h3 id={styles.h3}>Koncept</h3>


            <main id={styles.container}>

                <img id={styles.img} src={Data.content.koncept.images1} alt="" />

                <img id={styles.img} src={Data.content.koncept.images2} alt="" />

                <img id={styles.img} src={Data.content.koncept.images3} alt="" />

            </main>
        </>


    )
}