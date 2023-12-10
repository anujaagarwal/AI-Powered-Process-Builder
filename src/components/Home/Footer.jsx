import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4">
      <p>Contact us: anujaagarwal08@gmail.com</p>
      <p>Phone: +919599367441</p>
      <p>Address: Bangalore, India</p>
      <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
