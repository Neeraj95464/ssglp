export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 top-0 bg-white bg-opacity-90 shadow">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-yellow-700">
            Darbar Cafe
          </span>
        </div>
        <div className="hidden md:flex gap-6 text-lg">
          <a href="#menu" className="hover:text-yellow-600 font-medium">
            Menu
          </a>
          <a href="#gallery" className="hover:text-yellow-600 font-medium">
            Gallery
          </a>
          <a href="#order" className="hover:text-yellow-600 font-medium">
            Order
          </a>
          <a href="#contact" className="hover:text-yellow-600 font-medium">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
