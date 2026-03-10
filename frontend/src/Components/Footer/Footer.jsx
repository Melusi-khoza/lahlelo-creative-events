import "./Footer.css";
import InstaLogo from "./insta-logo.png";
import TtLogo from "./tt-logo.jpg";
import FbLogo from "./fb-logo.png";

function Footer() {
  return (
    <>
<<<<<<< HEAD
    <hr></hr>
      <div className="social-media">
        <h2>Follow us on Social Media</h2>
=======
      {/* <hr></hr> */}
      <div className="social-media">
        <h3>Follow us on Social Media</h3>
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
        <div>
          <a href="https://www.instagram.com/lahlelocreative_events?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img className="insta-logo" src={InstaLogo}></img>
          </a>
          <a href="https://www.tiktok.com/@lahlelo_creative_events?_r=1&_t=ZS-93ebZECuLkT">
            <img className="tt-logo" src={TtLogo}></img>
          </a>
<<<<<<< HEAD
          <a href="">
            <img className="fb-logo" src={FbLogo}></img>
          </a>
        </div>
      </div>

      <div className="footer-copyright">
        <p>
=======
          <a href="https://www.facebook.com/share/18MbdptZtu/?mibextid=wwXIfr">
            <img className="fb-logo" src={FbLogo}></img>
          </a>
        </div>
          <p className="footer-copyright">
>>>>>>> 602dc171e1b10551d9724b898562a3287ac8b4d2
          &copy; {new Date().getFullYear()} Lahlelo Creative Events <br></br>All
          Rights Reserved
        </p>
      </div>
    </>
  );
}
export default Footer;
