import { useContext } from "react";
import {contextPre} from "./Context";

const Counter = ()=>{

    const {double} = useContext(contextPre)
    
    return(
        <>
        <h1>count2: {double}</h1>
        </>
        
    )
}

export default Counter