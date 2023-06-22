import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import {ScaleLoader} from 'react-spinners'


const About = (props) => {

  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  const Loading = () => {
    return (
      <div className="basic-loader flex-col">
        <h2 className="lg:text-3xl sm:text-lg md:text-xl mb-4 font-fam-poppins font-bold text-purple-500">Loading About</h2>
        <ScaleLoader
          color="#8a2be2"
          height={100}
          width={10}
        />
      </div>
    )
  }

  const ShowAbout = () => {
    return (
      <div>
        <section className={`text-gray-600 body-font font-fam-roboto bg-gray-400 modal-mode-${props.mode}`}>
          <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
            <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src={require('../img/brandImg.jpeg')} />
            <div className="text-center lg:w-2/3 w-full">
              <h1 className="title-font sm:text-4xl text-purple-700 text-3xl mb-4 font-medium font-bold">Shopper-Stop Premium Stores</h1>
              <p className="mb-8 leading-relaxed text-lg">Meggings kinfolk echo park stumptown DIY, kale chips beard jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice godard disrupt ramps hexagon mustache umami snackwave tilde chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac mlkshk freegan photo booth af fingerstache pitchfork.</p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-black border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">Get Started</button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">Join with us</button>
              </div>
            </div>
          </div>
        </section>

        <h1 className={`font-fam-fira font-bold lg:text-3xl text-center mt-10 sm:text-xl text-${props.mode}`}>Our Creative and Specialist Online Handling Team</h1>
        <hr style={{
          height: "3px",
          background: "purple",
          width: "40%",
          margin: "10px auto"
        }} />


        <div className="container-fluid mx-auto my-16 font-fam-roboto">
          <div className="flex flex-wrap -m-4 justify-center ">
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg bs-1">
                <img className="h-auto rounded w-full object-cover object-center mb-6" src={require('../img/designer.jpg')} alt="content" />
                <p className={`leading-relaxed text-base  font-bold lg:text-2xl text-center font-fam-poppins text-${props.mode}`}>UI/UX Designer</p>
                <h2 className={`text-2xl text-center font-medium mb-4 font-bold text-${props.mode}`}>Namit Grover</h2>
                <div className="text-center">
                  <span className="inline-flex">
                    <Link className={`text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg bs-1">
                <img className="h-auto rounded w-full object-cover object-center mb-6" src={require('../img/developer.jpg')} alt="content" />
                <p className={`leading-relaxed text-base  font-bold lg:text-2xl text-center font-fam-poppins text-${props.mode}`}>Frontend Developer</p>
                <h2 className={`text-2xl text-center font-medium mb-4 font-bold text-${props.mode}`}>Sunil Shah</h2>
                <div className="text-center">
                  <span className="inline-flex">
                    <Link className={`text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
            <div className="xl:w-1/4 md:w-1/2 p-4">
              <div className=" p-6 rounded-lg bs-1">
                <img className="h-auto rounded w-full object-cover object-center mb-6" src={require('../img/designer.jpg')} alt="content" />
                <p className={`leading-relaxed text-base  font-bold lg:text-2xl text-center font-fam-poppins text-${props.mode}`}>Tester & Debugger</p>
                <h2 className={`text-2xl text-center font-medium mb-4 font-bold text-${props.mode}`}>Jatin Mimber</h2>
                <div className="text-center">
                  <span className="inline-flex">
                    <Link className={`text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                      </svg>
                    </Link>
                    <Link className={`ml-4 text-black text-${props.mode}`}>
                      <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                      </svg>
                    </Link>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {loading ? <Loading /> : <ShowAbout />}
    </>
  )


}

export default About
