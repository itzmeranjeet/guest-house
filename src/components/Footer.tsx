import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelopeOpen,
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { Input } from "./ui/input";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-10 px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-8">
          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-orange-500 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">Find us</h4>
              <p className="text-gray-400">
                Beside Barshal Water Tank, Manpur, Barhanti
              </p>
              <p className="text-gray-400">West Bengal 723156</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaPhone className="text-orange-500 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">Call us</h4>
              <p className="text-gray-400">+91 9007062180</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <FaEnvelopeOpen className="text-orange-500 text-2xl" />
            <div>
              <h4 className="text-lg font-semibold">Mail us</h4>
              <p className="text-gray-400">kkghosh0099@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-8">
          <div>
            <a href="/home" className="flex flex-col w-32">
              <span className="text-xl font-bold text-[#d4aa7d] uppercase border-b-2 border-t-2 border-[#a67c52] px-2">
                Kingsukh
              </span>
              <span className="text-sm font-medium text-[#a67c52] italic mt-1">
                Guest House
              </span>
            </a>
            <p className="text-gray-400 text-md">
              Discover a world of comfort, luxury, and adventure as you explore
              our curated selection of hotels, making every moment of your
              getaway truly extraordinary.
            </p>
            <div className="mt-4 space-x-6 flex">
              <a href="#" className="text-[#1877F2] text-2xl">
                <FaFacebookF />
              </a>
              <a href="#" className="text-[#1DA1F2] text-2xl">
                <FaTwitter />
              </a>
              <a href="#" className="text-[#FF0000] text-2xl">
                <FaYoutube />
              </a>
              <a
                href="#"
                className="text-xl bg-gradient-to-r from-[#F58529] via-[#DD2A7B] to-[#8134AF] p-1 rounded-full"
              >
                <FaInstagram className="text-white" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="grid grid-cols-1 gap-2 text-gray-400 text-md">
              {[
                "Browse Destinations",
                "Special Offers & Packages",
                "Room Types & Amenities",
                "Customer Reviews & Ratings",
                "Travel Tips & Guides",
              ].map((link, index) => (
                <li
                  key={index}
                  className="hover:text-orange-500 cursor-pointer"
                >
                  {link}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">OUR SERVICES</h3>
            <ul className="grid grid-cols-1 gap-2 text-gray-400 text-md">
              {[
                "Concierge Assistance",
                "Flexible Booking Options",
                "Airport Transfers",
                "Wellness & Recreation",
              ].map((link, index) => (
                <li
                  key={index}
                  className="hover:text-[#a67c52] cursor-pointer"
                >
                  {/* bg-[] */}
                  {link}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">CONTACT US</h3>
            <p className="text-gray-400 text-md mb-1">
              Beside Barshal Water Tank,
            </p>
            <p className="text-gray-400 text-md mb-1">Manpur, Barhanti, </p>
            <p className="text-gray-400 text-md mb-4">West Bengal 723156</p>
            <div className="relative">
              <Input
                type="text"
                placeholder="Email Address"
                className="w-full p-3 bg-gray-800 text-white border border-gray-700 rounded"
              />
              <button className="absolute right-0 top-0 h-full px-4 bg-orange-500 rounded-r">
                <FaTelegramPlane className="text-white text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 py-4 text-center text-gray-400 text-sm">
        <p>Copyright © 2024 Kingsukh Guest House. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
