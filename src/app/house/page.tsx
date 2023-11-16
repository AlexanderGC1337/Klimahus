/* eslint-disable @next/next/no-img-element */

'use client'

import { useState } from 'react';
import Data from "../../../public/assets/data.json"
import styles from "@/app/house/page.module.scss"
import Link from 'next/link';

export default function Page() {

    const [klimaTekst, setKlimaTekst] = useState('Venter på input...')
    const [holdbarhedsTekst, setHoldbarhedsTekst] = useState('Venter på input...')
    const [genbrugsTekst, setGenbrugsTekst] = useState('Venter på input...')

    const handleDivClickOne = () => {

        const klima = Data.content.tree.klima
        const holdbar = Data.content.tree.holdbarhed
        const genbrug = Data.content.tree.genbrugsvenlig

        setKlimaTekst(klima)
        setHoldbarhedsTekst(holdbar)
        setGenbrugsTekst(genbrug)

    }

    const handleDivClickTwo = () => {

        const klima = Data.content.bambus.klima
        const holdbar = Data.content.bambus.holdbarhed
        const genbrug = Data.content.bambus.genbrugsvenlig

        setKlimaTekst(klima)
        setHoldbarhedsTekst(holdbar)
        setGenbrugsTekst(genbrug)

    }

    const handleDivClickThree = () => {

        const klima = Data.content.steel.klima
        const holdbar = Data.content.steel.holdbaroggenbrugsvenlig

        setKlimaTekst(klima)
        setHoldbarhedsTekst(holdbar)
        setGenbrugsTekst('Ingen input...')

    }

    const handleDivClickFour = () => {

        const klima = Data.content.glass.klima
        const holdbar = Data.content.glass.holdbarhed

        setKlimaTekst(klima)
        setHoldbarhedsTekst(holdbar)
        setGenbrugsTekst('Ingen input...')

    }

    const handleDivClickFive = () => {

        const klima = Data.content.roofing.klima
        const holdbar = Data.content.roofing.holdbarhed
        const genbrug = Data.content.roofing.genbrugsvenlig

        setKlimaTekst(klima)
        setHoldbarhedsTekst(holdbar)
        setGenbrugsTekst(genbrug)

    }

    const handleDivClickSix = () => {

        const klima = Data.content.insolutation.klima
        const holdbar = Data.content.insolutation.holdbarhed
        const genbrug = Data.content.insolutation.genbrugsvenlig

        setKlimaTekst(klima)
        setHoldbarhedsTekst(holdbar)
        setGenbrugsTekst(genbrug)

    }


    return (
        <main id={styles.container}>

            <Link href={'/'} >
            <img id={styles.arrowleft} src={Data.content.globals.arrowleft} alt="" />

            </Link>


            <aside id={styles.asideContainer}>

                <div id={styles.klimaContainer}>

                    <h3 id={styles.h3}>Klima</h3>
                    <p id={styles.infotekst}>{klimaTekst}</p>
                    <hr id={styles.hr} />

                </div>

                <div id={styles.holdbarhedsContainer}>

                    <h3 id={styles.h3}>Holdbarhed</h3>
                    <p id={styles.infotekst}>{holdbarhedsTekst}</p>
                    <hr id={styles.hr} />

                </div>

                <div id={styles.genbrugsContainer}>

                    <h3 id={styles.h3}>Genbrugsvenlig</h3>
                    <p id={styles.infotekst}>{genbrugsTekst}</p>

                </div>

            </aside>

            <section id={styles.houseContainer}>
                <img id={styles.houseImg} src={Data.content.globals.stueplan} alt="" />
                <div onClick={handleDivClickOne} id={styles.table}>{ }</div>
                <div onClick={handleDivClickTwo} id={styles.chair}>{ }</div>
                <div onClick={handleDivClickThree} id={styles.steel}>{ }</div>
                <div onClick={handleDivClickFour} id={styles.glass}>{ }</div>
                <div onClick={handleDivClickFive} id={styles.roofing}>{'ROOF' }</div>
                <div onClick={handleDivClickSix} id={styles.isolering}>{'ISOLERING' }</div>
            </section>

            <aside id={styles.itemPicker}>
                <h3 id={styles.itemPicker_h3}>Item List</h3>
                <div id={styles.one}>{'Bord'}</div>
                <div id={styles.two}>{'Stol'}</div>
                <div id={styles.three}>{'Stål bord'}</div>
                <div id={styles.four}>{'Vindue'}</div>
            </aside>

        </main>
    )
}