import {
  FaFacebook,
  FaGoogle,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="bg-base-200">
      <div className="container m-auto">
        <footer className="footer text-base-content p-10">
          <div>
            <h6 className="footer-title text-2xl text-white font-medium">General Project</h6>
            <p className="text-xl">
              We always greatest services our Client
            </p>
            <div className="flex gap-4 py-4">
              <Link>
                <FaGoogle className="text-3xl lg:text-4xl hover:-translate-y-3 duration-200" />
              </Link>
              <Link>
                <FaTwitter className="text-3xl lg:text-4xl hover:-translate-y-3 duration-200" />
              </Link>
              <Link>
                <FiInstagram className="text-3xl lg:text-4xl hover:-translate-y-3 duration-200" />
              </Link>
              <Link>
                <FaFacebook className="text-3xl lg:text-4xl hover:-translate-y-3 duration-200" />
              </Link>
              <Link>
                <FaLinkedin className="text-3xl lg:text-4xl hover:-translate-y-3 duration-200" />
              </Link>
              <Link>
                <FaYoutube className="text-3xl lg:text-4xl hover:-translate-y-3 duration-200" />
              </Link>
            </div>
          </div>
          <nav>
            <h6 className="footer-title text-2xl text-white font-medium">Company</h6>
            <a className="link link-hover text-xl">About</a>
            <a className="link link-hover text-xl">How it Works</a>
            <a className="link link-hover text-xl">Team</a>
            <a className="link link-hover text-xl">Privacy Policy</a>
          </nav>
          <nav>
            <h6 className="footer-title text-2xl text-white font-medium">More</h6>
            <a className="link link-hover text-xl">Documentation</a>
            <a className="link link-hover text-xl">License</a>
          </nav>
          <nav>
            <h6 className="footer-title text-2xl text-white font-medium">Location</h6>
            <a className="link link-hover text-xl">320/0 Saver,Dhaka</a>
            <a className="link link-hover text-xl">+01734566342</a>
            <a className="link link-hover text-xl">realstate@gmail.com</a>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
