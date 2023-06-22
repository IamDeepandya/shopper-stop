import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ApiState from './context/ApiState'
import Contact from './pages/Contact';
import Products from './pages/Products';
import Services from './pages/Services';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SingleProduct from './pages/SingleProduct';
import { PacmanLoader } from 'react-spinners'
import Cart from './components/Cart';
import PaymentGateway from './pages/PaymentGateway';
import About from './pages/About';

function App() {

  const getData = (data) => {
    console.log("Coming from App.js", data)
  }


  const [loading, setLoading] = useState(true)
  const [mode, setMode] = useState("light"); // Whether the dark mode is enabled or not.

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#292929";
      document.getElementById("moon").classList.remove('fa-moon')
      document.getElementById("moon").classList.add('fa-sun')
    } 
    else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.getElementById("moon").classList.remove('fa-sun')
      document.getElementById("moon").classList.add('fa-moon')

    }
  };


  return (
    <>

      {loading ? <div className="App bg-brand-2">
        <h1 className='text-white text-5xl font-bold  font-fam-poppins mb-3'>Shopper-Stop</h1>
        <h4 className=' text-white font-fam-poppins text-4xl mb-5 font-bold'>Loading...</h4>
        <PacmanLoader
          color="#ffffff"
          size={60}
        />
      </div>

        :

        <ApiState>
          <Router>
            <Navbar onSubmit={getData} mode={mode} toggleMode={toggleMode} />
            <div className="min-h-screen">
              <Routes>
                <Route>
                  <Route exact path="/" index element={<Home mode={mode}/>} />
                  <Route exact path="/products" element={<Products mode={mode}/>} />
                  <Route exact path="/products/:id" element={<SingleProduct mode={mode}/>} />
                  <Route exact path="/payment" element={<PaymentGateway mode={mode}/>} />
                  <Route exact path="/services" element={<Services mode={mode}/>} />
                  <Route exact path="/contact" element={<Contact mode={mode}/>} />
                  <Route exact path="/about" element={<About mode={mode}/>} />
                  <Route exact path="/cart" element={<Cart mode={mode}/>} />
                </Route>
              </Routes>
            </div>
            <Footer mode={mode}/>
          </Router>
        </ApiState>
      }

    </>
  );
}

export default App;
