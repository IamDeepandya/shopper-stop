import React, {useState} from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = (props) => {

 const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const location = useLocation();

  const items = useSelector((state) => state.cart)


  return (
    <>
      <nav className="bg-main font-fam-roboto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link to="/" className="text-white lg:text-2xl md:text-2xl font-bold sm:text-lg">
                  Shopper-Stop
                </Link>
              </div>
            </div>
            <div className="hidden md:block ">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  to="/products"
                  className={`text-white px-3 py-2 rounded-md text-[30px] font-medium active-link-hover ${location.pathname === '/products' ? 'active' : ''}`}
                >
                  Products
                </Link>
                <Link
                  to="/services"
                  className={`text-white px-3 py-2 rounded-md text-[30px] font-medium  active-link-hover ${location.pathname === '/services' ? 'active' : ''}`}
                >
                  Services
                </Link>
                <Link
                  to="/about"
                  className={`text-white px-3 py-2 rounded-md text-[30px] font-medium active-link-hover ${location.pathname === '/about' ? 'active' : ''}`}
                >
                  About
                </Link>
                <Link
                  to="/contact"
                  className={`text-white px-3 py-2 rounded-md text-[30px] font-medium active-link-hover ${location.pathname === '/contact' ? 'active' : ''}`}
                >
                  Contacts
                </Link>
                <Link to="/cart" className='mr-2 font-fam-roboto bg-transparent font-semibold  text-white rounded'><i className=" mr-2 fa-xl fa-solid fa-cart-shopping "></i>{items.length}</Link>
                <Link className='ml-2'>
                  <i id="moon" className="icon-hover text-white fa-solid fa-moon fa-2xl cursor-pointer " onClick={props.toggleMode}></i>
                </Link>
              </div>
            </div>
            <div className="md:hidden">
              <button
                type="button"
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-white  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className={`h-6 w-6 ${isOpen ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                  className={`h-6 w-6 ${isOpen ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'}`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/products"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Products
            </Link>
            <Link
              to="/services"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Services
            </Link>
            <Link
              to="/contacts"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Contacts
            </Link>
            <Link
              to="/login"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Login
            </Link>
            <Link
              to="/signup"
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>



    </>
  )
}

export default Navbar
