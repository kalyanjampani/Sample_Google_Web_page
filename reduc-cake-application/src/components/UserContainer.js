import React, {useEffect} from 'react'
import { connect } from 'react-redux'
import { fetchUsers } from '../redux/user/userActions'

function UserContainer({fetchUsers,userData}) {

    useEffect(()=>{
        fetchUsers()
    },[])

  return (
    userData.isLoading?(<h2>Loading</h2>):userData.error?(<h1>{userData.error}</h1>):(<div>
        <h2>Users List</h2>
        <div>
            {
                userData&&userData.data&&userData.data.map(na=><p>{na.name}</p>)
            }
        </div>
    </div>)
  )
}

const mapStateToProps = state =>{
    return{
        userData: state.user
    }
}

const mapReducerToProps = reducer =>{
    return{
        fetchUsers: ()=>reducer(fetchUsers())
    }
}

export default connect(mapStateToProps,mapReducerToProps)(UserContainer)