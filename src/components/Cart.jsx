import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { remove } from '../store/CartSlice'



const Cart = (props) => {

    const items = useSelector((state) => state.cart)
    const dispatch = useDispatch();

    const handleRemove = (productId) => {
        dispatch(remove(productId));
    }


    return (
        <>
            {items.length === 0 ? <h1 className='lg:text-6xl sm:text-xl md:text-text-lg font-fam-varela text-center my-48 text-purple-600 font-bold'>Cart is Empty<hr className="bg-purple-600" style={{
                height: "15px",
                width: "40%",
                margin: "10px auto",
                borderRadius: "30px"
            }} /></h1> :



                <section className="text-gray-600 body-font">
                    <div className="container px-5 py-24 mx-auto">
                        <div className="flex flex-col text-center w-full mb-20">
                            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font uppercase mb-1">Cart Products</h2>
                            <h1 className={`text-${props.mode} sm:text-3xl text-2xl font-medium font-fam-roboto text-gray-900`}>Your Cart Products</h1>
                            <hr style={{
                                height: "3px",
                                width: "40%",
                                margin: "12px auto",
                                background: "purple"
                            }} />
                        </div>
                        <div className="flex flex-wrap flex-col -m-4 ">
                            {items.map((product) => {
                                return (
                                    <div className={`p-4 md:w-full modal-mode-${props.mode}`} key={product.id}>
                                        <div className={`flex rounded-lg modal-mode-${props.mode} h-full bg-gray-100 p-8 flex-col`}>
                                            <div className="flex items-center mb-3 flex-col-sm">
                                                <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 m-set text-white flex-shrink-0">
                                                    <img src={product.image} className=" w-full" alt="" />
                                                </div>
                                                <h2 className={`ml-2 text-gray-900 font-fam-roboto text-2xl font-medium h-set text-${props.mode}`}>{product.title}</h2>
                                            </div>
                                            <p className={`my-3 text-${props.mode} uppercase text-teal-800 font-bold text-gray-900 font-fam-varela text-lg`}>{product.category}</p>
                                            <div className="flex-grow mt-5">
                                                <p className="leading-relaxed text-base font-poppins text-lg">{product.description}</p>
                                                <h2 className={`ml-2 my-3 text-gray-900 font-bold font-fam-roboto text-2xl font-medium text-${props.mode}`}>$ {product.price}/-</h2>
                                                <div className="flex items-center justify-between">
                                                    <Link to="/payment" className="mr-3 sm:w-1/6  md:w-1/6 lg:w-1/5 items-center justify-center mt-6 flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-red-400 rounded">Buy Now
                                                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                        </svg>
                                                    </Link>
                                                    <i className="cursor-pointer text-red-700 hover:text-red-400 mt-6 fa-sharp fa-solid fa-trash fa-2xl" onClick={() => handleRemove(product.id)}></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default Cart
