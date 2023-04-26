import images from "../components/ImageExports";
import LinkedinIcon from "../components/Linkedin-Icon";

export function HireMe() {
  return (
    <div className="hire-me-div">
      <h1>Let's talk...</h1>
      <h2>You can reach me at:</h2>
      <a class="mail-to" href="mailto:arronmixelldev@gmail.com">arronmixelldev@gmail.com</a>
      <a className="hire-me-linkedin" href="https://www.linkedin.com/in/arron-mixell-30b872155/">
          <LinkedinIcon />
        </a><h2 className="hire-me-h2">Or on my LinkedIn.</h2>
      
      <h3 className="hire-me-h3">Thank you.</h3>
      <img className="worker" src={images.worker} alt="worker-img"/>
    </div>
  );
}
