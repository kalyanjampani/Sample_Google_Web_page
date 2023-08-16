import {BUY_CAKE} from "./cakeTypes"


export const buyCake = (valueIs) =>{
    return{
        type: BUY_CAKE,
        payload: valueIs
    }
}