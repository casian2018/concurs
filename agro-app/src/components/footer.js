import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="max-w-6xl mx-auto">
        <div className="mb-5 text-center">
        </div>

        <div className="border-t border-gray-300 my-4"></div>

        <div className="text-center">
          <p className="mb-3 font-medium">© AgroVest {new Date().getFullYear()}</p>
          <div className="flex flex-wrap justify-center gap-4 mb-3">
            <a href="#" className="text-green-600 hover:underline">Solutions</a>
            <a href="#" className="text-green-600 hover:underline">Resources</a>
            <a href="#" className="text-green-600 hover:underline">Terms of Service</a>
            <a href="#" className="text-green-600 hover:underline">Contact Us</a>
            <a href="#" className="text-green-600 hover:underline">FAQ</a>
          </div>
          <p className="text-gray-500 text-sm">
            Committed to supporting farmers with the latest agricultural technologies and knowledge.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;