import axios from "axios";
export const regis=(user)=>async dispatch=>{
    dispatch({type:'USER_REG_REQUEST'})
    try{
        const response=await axios.post('/api/users/register',user)
        console.log(response)
        dispatch({type:'USER_REG_SUCCESS'})
    }catch(error){
        dispatch({type:'USER_REG_FAILED',payload:error})

    }
}

export const loginUser=(user)=>async dispatch=>{
    dispatch({type:'USER_LOGIN_REQUEST'})
    try{
        const response=await axios.post('/api/users/login',user)
        console.log(response)
        dispatch({type:'USER_LOGIN_SUCCESS',payload:response.data})
        localStorage.setItem('currUser',JSON.stringify(response.data))//store in localstorage
        window.location.href='./home'
    }catch(error){
        dispatch({type:'USER_LOGIN_FAILED',payload:error})
    }
}

export const logoutUser=()=>dispatch=>{
    localStorage.removeItem('currUser')
    window.location.href='./login'
}