import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
 
 
export default function Service() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Oceanware company limited</title>
        <meta name="description" content="Oceanware company limited - website" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Navbar/>
      <Footer />
  
    </div>
  )
}