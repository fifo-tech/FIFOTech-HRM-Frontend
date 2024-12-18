function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto px-6">
        {/* Copyright Section */}
        <div className="border-border mt-8 border-t pt-4 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} HRM ERP Software. All rights
            reserved by WE Tech Hub.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
