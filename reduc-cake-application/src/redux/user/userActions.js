import axios from "axios";
import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "./userTypes";

export const fetchUserRequest = ()=>{
    return{
        type:FETCH_USERS_REQUEST
    }
}

export const fetchUserSuccess = (data)=>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload:data
    }
}

export const fetchUserFailure = (error) =>{
    return {
        type:FETCH_USERS_FAILURE,
        payload: error
    }
}

export const fetchUsers = ()=>{
    return (dispatch)=>{
        dispatch(fetchUserRequest)
        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(response=>{
                const data = response.data
                dispatch(fetchUserSuccess(data))
            })
            .catch(err=>{
                const error = err.message
                dispatch(fetchUserFailure(error))
            })
    }
}