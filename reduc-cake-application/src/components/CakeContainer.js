import React from 'react'
import { buyCake } from '../redux/cakes/cakeAction'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of Cakes - {props.numberOfCakes} </h2>
        <button type = "button" onClick = {props.buyCake}>Buy Cake</button>
    </div>
  )
}

const mapStateToProps = state =>{
    return{
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        buyCake: ()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)