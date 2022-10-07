export const cartReducer=(state={cartItems:[]},action)=>{
    switch(action.type){
        case 'ADD_TO_CART':
          //check if item is present  then replace old with new
        const ifExists=state.cartItems.find(item=>item._id===action.payload._id)
        //
        if(ifExists){
            //update quantity
            return{
                ...state,
                cartItems:state.cartItems.map(item=>item._id===action.payload._id?action.payload:item)
            }
           
        }
        //adding new item
        else{
             return{
            ...state,
            cartItems:[...state.cartItems,action.payload]
        }
        }
        
        
        case 'DELETE_FROM_CART':return{
            ...state,
            cartItems:state.cartItems.filter(item=>item._id!==action.payload._id)
        }
        
        default:return state

    }
}