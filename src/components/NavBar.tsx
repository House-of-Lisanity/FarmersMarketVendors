"use client";

import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";
import "@/styles/components/navbar.scss";

const sections = [
  { id: "calendar", label: "Calendar" },
  { id: "products", label: "Products" },
  { id: "about", label: "About" },
  { id: "gallery", label: "Gallery" },
  { id: "reviews", label: "Reviews" },
  { id: "contact", label: "Contact" },
];

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">🍞 LOGO</div>

        <nav className={`navbar__links ${isOpen ? "open" : ""}`}>
          {sections.map(({ id, label }) => (
            <Link
              key={id}
              to={id}
              smooth={true}
              duration={500}
              offset={-80}
              spy={true}
              activeClass="active"
              className="navbar__link"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button className="navbar__toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  );
}
