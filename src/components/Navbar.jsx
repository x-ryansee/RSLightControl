import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="flex justify-between items-center py-6 px-8 bg-dark">
      <h1 className="text-2xl font-semibold text-white drop-shadow-md">
        RSLightControl
      </h1>
      <div className="space-x-8 text-sm">
        <Link to="/" className="text-gray-300 hover:text-white transition">Home</Link>
        <Link to="/services" className="text-gray-300 hover:text-white transition">Solutions</Link>
        <Link to="/contact" className="text-gray-300 hover:text-white transition">Contact</Link>
      </div>
    </nav>
  );
}

export default Navbar;
