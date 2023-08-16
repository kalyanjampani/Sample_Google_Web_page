import React from 'react'
import { Button, Form } from 'react-bootstrap'
import { Rating } from './Rating'
import { CartState } from '../context/Context'

function Filters() {
    const {
      productDispatch,
      productState: { byStock, byFastDelivery, sort, byRating },
    } = CartState();

    console.log(byStock, byFastDelivery, sort, byRating)

  return (
    <div className='filters'>
        <span>Filter Products</span>
        <span><Form.Check label="Ascending" inline name = "group1" type = "radio" id = {`inline-1`}
         onChange={()=>productDispatch({
          type:"SORT_BY_PRICE",
          payload: "lowToHigh"
         })}
         checked = {sort === "lowToHigh"? true:false} />
         </span>
        <span><Form.Check label="Decending" inline name = "group1" type = "radio" id = {`inline-2`}
         onChange={()=>productDispatch({
          type:"SORT_BY_PRICE",
          payload: "highToLow"
         })}
         checked = {sort === "highToLow"? true:false}/></span>
        <span><Form.Check label="Include Out of Stock" inline name = "group1" type = "checkbox" id = {`inline-3`}
         onChange={()=>productDispatch({
          type:"FILTER_BY_STOCK"
         })}
         checked = {byStock}/></span>
        <span><Form.Check label="Fast Delivery Only" inline name = "group1" type = "checkbox" id = {`inline-4`}
        onChange={()=>productDispatch({
          type:"FILTER_BY_DELIVERY"
         })}
         checked = {byFastDelivery}/></span>
        <span>
            <label style={{paddingRight: 10}}>Rating:</label>
            <Rating rating = {byRating} onClick = {(i)=>productDispatch({
              type: "FILTER_BY_RATING",
              payload: (i+1)
            })} style = {{cursor: "pointer"}}/>
        </span>
        <Button variant='light' onClick={()=>productDispatch({
          type:"CLEAR_FILTERS"
        })}>Clear Filters</Button>
    </div>
  )
}

export default Filters