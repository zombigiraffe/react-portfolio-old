import LinkedinIcon from "../components/Linkedin-Icon";
import images from "../components/ImageExports";

export function Home() {
  return (
    <div>
      <div className="home-div">
        <h3 className="home-h3">Hi, my name is</h3>
        <h1>Arron Mixell.</h1>
        <h4>A web developer.</h4>
        <div className="linkedin-div">
        <a href="https://www.linkedin.com/in/arron-mixell-30b872155/">
          <LinkedinIcon />
        </a>
        </div>
      <div className="cv">
        <a href="https://drive.google.com/file/d/1rOxBJXNwaGAo_uQ0x8nFnAl9MiBA8A8D/view?usp=sharing" download>
          Download Resume
        </a>
      </div>
        <h2>Thank you for visiting. Please enjoy a look around my website.</h2>
      <img className="appdev" src={images.appdev} alt="appdev-img"/>
      </div>
      <div className="home-bottom-div"></div>
    </div>
  );
}
