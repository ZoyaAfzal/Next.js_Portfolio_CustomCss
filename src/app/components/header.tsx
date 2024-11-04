'use client';
import { useState, useEffect,  useRef } from 'react';
import "../styles/header.css";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import Typed from 'typed.js';



 function Header() {
  const [isActive, setIsActive] = useState(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const menuIconRef = useRef<HTMLDivElement | null>(null);
  const navbarRef = useRef<HTMLDivElement | null>(null);
  const sectionsRef = useRef<(HTMLElement | null)[]>([]);
  const navLinksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  

  const handleToggle = () => {
    setIsActive(!isActive);
};

useEffect(() => {
  if (typeof window !== 'undefined') {
    sectionsRef.current = Array.from(document.querySelectorAll('section'));
  }; 
}, []);



useEffect(() => {
  if (typeof window !== 'undefined') {
    import('scrollreveal').then((ScrollReveal) => {
      const sr = ScrollReveal.default({
      distance: '80px',
      duration: 2000,
      delay: 200,
      reset: true, 
    });


    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
    sr.reveal('.home-contact h1, .about-img', { origin: 'left' });
    sr.reveal('.home-contact p, .about-content', { origin: 'right' });
  });
  };  
}, []);

  useEffect(() => {
  
   if (typeof window !== 'undefined') {
    const typed = new Typed('.multiple-text', {
      strings: ['Frontend Developer', 'Web-Designer', 'Web Developer'],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  
   };
  }, []);

useEffect(() => {
  if (typeof window !== 'undefined') {
  const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (headerRef.current) {
        headerRef.current.classList.toggle('Sticky', scrollPosition > 100);
      }

      sectionsRef.current.forEach((section, index) => {
        if (section) {
          const offsetTop = section.offsetTop - 150;
          const sectionHeight = section.offsetHeight;
        

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + sectionHeight) {
            navLinksRef.current.forEach(link => link?.classList.remove('active'));
            navLinksRef.current[index]?.classList.add('active');
              }
            }
          });
          if (navbarRef.current) {
              navbarRef.current.classList.remove('active');
          }
        };
  
  window.addEventListener('scroll', handleScroll);
    
  return () => {
 
    window.removeEventListener('scroll', handleScroll);
    
};
  };
 }, []);


  return (
      <header ref={headerRef} className="header" >
        {/*logo */}
        <div>
          <h2 className="logo">Zoya.</h2>
        </div>
        <div ref={menuIconRef} id="menu-icon" onClick={handleToggle}>
        <GiHamburgerMenu />
        </div>
         
        {typeof window !== 'undefined' && (
         <nav ref={navbarRef} className={`navbar ${isActive ? 'active' : ''}`} id="navlinks">
        {['/', '#about', '#services', '#portfolio', '#contact'].map((href, index) => (
          <Link
            key={href}
            href={href}
            ref={(el) => {navLinksRef.current[index] = el}}
            className={index === 0 ? 'active' : ''}
          >
            {href === '/' ? 'Home' : href.slice(1).charAt(0).toUpperCase() + href.slice(2)}
          </Link>
        ))}
      </nav>
        )};
      </header>
  );
}

export default Header;
