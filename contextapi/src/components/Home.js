
import { useContext } from "react";
import {contextPre} from "./Context";

const Home = ()=>{

    const {count,countFunc,double,doubleFunc} = useContext(contextPre)

    const increaseCount = ()=>{
        countFunc(count+1)
        doubleFunc(double+2)
    }
    
    return(
        <>
            <button onClick={()=>{increaseCount()}}>
            Increase Count
        </button>
        <h1>count: {count}</h1>
        </>
        
    )
}

export default Home