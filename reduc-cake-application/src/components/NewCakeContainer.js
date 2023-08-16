import React from 'react'
import { buyCake } from '../redux/cakes/cakeAction'
import { useState } from 'react'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [valueIs,valueIsFunc] = useState(1)
  return (
    <div>
        <h2>Number of Cakes - {props.numberOfCakes} </h2>
        <input type = "text" value = {valueIs} onChange = {e=>valueIsFunc(e.target.value)}/>
        <button type = "button" onClick = {()=>props.buyCake(valueIs)}>Buy {valueIs} Cake</button>
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
        buyCake: (valueIs)=>dispatch(buyCake(valueIs))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)