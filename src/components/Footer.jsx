// src/components/Footer.jsx
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="h-[20vh] min-h-[220px] bg-dark text-gray-300 border-t border-white/10">
      <div className="h-full max-w-6xl mx-auto px-6">
        <div className="h-full grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          {/* Brand + statement */}
          <div className="flex flex-col justify-between">
            <div>
              <h2 className="text-2xl text-white drop-shadow-md tracking-tight">RSLightControl</h2>
              <p className="mt-3 text-sm text-gray-400 max-w-xs leading-relaxed">
                Lighting control and smart home programming crafted for modern Los Angeles homes.
              </p>
            </div>
            <p className="text-xs text-gray-500">&copy; {new Date().getFullYear()} RSLightControl</p>
          </div>

          {/* Explore */}
          <div className="flex flex-col md:items-center">
            <h3 className="text-sm uppercase tracking-widest text-gray-400">Explore</h3>
            <nav className="mt-3 space-y-2 text-sm">
              <div><Link to="/" className="hover:text-white transition">Home</Link></div>
              <div><Link to="/services" className="hover:text-white transition">Solutions</Link></div>
              <div><Link to="/contact" className="hover:text-white transition">Contact</Link></div>
              <div>
                <a
                  className="hover:text-white transition"
                  href="mailto:your@email.com"
                >
                  Request a Consultation
                </a>
              </div>
            </nav>
          </div>

          {/* Contact / Service Area */}
          <div className="flex flex-col md:items-end">
            <h3 className="text-sm uppercase tracking-widest text-gray-400">Get in touch</h3>
            <div className="mt-3 space-y-2 text-sm">
              <p className="text-gray-300">Los Angeles, California</p>
              <a href="mailto:your@email.com" className="hover:text-white transition">
                your@email.com
              </a>
              <a href="tel:15555555555" className="block hover:text-white transition">
                (555) 555-5555
              </a>
              <p className="text-gray-400">
                Lutron-certified programming · Coordination with licensed electricians
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
