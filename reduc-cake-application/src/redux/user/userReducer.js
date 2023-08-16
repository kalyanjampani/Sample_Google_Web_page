
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes"

const initialState = {
    isLoading: false,
    data:[],
    error: ""
}

const reducer = (state = initialState,action) => {
    switch(action.type){
        case FETCH_USERS_REQUEST: return{
            ...state,
            isLoading: true
        }
        case FETCH_USERS_SUCCESS:
            return{
                isLoading: false,
                data: action.payload,
                error:""
            }
        case FETCH_USERS_FAILURE:
            return{
                isLoading: false,
                error: action.payload,
                data:[]
            }
        default:
            return{
                state
            }
    }
}

export default reducer
