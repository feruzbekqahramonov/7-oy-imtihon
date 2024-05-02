import { Link } from "react-router-dom";
import siteLogo from "../../assets/sitelogo.svg";
import facebook from "../../assets/facebook.svg";
import twitter from "../../assets/twitter.svg";
import instagramm from "../../assets/instagram.svg";
import "./index.css";
function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer_text">
          <Link to="/">
            <img src={siteLogo} alt="" />
          </Link>
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <h3>Copyright 2021. All Rights Reserved</h3>
        </div>
        <div className="footer_nav">
          <div className="footer_navbar">
            <Link className="footer_link" to="/">
              HOME
            </Link>
            <Link className="footer_link" to="/headphones">
              HEADPHONES
            </Link>
            <Link className="footer_link" to="/speakers">
              SPEAKERS
            </Link>
            <Link className="footer_link" to="/earphones">
              EARPHONES
            </Link>
          </div>
          <div className="footer_icon flex ">
            <img
              style={{ marginRight: "16px" }}
              src={facebook}
              alt="facebook icon"
            />
            <img
              style={{ marginRight: "16px" }}
              src={twitter}
              alt="twiter icon"
            />
            <img src={instagramm} alt="insta icon" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
