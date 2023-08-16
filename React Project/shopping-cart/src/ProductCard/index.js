import { useState } from "react"
import "./index.css"

const ProductCrad = props =>{
    const {cartData,onAddCart,onRemoveCart} = props
    const {thumbnail,description,title,id} = cartData

    const [btnToggle,toggleFunc] = useState(false)

    const ClickOnAddBtn = ()=>{
        toggleFunc(prevState => !prevState)
        onAddCart(id)
    }

    const ClickOnRmBtn = ()=>{
        toggleFunc(prevState => !prevState)
        onRemoveCart(id)
    }
    

    return(
        <li className="li-item">
            <img className = "image-ele" src = {thumbnail} alt = {title}/>
            <p>{description}</p>
            {btnToggle?<button className="removeBtn" onClick={ClickOnRmBtn}>REMOVE FROM CART</button>:<button className="addBtn" onClick={ClickOnAddBtn}>ADD TO CART</button>}
        </li>
  )

}
export default ProductCrad