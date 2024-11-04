import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { FaPalette } from "react-icons/fa6";
import "../styles/services.css";

function Services() {
  return (
    <section className="services" id="services">
        <h2 className="heading">My <span>Services</span></h2>
        <div className="services-container">
            <div className="services-box">
               <i><FaCode /></i>
                <h3>Web Development</h3>
                <p>Developing interactive and dynamic web applications tailored to complex workflows, data management, and user interactivity. I use modern frameworks like React and Next.js to deliver fast and reliable applications. </p>
                <Link href="#" className="btn">Read more</Link>
            </div>
            <div className="services-box">
                <i><FaPalette /></i>
                <h3>UI/UX Designing</h3>
                <p>Crafting intuitive, visually engaging user interfaces that prioritize user experience and accessibility. I blend aesthetics with functionality to make websites that are easy to navigate and appealing to the eye. </p>
                <Link href="#" className="btn">Read more</Link>
            </div>
            <div className="services-box">
                <i><FaCode /></i>
                <h3>Web App Development</h3>
                <p>Developing interactive and dynamic web applications tailored to complex workflows, data management, and user interactivity. I use modern frameworks like React and Next.js to deliver fast and reliable applications. </p>
                <Link href="#" className="btn">Read more</Link>
            </div>
        </div>
    </section>
  )
}

export default Services;