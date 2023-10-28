import "../styles/NavBar.css";
import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import logo from "./logo.png";

export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [fix, setFix] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setFix(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <>
      <nav className={fix ? "sticky navigation" : "navigation"}>
        <a href="/" className="brand-name">
          <img src={logo} alt="logo"></img>
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        >
          {/* icon from heroicons.com */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12H12m-8.25 5.25h16.5"
            />
          </svg>
        </button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <Link
                activeClass="active"
                spy
                to="about"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                About Me
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy
                to="projects"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Projects
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy
                to="links"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Links
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                spy
                to="contact"
                onClick={() => {
                  setIsNavExpanded(false);
                }}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
