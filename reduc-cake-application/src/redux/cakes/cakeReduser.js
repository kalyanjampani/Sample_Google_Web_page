
import {BUY_CAKE} from "./cakeTypes"
const initialState = {
    numberOfCakes: 10
}

const cakeReduser = (state = initialState ,action)=>{
    switch(action.type){
        case BUY_CAKE: return {
            ...state,
            numberOfCakes: state.numberOfCakes-action.payload

        }
        default: return state

    }
}

export default cakeReduser