
import React from "react";


function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
       
         
        {/* Copyright Section */}
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} HRM ERP Software. All rights reserved by WE Tech Hub.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
