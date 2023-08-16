import CakeContainer from "./components/CakeContainer"
import NewCakeContainer from "./components/NewCakeContainer"
import IcecreamsContainer from "./components/IcecreamsContainer"
import UserContainer from "./components/UserContainer"
import {Provider} from "react-redux"
import store from "./redux/store"
import './App.css';

function App() {
  return (
    <Provider  store = {store}>
      <div className="App">
        <CakeContainer/>
        <IcecreamsContainer/>
        <NewCakeContainer/>
        <UserContainer/>
      </div>
    </Provider>
   
  );
}

export default App;
