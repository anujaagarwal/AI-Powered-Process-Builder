import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center p-4">
      <p>Contact us: info@yourdomain.com</p>
      <p>Phone: +123 456 7890</p>
      <p>Address: JayNagar, Bangalore, India</p>
      <p>© {new Date().getFullYear()} YourBrand. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
