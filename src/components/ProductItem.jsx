import React from 'react'
import { useDispatch } from 'react-redux'
import { add } from '../store/CartSlice'
import { Link } from 'react-router-dom'


const ProductItem = (props ) => {

    const {product} = props;

    // Using State Here

    const dispatch = useDispatch(add);


    const handleCart = (product) => {
        dispatch(add(product));
    }


    return (
        <div className="xl:w-1/4 md:w-1/2 p-4" key={product.id}>
            <div className=" p-6 rounded-lg text-center">
                <img className="m-auto h-40 rounded object-cover object-center mb-6" src={product.image} alt="content" />

                <h3 className="tracking-widest text-indigo-500 text-sm font-medium font-fam-varela font-bold uppercase">{product.category}</h3>
                <h2 className={`text-lg text-${props.mode} font-medium font-fam-roboto mb-4 my-4`}>{product.title.slice(0,20)}</h2>
                <h2  className={`text-${props.mode} text-lg font-bold font-medium font-fam-roboto mb-4 my-4`}>$ {product.price}/-</h2>
                <Link to={`/products/${product.id}`} className="mr-3 bg-gray-300 hover:bg-gray-400 py-2 font-fam-roboto text-gray-800 font-bold  px-4 rounded-l ">
                    Checkout
                </Link> 
                <Link className="bg-gray-300 hover:bg-gray-400 py-2 font-fam-roboto text-gray-800 font-bold  px-4 rounded-l " onClick={()=>handleCart(product)}>
                    Add to Cart
                </Link> 
            </div>
        </div>
    )
}

export default ProductItem
