import React from "react";
import logo from "@/public/logo.png";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import footerLogo1 from "@/app/images/footer-logo.png";
import footerLogo2 from "@/app/images/footer-logo2.png";
import footerLogo3 from "@/app/images/footer-logo3.webp";

const Footer = () => {
  return (
    <div className="bg-[#FEF9F2] bg-gradient-to-r from-[#F9CEB7] to-[#ADD1F2]">
      <div className=" container mx-auto">
        <div className=" flex items-center justify-evenly">
          <div>
            <img src={logo.src} alt="logo" />
          </div>
          <ul>
            <li>Search Engine Optimization</li>
            <li>Digital marketing in your city </li>
            <li>Paid Media</li>
            <li>Influencer Marketing</li>
            <li>SEO Analyzer Extension</li>
          </ul>
          <ul>
            <li>Content Marketing</li>
            <li>SEO services in your city </li>
            <li>Social Media Marketing</li>
            <li>Sitemap</li>
          </ul>
          <ul>
            <li>Blog</li>
            <li>About us</li>
            <li>Web Stories</li>
            <li>Resources</li>
            <li>Testimonials</li>
            <li>Digital Marketing Trends 2024</li>
          </ul>
          <ul>
            <li>AWARDS</li>
            <li>Contact</li>
            <li>Newsletter</li>
            <li>CEO Speaks</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <hr />
        <div className=" flex items-center justify-evenly py-5">
          <div className="flex items-center justify-center gap-4">
            <FaXTwitter />
            <FaLinkedinIn />
            <FaInstagram />
            <FaYoutube />
          </div>
          <p>
            Google Partner Facebook Partner © 2024 AdLift. All rights reserved.
          </p>
          <div className=" flex items-center justify-center gap-4">
            <img src={footerLogo1.src} alt="logo" />
            <img src={footerLogo2.src} alt="logo" />
            <img src={footerLogo3.src} alt="logo" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
