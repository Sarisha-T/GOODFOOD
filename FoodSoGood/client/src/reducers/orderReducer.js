export const orderReducer=(state={},action)=>{
    switch(action.type){
        case 'ORDER_REQUEST':return{
            loading:true
          
        }
        case 'ORDER_SUCCESS':return{
            loading:false,
            success:true
        }
        case 'ORDER_FAILED':return{
            loading:false,
            error:action.payload
        }
        default: return state

    }
}