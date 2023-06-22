import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { ScaleLoader } from 'react-spinners'

const Home = (props) => {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000);


  const Loading = () => {
    return (
      <div className="basic-loader flex-col">
        <h2 className="lg:text-3xl sm:text-lg md:text-xl mb-4 font-fam-poppins font-bold text-purple-500">Loading...</h2>
        <ScaleLoader
          color="#8a2be2"
          height={100}
          width={10}
        />
      </div>
    )
  }

  const ShowHome = () => {
    return (
      <>
        <section className={`text-gray-600 body-font my-8 modal-mode-${props.mode}`}>
          <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col-reverse items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className={`lg:text-5xl sm:text-4xl text-3xl mb-2 font-medium text-${props.mode} font-fam-roboto font-bold main-color `}>Shopper-Stop
                <br className="hidden lg:inline-block" />
              </h1>
              <p className={`mb-8  text-${props.mode} text-xl font-fam-poppins`}>India's Most preferred shopping place.</p>
              <p className={`mb-8 text-${props.mode} lh-2 text-lg font-fam-poppins`}>Shopper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.</p>
              <div className="flex justify-center">
                <Link to="/products" className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Explore Now</Link>
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-5">
              <img className="object-cover object-center rounded border-r-2" alt="hero" src={require('../img/heroImg.jpeg')} />
            </div>
          </div>
        </section>


        {/* 2nd section for gallery */}

        <section className="text-gray-600 body-font">
          <div className="container-fluid px-5 pt-10 mx-auto flex flex-wrap">
            <div className="flex w-full mb-20 justify-center flex-wrap">
              <h1 className={`sm:text-3xl text-2xl font-medium font-fam-roboto text-${props.mode} lg:w-100 lg:mb-0 mb-5`}>Presenting Shopper stop Collection<hr style={{
                height: "3px",
                background: "purple",
                width: "100%",
                margin: "10px auto"
              }} /></h1>
            </div>
            <div className="flex flex-wrap md:-m-2 -m-1">
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/500x300/?tshirts" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/501x301/?shirts" />
                </div>
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://source.unsplash.com/600x360/?jeans" />
                </div>
              </div>
              <div className="flex flex-wrap w-1/2">
                <div className="md:p-2 p-1 w-full">
                  <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://source.unsplash.com/601x361/?bra" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/502x302/?shoes" />
                </div>
                <div className="md:p-2 p-1 w-1/2">
                  <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://source.unsplash.com/503x303/?jacket" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3rd section */}

        <h1 className={`font-fam-fira font-bold lg:text-3xl text-center mt-24 sm:text-xl text-${props.mode}`}>Check Out best Offer Deals <hr style={{
          height: "3px",
          background: "purple",
          width: "40%",
          margin: "10px auto"
        }} /></h1>


        <section className={`text-gray-600 my-10 body-font text-${props.mode}`}>
          <div className="container-fluid px-5  mx-auto flex flex-wrap">
            <div className="lg:w-2/3 mx-auto">
              <div className="flex flex-wrap w-full bg-gray-100 py-32 px-10 relative mb-4">
                <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://source.unsplash.com/820x340/?tshirts" />
                <div className="text-center relative z-10 w-full">
                  <h2 className="text-2xl text-gray-900 font-medium font-fam-roboto font-bold mb-2">For the Creators of Today</h2>
                  <p className="leading-relaxed ">Shop Now and get Styled.</p>
                  <Link to="/products" className="  bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded mt-3 font-fam-poppins inline-flex items-center">Check out
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </Link>
                </div>
              </div>
              <div className="flex flex-wrap -mx-2">
                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://source.unsplash.com/542x460/?caps" />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium mb-2 font-fam-roboto font-bold">Best of summer sports</h2>
                      <Link to="/products" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-fam-poppins inline-flex items-center">Check out
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="px-2 w-1/2">
                  <div className="flex flex-wrap w-full bg-gray-100 sm:py-24 py-16 sm:px-10 px-6 relative">
                    <img alt="gallery" className="w-full object-cover h-full object-center block opacity-25 absolute inset-0" src="https://source.unsplash.com/542x420/?jeans" />
                    <div className="text-center relative z-10 w-full">
                      <h2 className="text-xl text-gray-900 font-medium title-font mb-2 font-fam-roboto font-bold">Vacation State on mind</h2>
                      <Link to="/products" className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded font-fam-poppins inline-flex items-center">Check out
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {loading ? <Loading /> : <ShowHome />}
    </>
  )



}

export default Home
