import axios from "axios";
export const placeOrder=(token,totalamt)=>async(dispatch,getState)=>{
    dispatch({type:'ORDER_REQUEST'})
    const currUser=getState().loginReducer.currUser
    const cartItems=getState().cartReducer.cartItems
    try{
        const response=await axios.post('/api/orders/order',{token,totalamt,currUser,cartItems})
        dispatch({type:'ORDER_SUCCESS'})
        console.log(response)
       
    }catch(error){
        dispatch({type:'ORDER_FAILED'})

    }
}
