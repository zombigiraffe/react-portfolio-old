import React, { createContext, useState, useEffect, useCallback } from "react";
import { Route, Routes, Link } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Portfolio } from "./pages/Portfolio";
import { HireMe } from "./pages/HireMe";
import HeadLogo from "./components/logo";
import HeadLogoDark from "./components/logodark";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from '@mui/icons-material/Menu';
export const ThemeContext = createContext("null");

function App() {
  const [theme, setTheme] = useState("light");
  const date = new Date().getFullYear();
  const toggleTheme = useCallback(() => {
    setTheme(theme === "light" ? "dark" : "light");
  }, [theme, setTheme]);
  const theBody = document.getElementById("the-body");
  useEffect(() => {
    if (theme === "light") {
      theBody.classList.remove("theBody");
    } else {
      theBody.classList.add("theBody");
    }
  });

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    if (localTheme !== null) {
      setTheme(JSON.parse(localTheme));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

const toggleMenu = () => {
  const menuToggle = document.getElementById("ul-toggle")
  if (menuToggle.className === "on-screen") {
    menuToggle.className = "off-screen";
    } else {
    menuToggle.className = "on-screen";
    }
}

  return (
    <div className="main" id={theme}>
      <ThemeContext.Provider>
        <nav className="navbar">
          <div>
            {theme === "light" ? <HeadLogo /> : <HeadLogoDark />}
            <button onClick={toggleMenu} className="toggle-button">
              <MenuIcon className="menu-icon"/>
              </button>
            <ul id="ul-toggle">
              <li>
                <Link
                  onClick={toggleMenu}
                  className="link"
                  style={{ textDecoration: "none" }}
                  to="/"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  className="link"
                  style={{ textDecoration: "none" }}
                  to="/pages/About"
                >
                  ABOUT
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  className="link"
                  style={{ textDecoration: "none" }}
                  to="/pages/Portfolio"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li>
                <Link
                  onClick={toggleMenu}
                  className="link"
                  style={{ textDecoration: "none" }}
                  to="/pages/HireMe"
                >
                  CONTACT
                </Link>
              </li>
              <li>
              <button
                onClick={() => {
                  toggleTheme()
                  toggleMenu()
                  }}
                className="theme-button"
                sx={{ color: "white" }}
              >
                {theme === "dark" ? (
                  <LightModeIcon sx={{ color: "white" }} />
                ) : (
                  <DarkModeIcon sx={{ color: "rgb(80, 80, 80)" }} />
                )}
              </button>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pages/About" element={<About />} />
          <Route path="/pages/Portfolio" element={<Portfolio />} />
          <Route path="/pages/HireMe" element={<HireMe />} />
        </Routes>
        <footer><span className="footer-span">Arron Mixell Dev {date}</span></footer>
      </ThemeContext.Provider>
    </div>
  );
}

export default App;
