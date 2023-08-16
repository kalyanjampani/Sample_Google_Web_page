import { useState } from "react";
import "./index.css"

const CartFolder = props =>{
    const {cartDataToAdd,totalPrizePlus,totalPrizeMinus} = props;
    const {thumbnail,description,title,id,price} = cartDataToAdd

    const [count,countFunc] = useState(0);
    

    const minusBtn = () =>{ 
        countFunc(prevState=>prevState-1)
        totalPrizeMinus(id)
        
    }
    const plusBtn = ()=>{
        countFunc(prevState=>prevState+1)
        totalPrizePlus(id)
        
    }



    
    return(
        <li className="cart-list">
            <div>
                <img className = "image-ele2" src = {thumbnail} alt = {title}/>
            </div>
            <div>
                <p>{description}</p>
                <p>Rs: {price}</p>
                <div className="symbol-btn">
                    <button onClick = {minusBtn} disabled = {count===0?true:false}>-</button>
                    <p>{count}</p>
                    <button onClick = {plusBtn} >+</button>
                </div>
            </div>
        </li>
    )
}

export default CartFolder