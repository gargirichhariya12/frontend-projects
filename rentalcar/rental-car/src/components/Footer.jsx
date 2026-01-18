const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 pt-14 bottom-0 mt-10                                                      ">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* Brand Section */}
        <div>
          <h2 className="text-xl font-semibold flex items-center gap-2">
            <span className="text-blue-600">🚗</span> CarRental
          </h2>
          <p className="text-sm text-gray-500 mt-3">
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>
          <div className="flex gap-4 mt-4 text-gray-500">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-twitter-x-line"></i>
            <i className="ri-mail-line"></i>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4">QUICK LINKS</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Home</li>
            <li>Browse Cars</li>
            <li>List Your Car</li>
            <li>About Us</li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="font-semibold mb-4">RESOURCES</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>Help Center</li>
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Insurance</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-4">CONTACT</h3>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>1234 Luxury Drive</li>
            <li>San Francisco, CA 94107</li>
            <li>+1 (555) 123-4567</li>
            <li>car@example.com</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t mt-10 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
        <p>© 2025 CarRental. All rights reserved.</p>
        <div className="flex gap-4">
          <span>Terms</span>
          <span>Privacy</span>
          <span>Cookies</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
