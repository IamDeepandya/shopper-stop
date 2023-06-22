import { useState } from "react";
import ApiContext from "./apiContext";


const ApiState = (props) => {

    const [data, setData] = useState([]);

    const fetchData = async () => {
        const response = await fetch("https://fakestoreapi.com/products");
        const json = await response.json();
        const finalProducts = json.filter((item) => {
            return (
                item.category === "men's clothing" || item.category === "women's clothing"
            )
        })
        setData(finalProducts);
    }
    

    return (
        <ApiContext.Provider value={{ data, fetchData}}>
            {props.children}
        </ApiContext.Provider>
    )
}

export default ApiState;
