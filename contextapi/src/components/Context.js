import {createContext,useState} from "react"

export const contextPre = createContext();

const Context = ({children}) =>{
    const[count,countFunc] = useState(0)
    const [double,doubleFunc] = useState(0)

    return(
       <contextPre.Provider  value = {{count,countFunc,double,doubleFunc}}>
         {children}
       </contextPre.Provider>
    )
}

export default Context