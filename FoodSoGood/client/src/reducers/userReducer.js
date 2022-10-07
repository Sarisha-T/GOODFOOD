

export const regReducer=(state={},action)=>{
    switch(action.type){
        case 'USER_REG_REQUEST':return{
            loading:true
          
        }
        case 'USER_REG_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'USER_REG_FAILED':return{
            loading:false,
            error:action.payload
        }
        default: return state

    }
}



export const loginReducer=(state={},action)=>{
    switch(action.type){
        case 'USER_LOGIN_REQUEST':return{
            loading:true
          
        }
        case 'USER_LOGIN_SUCCESS':return{
            loading:false,
            success:true,
            currUser:action.payload
        }
        case 'USER_LOGIN_FAILED':return{
            loading:false,
            error:action.payload
        }
        default: return state

    }
}