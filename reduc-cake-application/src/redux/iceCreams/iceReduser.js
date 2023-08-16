import {BUY_ICECREAM} from "./iceTypes"

const initialState = {
    numberOfIcecreams: 20
}


const iceReduser = (state = initialState,action)=>{
        switch(action.type){
            case BUY_ICECREAM: return{
                ...state,
                numberOfIcecreams: state.numberOfIcecreams-1
            }
            default: return state
        }
}

export default iceReduser