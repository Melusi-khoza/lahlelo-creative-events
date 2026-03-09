import "./Footer.css";
import InstaLogo from "./insta-logo.png";
import TtLogo from "./tt-logo.jpg";
import FbLogo from "./fb-logo.png";

function Footer() {
  return (
    <>
      {/* <hr></hr> */}
      <div className="social-media">
        <h3>Follow us on Social Media</h3>
        <div>
          <a href="https://www.instagram.com/lahlelocreative_events?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
            <img className="insta-logo" src={InstaLogo}></img>
          </a>
          <a href="https://www.tiktok.com/@lahlelo_creative_events?_r=1&_t=ZS-93ebZECuLkT">
            <img className="tt-logo" src={TtLogo}></img>
          </a>
          <a href="https://www.facebook.com/share/18MbdptZtu/?mibextid=wwXIfr">
            <img className="fb-logo" src={FbLogo}></img>
          </a>
        </div>
          <p className="footer-copyright">
          &copy; {new Date().getFullYear()} Lahlelo Creative Events <br></br>All
          Rights Reserved
        </p>
      </div>
    </>
  );
}
export default Footer;
