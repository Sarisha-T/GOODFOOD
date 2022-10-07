
export const addToCart=(food,quantity)=>(dispatch,getState)=>{

    var cartItem={
        name:food.name,
        _id:food._id,
        image:food.image,
        quantity:Number(quantity),
        prices:food.prices,
        price:food.prices[0]*quantity

    }
    if(cartItem.quantity>20){
        alert('out of stock')
    }else{
        if(cartItem.quantity<1){
            dispatch({type:'DELETE_FROM_CART',payload:food})
        }else{
            dispatch({type:'ADD_TO_CART',payload:cartItem})
        }
 
    }

const cartItems=getState().cartReducer.cartItems
//updating

    localStorage.setItem('cartItems',JSON.stringify(cartItems))

}

export const deleteFromCart=(food)=>(dispatch,getState)=>{

    dispatch({type:'DELETE_FROM_CART',payload:food})
    const cartItems=getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}