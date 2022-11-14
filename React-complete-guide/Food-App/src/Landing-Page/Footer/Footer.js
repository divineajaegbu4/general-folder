import React from "react";
import { FaPhoneAlt, FaLinkedin } from "react-icons/fa";

import "./Footer.css";

function Footer() {
  return (
    <div className="footer__container">
      <div className="tastes">
        <h2 className="footer-header">
          TASTES BETTER
          <br />
          FROM SCRATCH
        </h2>
        <br />
        <ul className="contact meals-guide">
          <li>
            <a href="https://www.linkedin.com/feed/">
              <FaLinkedin />
            </a>
          </li>
          <li>
            <FaPhoneAlt />
            08161428633
          </li>
        </ul>
      </div>
      <div className="meals">
        <h2 className="footer-header">Meals</h2>
        <br />
        <ul className="meals-guide">
          <li>
            <a href="https://tastesbetterfromscratch.com/recipe-index/">
              RECIPES
            </a>
          </li>
          <li>
            <a href="https://tastesbetterfromscratch.com/category/meal-plan/">
              MEALS PLANS
            </a>
          </li>
          <li>
            <a href="https://tastesbetterfromscratch.com/about/">ABOUT</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Footer;
