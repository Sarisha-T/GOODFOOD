

export const getALLFoodsReducer=(state={},action)=>{
    switch(action.type){
        case 'GET_FOODS_REQUEST':return{
            ...state
        }
        case 'GET_FOODS_SUCCESS':return{
            foods:action.payload
        }
        case 'GET_FOODS_FAILED':return{
            error:action.payload
        }
        default:return state

    }
}