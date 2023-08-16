import { combineReducers } from "redux";
import cakeReduser from "./cakes/cakeReduser";
import iceReduser from "./iceCreams/iceReduser";
import userReducer from "./user/userReducer";

const rootReducer = combineReducers({
    cake: cakeReduser,
    iceCream:iceReduser,
    user:userReducer
})

export default rootReducer