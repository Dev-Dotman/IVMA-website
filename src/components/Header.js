export default function Header() {
  return (
    <header className="w-full px-6 py-4 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">IV</span>
          </div>
          <h1 className="text-xl font-semibold text-gray-900">IVMA</h1>
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium">About Us</a>
          <a href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a>
          <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="text-gray-600 hover:text-gray-900 font-medium">Log in</button>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </header>
  );
}
