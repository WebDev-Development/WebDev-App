import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from 'next/font/google'
import { useRouter } from 'next/router'
import en from '../public/locale/en'
import es from '../public/locale/es'
import Nav from './components/Nav'
import Footer from './components/Footer'
import HomePage from './components/HomePage'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
	const router = useRouter();
	const { locale } = router;
	const t = locale === 'en' ? en : es;

  return (
    <>
      <Head>
        <title>WebDev</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav/>
      <HomePage />
      <Footer/>
    </> 
  ) 
}
