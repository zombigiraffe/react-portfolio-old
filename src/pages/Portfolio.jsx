import React from "react";
import Pieces from "../components/Pieces";
import images from "../components/ImageExports";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown";
import { ThemeContext } from "../App";

export function Portfolio() {
  return (
    <ThemeContext.Provider>
      <div>
        <div className="portfolio-top">
          <div className="portfolio-top-content">
            <h1>
              My <br />
              Portfolio
            </h1>
            <a href="#projects">
              <button>
                To projects
                <ArrowCircleDownIcon className="down-arrow" fontSize="large" />
              </button>
            </a>
            <h2>
              Here are some projects I've done reflecting my journey as a web
              developer. <br />
              The projects at the top are my most recent creations decending{" "}
              <br /> downward into my earliest work. <br />
              You'll see what I was creating starting out, and where I am today.
            </h2>
            <h3>A comprehensive history on building my skillset.</h3>
          </div>
          <div>
            <img className="webdev-img" src={images.coding} alt="" />
          </div>
        </div>
        <div id="projects" className="cards card-row">
          <Pieces
            key="1"
            img={images.portfolio}
            p="This very website! This website was created using React and React Router DOM and is fully responsive."
            link="https://www.arronmixell.dev"
            code="https://github.com/zombigiraffe/react-portfolio"
          />
          <Pieces
            key="2"
            img={images.noted}
            p="This app I've called Note'd is made in React. I've also implemented a toggleable dark theme, as well as implemented local storage so your notes and theme persist between sessions."
            link="https://noted-app-neon.vercel.app/"
            code="https://github.com/zombigiraffe/noted-app"
          />
          <Pieces
            key="3"
            img={images.Escape}
            p="This website is a homepage for my band, Escape Artist. It is a static webapp made with HTML, CSS, Bootstrap, and Javascript. It is fully responsive and mobile friendly."
            link="https://www.escapeartist.band/"
            code="https://github.com/zombigiraffe/Escape-Artist-Site"
          />
        </div>
        <div className="cards card-row-2">
          <Pieces
            key="4"
            img={images.birthday}
            p="I made a cute site for my wife's birthday. This helped me get accustomed to css animations. I've removed all personal details and have it hosted as a template for others to use."
            link="https://zombigiraffe.github.io/birthday-template/"
            code="https://github.com/zombigiraffe/birthday-template"
          />
          <Pieces
            key="5"
            img={images.fourdaywork}
            p="I was challenged to recreate wework4days using CSS only. I accepted. I think I did a decent job?"
            link="https://zombigiraffe.github.io/4daywork-clone-site/"
            code="https://github.com/zombigiraffe/4daywork-clone-site"
          />
          <Pieces
            key="6"
            img={images.native}
            p="A site I made for Native Studios. A music production studio based in Liverpool, Pennsylvania."
            link="https://www.nativestudios.net/"
            code="https://github.com/zombigiraffe/native-studios"
          />
        </div>
        <div className="cards card-row-3">
          <Pieces
            key="7"
            img={images.tindog}
            p="This silly website is a product and pricing landing page for the fictional app, Tindog™. It is a static webapp made with only HTML, CSS, and Bootstrap."
            link="https://zombigiraffe.github.io/bootcamp-tindog/"
            code="https://github.com/zombigiraffe/bootcamp-tindog"
          />
          <Pieces
            key="8"
            img={images.simon}
            p="This project was a combination of the concepts used in the last two applications, as well as using my first JS library, JQuery. This project was a fantastic learning experience as it has all the basic fundamentals you need to be a javascript programmer"
            link="https://zombigiraffe.github.io/simon-game/"
            code="https://github.com/zombigiraffe/simon-game"
          />
          <Pieces
            key="9"
            img={images.dice}
            p="Another early dive into Javascript. This project helped me understand query selectors as well as some of the math and math manipulators involved in javascript programming"
            link="https://zombigiraffe.github.io/dice-game/"
            code="https://github.com/zombigiraffe/dice-game"
          />
        </div>
        <div className="cards card-row-4">
          <Pieces
            key="10"
            img={images.drumkit}
            p="One of my first introductions to Javascript. This helped me become familiar with switch statements, for loops, a little bit of javascript animation and event listeners."
            link="https://zombigiraffe.github.io/drum-kit/"
            code="https://github.com/zombigiraffe/drum-kit"
          />
          <Pieces
            key="11"
            img={images.css}
            p="A fun site I made while learning CSS."
            link="https://zombigiraffe.github.io/misc-css/"
            code="https://github.com/zombigiraffe/misc-css"
          />
          <Pieces
            key="12"
            img={images.html}
            p="A silly site I worked on while learning HTML. You're sure to get a chuckle or two visting this."
            link="https://zombigiraffe.github.io/misc-html/"
            code="https://github.com/zombigiraffe/misc-html"
          />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}
