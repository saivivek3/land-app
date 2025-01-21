
import React from 'react';

const Footer = () => {
  return (
    <footer>
      <div className="text-black py-8 px-4 sm:px-8 md:px-16 lg:px-20 font-semibold">
        <div className="flex flex-col sm:flex-row justify-between items-start">
          {/* LandApp Title */}
          <a href="/" className="text-left font-bold text-xl mb-4 sm:mb-0">
            LandApp
          </a>

          {/* Navigation Sections */}
          <nav className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-10">
            {/* Services Section */}
            <div className="flex flex-col">
              <div className="font-semibold mb-2 text-gray-500">Services</div>
              <a href="/hand-holding" className="hover:underline">
                Hand Holding
              </a>
              <a href="/land-monitoring" className="hover:underline">
                Land Monitoring
              </a>
              <a href="legal-verification" className="hover:underline">
                Legal Verification
              </a>
              <a href="/get-your-land-surveyed" className="hover:underline">
                Get your land Surveyed
              </a>
            </div>

            {/* Company Section */}
            <div className="flex flex-col">
              <div className="font-semibold mb-2 text-gray-500">Company</div>
              <a className="hover:underline" href="/terms-and-conditions">
                Terms & Condition
              </a>
              <a className="hover:underline" href="/privacy-policy">
                Privacy Policy
              </a>
              <a className="hover:underline" href="/Blog">
                Blog
              </a>
            </div>

            {/* Contact Section */}
            <div>
              <div className="font-semibold mb-2 text-gray-500">Contact Us</div>
              <a className="hover:underline" href="tel:+919045451545">
                +91 9045451545
              </a>
              <div>
                <a className="hover:underline" href="mailto:support@landapp.in">
                  email: support@landapp.in
                </a>
              </div>
            </div>
          </nav>
        </div>
        <div className="border-b border-gray-300 mt-4"></div>
        <div className="text-black font-semibold mt-8">
          An acre of performance is worth a whole world of promise
        </div>
        <p className="text-gray-400 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Black background footer */}
      <div className="bg-black text-white w-full py-4 text-center">
        <p>&#169; 2023 - landapp.in - All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
