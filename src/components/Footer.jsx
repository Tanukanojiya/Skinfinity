import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import logo from '../assets/logo.png'; 

const Footer = () => {
  return (
    <footer className="bg-emerald-100 text-neutral-900 py-10 px-6 md:px-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8">
        {/*  Logo & copyright Section */}
        <div className="flex flex-col space-y-3">
          <a href="#" className="block">
            <img src={logo} alt="Skinfinity Logo" className="h-[4.3rem] w-auto" />
          </a>
          <p className="text-gray-400">Your trusted skincare partner for healthy, glowing skin.</p>
          <p className="text-gray-400">© 2024 Skinfinity All rights reserved.</p>
        </div>

        {/* Quick Links Section */}
        <div className="flex flex-col space-y-4">
          <p className="text-xl font-semibold">Quick Links</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">Home</a></li>
            <li><a href="#" className="hover:text-green-400">Shop</a></li>
            <li><a href="#" className="hover:text-green-400">About</a></li>
            <li><a href="#" className="hover:text-green-400">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service Section */}
        <div className="flex flex-col space-y-4">
          <p className="text-xl font-semibold">Customer Service</p>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-green-400">FAQ</a></li>
            <li><a href="#" className="hover:text-green-400">Returns</a></li>
            <li><a href="#" className="hover:text-green-400">Shipping</a></li>
          </ul>
        </div>

        {/* Social Media Section */}
        <div className="flex flex-col space-y-4">
          <p className="text-xl font-semibold">Follow Us</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-green-400"><FaFacebookF /></a>
            <a href="#" className="text-gray-400 hover:text-green-400"><FaInstagram /></a>
            <a href="#" className="text-gray-400 hover:text-green-400"><FaTwitter /></a>
            <a href="#" className="text-gray-400 hover:text-green-400"><FaYoutube /></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 text-center text-gray-400 text-sm">
        <p>Designed with 💚 by Skinfinity | <a href="#" className="hover:text-green-400">Privacy Policy</a> | <a href="#" className="hover:text-green-400">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
