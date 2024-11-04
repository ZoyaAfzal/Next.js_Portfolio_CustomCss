import React from 'react';
import "../styles/about.css";
import Link from 'next/link';
import Image from 'next/image';

function About() {
  return (
   <section className="about" id="about">
    <div className="about-img">
        <Image src="/aboutpic.jpg" alt="aboutpic" width={100} height={300} />
    </div>
    <div className="about-content">
        <h2 className='heading'>About <span>Me</span></h2>
        <h3>Frontend Developer</h3>
        <p> I am a passionate front-end developer and AI enthusiast  with a proficiency in modern front-end technoligies, including Html, Custom & Tailwind Css, Typescript and Javascript with hands-on experience in javascript library React and it&apos;s framework Next.js with a keen eye for design and a deep understanding of modern web development. I transform my ideas into beautifully functional digital experiences.</p>
        <Link href="#" className="btn">Read more</Link>
    </div>

   </section>
  )
}

export default About;