"use client";

export default function Header({ onWaitlistClick }) {
  return (
    <header className="sticky top-0 w-full px-6 py-4 bg-white border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <img 
            src="/ivma2.png" 
            alt="IVMA Logo" 
            className="w-18 h-8 object-contain rounded-full"
          />
          {/* <h1 className="text-xl font-semibold text-gray-900">IVMA</h1> */}
        </div>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-gray-600 hover:text-gray-900 font-medium">Home</a>
          {/* <a href="/about" className="text-gray-600 hover:text-gray-900 font-medium">About Us</a> */}
          {/* <a href="/pricing" className="text-gray-600 hover:text-gray-900 font-medium">Pricing</a> */}
          {/* <a href="#" className="text-gray-600 hover:text-gray-900 font-medium">Contact</a> */}
        </nav>
        <div className="flex items-center">
          <button 
            onClick={onWaitlistClick}
            className="bg-gray-900 text-white px-6 py-2 rounded-full font-medium hover:bg-gray-800 transition-colors"
          >
            Join the Waitlist
          </button>
        </div>
      </div>
    </header>
  );
}
