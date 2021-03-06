import "../styles/components/NavBar.css";
import { useState } from "react";

export default function NavBar() {
  const [Menu, setMenu] = useState(false);

  function handleClick() {
    if (document.body.scrollWidth <= 730) {
      var e = document.getElementById("menu");
      if (Menu) {
        e.classList.remove("menuON");
        e.classList.add("menuOFF");
        setMenu(false);
      } else {
        e.classList.add("menuON");
        e.classList.remove("menuOFF");
        setMenu(true);
      }
    }
  }

  function handleClickHome() {
    if (document.body.scrollWidth <= 730) {
      var e = document.getElementById("menu");
      if (Menu) {
        e.classList.remove("menuON");
        e.classList.add("menuOFF");
        setMenu(false);
      }
    }
  }

  return (
    <header>
      <a href="#home" className="homeNav" onClick={handleClickHome}>
        Home
      </a>
      <nav>
        <div id="menuBt" onClick={handleClick}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul id="menu">
          <li>
            <a href="#about" onClick={handleClick}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" onClick={handleClick}>
              My Skills
            </a>
          </li>
          <li>
            <a href="#projects" onClick={handleClick}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleClick}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
