
import {useState,useEffect} from "react"
import ProductCrad from "../ProductCard"
import CartFolder from "../CartFolder"
import "./index.css"

const MainFolder = () =>{

    const [dataIs,stateFunc] = useState([]);
    const [cartDataIs,cartDataFuncIs] = useState([]);
    const [totalPrice,totalPriceFunc] = useState(0)

    useEffect(()=>{
        return async ()=>{
            const data = await fetch('https://dummyjson.com/products')
            const responseIs = await data.json();
            stateFunc([...responseIs.products]);
        }
    },[]);

    const addToCart = id =>{
        const addingData = dataIs.filter((eachItem)=>eachItem.id === id);
        cartDataFuncIs(a=>[...a,...addingData]);   
    }

    const removeToCart = id =>{
        const removingData = cartDataIs.filter((eachItem)=>eachItem.id !== id);
        cartDataFuncIs(removingData);   
    }

    const totalPrizeFuncPl = (pricePro) => {
        totalPriceFunc(prevVal => prevVal + pricePro)
        
    }
    const totalPrizeFuncMi = (pricePro) => {
        totalPriceFunc(prevVal => prevVal - pricePro)
        
    }
    


    return(
        <>
            <h1 className="main-heading">Shopping Cart</h1>
            <div className="main-con">
                <div className="right-con">
                    <ul className="left-un">
                        {dataIs.map(eachItem=><ProductCrad cartData = {eachItem} key = {eachItem.id} onAddCart = {addToCart} onRemoveCart = {removeToCart}/>)}
                    </ul>
                </div>
                <div className="left-con">
                    <ul className="right-un">
                        {cartDataIs.map(eachItem=><CartFolder  cartDataToAdd = {eachItem} key = {eachItem.id} totalPrizePlus = {totalPrizeFuncPl} totalPrizeMinus = {totalPrizeFuncMi}/>)}
                    </ul>
                    <p>Total Prize: {totalPrice}</p>
                </div>
            </div>
            
        </>
    )
    
}

export default MainFolder