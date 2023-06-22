import React, { useContext, useEffect, useState } from 'react'
import { ScaleLoader } from 'react-spinners'
import apiContext from '../context/apiContext'

import ProductItem from '../components/ProductItem'

const Products = (props) => {

  const [loading, setLoading] = useState(true)

  setTimeout(() => {
    setLoading(false)
  }, 2000);

  const context = useContext(apiContext);
  const { data, fetchData } = context;

  useEffect(() => {
    fetchData()

    //eslint-disable-next-line
  }, [])

  const Loading = () => {
    return (
      <div className="basic-loader flex-col">
        <h2 className="lg:text-3xl sm:text-lg md:text-xl mb-4 font-fam-poppins font-bold text-purple-500">Loading Products</h2>
        <ScaleLoader
          color="#8a2be2"
          height={100}
          width={10}
        />
      </div>
    )
  }



  const ShowProducts = () => {
    return (
      <>

        <section className="text-gray-600 body-font">
          <div className="container px-5 pt-20 mx-auto">
            <div className="flex flex-col text-center w-full mb-20">
              <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">Shopper-Stop Collection</h2>
              <h1 className={`sm:text-3xl text-2xl font-medium font-fam-roboto font-bold mb-4 text-${props.mode}`}>Explore Out Collection</h1>
              <p className={`text-${props.mode} lg:w-2/3 mx-auto leading-relaxed text-base`}>Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom prism food truck ugh squid celiac humblebrag.</p>
            </div>
          </div>
        </section>

        <div className="container mx-auto">
          <div className="relative flex-grow w-2/3 mx-auto flex items-center flex-set-col">
            <input type="email" id="email" name="email" className={`mr-3 w-full rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-lg mb-5 font-fam-roboto text-gray-700 py-3 px-3 leading-8 transition-colors duration-200 ease-in-out`} autoComplete='off' placeholder="Search Product" style={{ background: "none" }} />
            <button class="bg-transparent font-fam-poppins hover:bg-indigo-400 text-blue-700 font-semibold hover:text-white py-4 d-block px-5 border border-indigo-500 hover:border-transparent rounded ">
              Search
            </button>
          </div>
        </div>

        <section className={`text=${props.mode} body-font`}>
          <div className="container px-5 py-10 mx-auto">
            <div className="flex flex-wrap -m-4">
              {data.map((product) => {
                return (
                  <ProductItem key={product.id} mode={props.mode} product={product} />
                )
              })}

            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      {loading ? <Loading /> : <ShowProducts />}
    </>
  )
}

export default Products