import { FaUpRightFromSquare } from "react-icons/fa6";
import "../styles/portfolio.css";
import Image from "next/image";

function Portfolio() {
  return (
    <section className="portfolio" id="portfolio">
      <h2 className="heading">Latest <span>Projects</span></h2>

      <div className="portfolio-container">
        <div className="portfolio-box">
          <Image src="/portfolioimg.png" alt="project1" width={200} height={100} style={{ objectFit: 'cover' }}/>
          <div className="portfolio-layer">
            <h4>Web Development & Designing</h4>
            <p>I have created this stunning and interactive portfolio using modern frontend technologies such as React, Next.js, TailwindCSS, and Framer Motion that deliver a memorable experience.</p>
            <i><FaUpRightFromSquare /></i>
          </div>
        </div>
        <div className="portfolio-box">
          <Image src="/portfolioimg4.png" alt="project2" width={200} height={100} style={{ objectFit: 'cover' }}/>
          <div className="portfolio-layer">
            <h4>Web Designing</h4>
            <p>I have developed a basic-ecommerce site featuring products, product details and a shopping cart. I have crafted intuitive, visually engaging user interfaces that prioritize user experience and accessibility. </p>
            <i><FaUpRightFromSquare /></i>
          </div>
        </div>
        <div className="portfolio-box">
          <Image src="/portfolioimg3.png" alt="project3" width={200} height={100} style={{ objectFit: 'cover' }}/>
          <div className="portfolio-layer">
            <h4>Web Development</h4>
            <p>This is high-performance E-commerce website using an impressive stack of cutting-edge technologies like Next.js, React, Stripe, Tailwind CSS, and an array of modern tools, including Redux Toolkit, Framer Motion, React Slick, CLSX, and etc. </p>
            <i><FaUpRightFromSquare /></i>
          </div>
        </div>
        <div className="portfolio-box">
          <Image src="/portfolioimg5.png" alt="project4" width={200} height={100} style={{ objectFit: 'cover' }}/>
          <div className="portfolio-layer">
            <h4>Web Development</h4>
            <p>I&apos;ve created fully responsive and dynamic portfolio, built with Next.js and Tailwind CSS, and it&apos;s now live on Vercel. </p>
            <i><FaUpRightFromSquare /></i>
          </div>
        </div>
        <div className="portfolio-box">
          <Image src="/portfolioimg2.png" alt="project5" width={200} height={100} style={{ objectFit: 'cover' }} />
          <div className="portfolio-layer">
            <h4>Web Designing</h4>
            <p>I have created this Ecommerce Website using Figma Design Template to improve my designing skills. </p>
            <i><FaUpRightFromSquare /></i>
          </div>
          </div>
       
      </div>
        
    </section>
  )
}

export default Portfolio;