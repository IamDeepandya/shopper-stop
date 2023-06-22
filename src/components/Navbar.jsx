import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = (props) => {


  const location = useLocation();

  const items = useSelector((state) => state.cart)


  return (
    <>
      <header className={`body-font navbar-${props.mode} lg:sticky lg:top-0 lg:z-50`}>
        <div className={`container-fluid bs-1 navbar-${props.mode} mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center`}>
          <Link to="/" className="flex title-font font-medium items-center mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl  font-fam-poppins font-bold">Shopper-Stop</span>
          </Link>
          <nav className="  md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center font-fam-roboto">
            <Link to="/products" className={`mr-5 hover:text-gray-300 ${location.pathname === "/products" ? "active" : ""}`}>Products</Link>
            <Link to="/services" className={`mr-5 hover:text-gray-300 ${location.pathname === "/services" ? "active" : ""}`}>Services</Link>
            <Link to="/about" className={`mr-5 hover:text-gray-300 ${location.pathname === "/about" ? "active" : ""}`}>About</Link>
            <Link to="/contact" className={`mr-5 hover:text-gray-300 ${location.pathname === "/contact" ? "active" : ""}`}>Contact</Link>
          </nav>
          <div className="">
            <button className={`mr-3 font-fam-roboto inline-flex items-center modal-mode-${props.mode} border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0`}>
              <i className=" mr-2 fa-solid fa-right-to-bracket fa-sm" style={{ color: "#4b0ff0" }}></i>
              Register
            </button>
            <Link to="/cart" className='mr-5 font-fam-roboto bg-transparent font-semibold px-4 py-2 border py-1 rounded'><i className=" mt-4 mr-2 fa-solid fa-cart-shopping fa-lg"></i>{items.length}</Link>
            <i id="moon" className="icon-hover fa-solid fa-moon fa-2xl cursor-pointer " onClick={props.toggleMode}></i>

          </div>
        </div>
      </header>



    </>
  )
}

export default Navbar
