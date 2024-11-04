import Link from "next/link";
import "./styles/home.css";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import About from "./components/about";
import Services from "./components/services";
import Portfolio from "./components/portfolio";
import Contact from "./components/contact";
import Image from "next/image";

export default function Home() {
  return (
    <div>
  <section className="home" id="home">
    <div className="home-content">
    <h3>Hi, Myself</h3>
            <h1>Zoya Afzal!</h1>
            <h3>And I&apos;m a <span className="multiple-text">Web Developer</span></h3>
            <p>
            I&apos;m a dedicated web developer with a passion for creating interactive, user-centered websites and web applications. With expertise in modern web technologies like Typescript, React, Next.js, and Tailwind CSS. My focus is on crafting responsive, high-performance websites that are visually engaging and optimized for all devices.
            </p>
            <div className="social-media">
                    <Link href="https://www.facebook.com/profile.php?id=100000442058187"><FaFacebook /></Link>
                    <Link href="https://www.linkedin.com/in/zoya-afzal-5b2bb823a/" ><FaLinkedin /></Link>
                    <Link href="https://www.instagram.com/zoeeezoeeee?igsh=N3Vvam9jeTg4YTY3"><FaInstagramSquare /></Link>
           </div>
            <Link href="a" className="btn">Download CV</Link>
    </div>
    <div className="home-img">
      <Image src="/profilepic.jpg" alt="displaypicture" width={100} height={320}/>
    </div>
  </section>
    <About />
    <Services />
    <Portfolio /> 
    <Contact />
    </div>
  )
}
