import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";

function SocialMedia() {
  return (
    <ul className="home-about-social-links">
      <li className="social-icons">
        <a
          href="https://github.com/Amrit-Gupta07"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <AiFillGithub className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.linkedin.com/in/amrit-gupta-277625222/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour  home-social-icons"
        >
          <FaLinkedinIn className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="https://www.instagram.com/imamrit___/"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <AiFillInstagram className="social-icon" />
        </a>
      </li>
      <li className="social-icons">
        <a
          href="mailto:dpsvn.amri07235@gmail.com"
          target="_blank"
          rel="noreferrer"
          className="icon-colour home-social-icons"
        >
          <MdEmail className="social-icon" />
        </a>
      </li>
    </ul>
  );
}
export default SocialMedia;