import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Feature from '../components/Feature'
import Promise from '../components/Promise'
import Organization from "../components/Organization";



export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1, shrink-to-fit=no"
                />
                <meta name="theme-color" content="#000000"/>
                <title>Oceanware company limited</title>
                <meta name="description" content="Oceanware company limited - website"/>
                <link rel="icon" href="/favicon.png"/>
            </Head>
            <Navbar/>
            <Banner/>
            <Feature/>
            <Organization/>
            <Promise/>
            <Footer/>

        </div>
    )
}


