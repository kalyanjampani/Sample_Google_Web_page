import React from 'react'
import { buyIceCream } from '../redux/iceCreams/iceAction'
import { connect } from 'react-redux'

function IcecreamsContainer(props) {
    return (
      <div>
          <h2>Number of IceCreams - {props.numberOfIcecreams} </h2>
          <button type = "button" onClick = {props.buyIceCream}>Buy Cake</button>
      </div>
    )
  }

const mapStateToProps = state =>{
    return {
      numberOfIcecreams: state.iceCream.numberOfIcecreams
    }
}
const mapDispatchToProps = dispatch =>{
  return{
    buyIceCream: ()=>dispatch(buyIceCream())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IcecreamsContainer)