import Home from "./Components/Home"
import Cart from "./Components/Cart"
import {BrowserRouter, Route} from "react-router-dom"
import './App.css';

const App = ()=>{
  <BrowserRouter>
    <Route exact path = "/" Component={Home}/>
    <Route exact path = "/cart" Component={Cart}/>
  </BrowserRouter>
}


export default App;
