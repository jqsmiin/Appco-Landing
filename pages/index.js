import "@fontsource/open-sans";
import 'bootstrap/dist/css/bootstrap.min.css';
import Head from 'next/head'
import Navbar from './components/Navbar'
import Hero from "./sections/Hero";
import Features from "./sections/Features";
import Help from "./sections/Help";
import Screens from "./sections/Screens";
import Pricing from "./sections/Pricing";
import Testimonial from "./sections/Testimonial";
import Devices from "./sections/Devices";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Appco Landing</title>
      </Head>
      <Navbar />
      <Hero />
      <Features />
      <Help />
      <Screens />
      <Pricing />
      <Testimonial />
      <Devices />
      <Contact />
      <Footer />
    </>
  )
}
