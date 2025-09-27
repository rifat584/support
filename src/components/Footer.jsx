import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black text-white py-10 footer-center">
      <div className=" md:flex justify-center items-center gap-8 text-start container mx-auto ">
        <aside className="flex-[1] max-md:text-center">
          <p className="text-2xl font-bold mb-4 ">CS- Ticket System</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </aside>

        <div className="flex-[1] grid grid-cols-2 xl:grid-cols-4 justify-around gap-4">
          <nav className="flex flex-col">
            <h6 className="footer-title">Company</h6>
            <a className="link link-hover">About Us</a>
            <a className="link link-hover">Our Mission</a>
            <a className="link link-hover">Contact Sales</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Services</h6>
            <a className="link link-hover">Products & Services</a>
            <a className="link link-hover">Customer Stories</a>
            <a className="link link-hover">Download Apps</a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Information</h6>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Join Us </a>
          </nav>
          <nav className="flex flex-col">
            <h6 className="footer-title">Social Links</h6>
            <a className="link link-hover">{<i className="fa-brands fa-twitter"></i>} @CS — Ticket System</a>
            <a className="link link-hover">{<i className="fa-brands fa-linkedin"></i>} @CS — Ticket System</a>
            <a className="link link-hover">{<i className="fa-brands fa-facebook"></i>} @CS — Ticket System</a>
            <a className="link link-hover">{<i className="fa-solid fa-envelope"></i>} support@cst.com</a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
