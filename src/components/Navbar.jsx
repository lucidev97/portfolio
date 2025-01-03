
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import { useState, useEffect, useRef } from "react";

export const Navbar = ({ navOpen }) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const lastActiveLink = useRef();
  const activeBox = useRef();

  const initActiveBox = () => {
    if (lastActiveLink.current && activeBox.current) {
      activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
      activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
      activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
      activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
    }
  };

  useEffect(() => {
    initActiveBox(); // Initialisation de la position de la boîte active au premier rendu
  }, [activeIndex]); // Quand l'élément actif change
  window.addEventListener('resize',initActiveBox)
  const activeCurrentLink = (event) => {
    lastActiveLink.current?.classList.remove('active');
    event.target.classList.add('active');
    lastActiveLink.current = event.target; // Met à jour le dernier lien actif
    setActiveIndex(event.target.dataset.index); // Met à jour l'index de l'élément actif

    activeBox.current.style.top = lastActiveLink.current.offsetTop + 'px';
    activeBox.current.style.left = lastActiveLink.current.offsetLeft + 'px';
    activeBox.current.style.width = lastActiveLink.current.offsetWidth + 'px';
    activeBox.current.style.height = lastActiveLink.current.offsetHeight + 'px';
  };

  const navItems = [
    { label: 'Home', link: '#home', className: 'nav-link' },
    { label: 'About', link: '#about', className: 'nav-link' },
    { label: 'Work', link: '#work', className: 'nav-link' },
    { label: 'Reviews', link: '#reviews', className: 'nav-link' },
    { label: 'Contact', link: '#contact', className: 'nav-link md:hidden' }
  ];

  return (
    <nav className={`navbar ${navOpen ? 'active' : ''}`}>
      {navItems.map(({ label, link, className }, key) => (
        <a
          href={link}
          key={key}
          data-index={key} // Ajout de l'index pour le suivi de l'élément actif
          className={`${className} ${activeIndex === key ? 'active' : ''}`}
          onClick={activeCurrentLink}
        >
          {label}
        </a>
      ))}
      {/* La boîte active pour indiquer l'élément sélectionné */}
      <div className="menu" ref={activeBox}></div>
    </nav>
  );
};

Navbar.propTypes = {
  navOpen: PropTypes.bool.isRequired
};
