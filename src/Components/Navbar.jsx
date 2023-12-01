import React from 'react';






const Navbar = () => {


    
 
  return (
    <header className="text-gray-600 body-font">
    <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
      <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img className='h-24 w-22' src="https://img.freepik.com/premium-vector/smartphone-logo-communication-electronics-vector-modern-phone-design-company-brand-symbol_638875-2356.jpg" alt="" />


        <span className="ml-3 text-xl">Mobile Phone</span>
      </a>
      <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
        <a className="mr-5 hover:text-gray-900">Home</a>
        <a className="mr-5 hover:text-gray-900">About</a>
        <a className="mr-5 hover:text-gray-900">Contact</a>
        <a className="mr-5 hover:text-gray-900">Blogs</a>
      </nav>
      <button className="inline-flex items-center bg-gray-600 border-0 py-1 px-3 focus:outline-none text-white hover:bg-gray-900 duration-300 rounded text-base mt-4 md:mt-0">Login
        <svg fill="none" stroke="currentColor"  strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </button>
    </div>
  </header>
  );
};

export default Navbar;
