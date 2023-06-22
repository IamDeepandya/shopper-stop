import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { add } from '../store/CartSlice'

const SingleProduct = (props) => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {

        const getProducts = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const json = await response.json();
            setData(json);
        }

        getProducts();

    }, [id])

    // Using State Here

    const dispatch = useDispatch(add);


    const handleCart = (product) => {
        dispatch(add(product));
    }


    return (
        <>
            <div key={data.id}>
                <section className={`container mx-auto mt-20 text-${props.mode} body-font bs-1 overflow-hidden`}>
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-full lg:px-10 mx-auto flex flex-wrap justify-center items-center">
                            <img alt="ecommerce" className="lg:h-64 h-32 object-cover object-center rounded" src={data.image} />
                            <div className="lg:w-1/2 w-full sm:mx-auto lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className={`text-sm title-font text-gray-500 tracking-widest uppercase text-${props.mode}`}>{data.category}</h2>
                                <h1 className={`text-gray-900 text-3xl font-fam-roboto  font-medium mb-1 text-${props.mode}`}>{data.title}</h1>
                                <span className="flex items-center">
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                                    </svg>
                                    <span className={`text-gray-600 ml-3 text-${props.mode}`}>4 Reviews</span>
                                </span>
                                <p className="leading-relaxed">{data.description}</p>

                                <div className="flex mt-3">
                                    <span className={`text-${props.mode} title-font font-medium text-2xl text-gray-900 font-fam-roboto`}>${data.price}</span>

                                </div>
                                <div className="flex mt-3">
                                    <Link to="/payment" className="mr-3 flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded">Buy Now</Link>
                                    <button className="flex text-white bg-teal-500 border-0 py-2 px-6 focus:outline-none hover:bg-teal-300 rounded"onClick={()=>handleCart(data)}>Add to Cart</button>
                                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                                        <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                                            <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default SingleProduct
