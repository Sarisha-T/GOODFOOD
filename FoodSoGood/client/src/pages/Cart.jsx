import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {deleteFromCart,addToCart} from '../actions/cartActions'
import Payment from '../components/Payment'


function Cart() {
    const cartSate=useSelector(state=>state.cartReducer)
    const cartItems=cartSate.cartItems
    var totalamt=cartItems.reduce((x,item)=>x+item.price,0)
    const dispatch=useDispatch()
  return (
    <div>
        <div className="row justify-content-center">
            <div className="col-md-6 justify-content-center">
                <h2 style={{fontSize:"40px",}}>MY CART</h2>
                {cartItems.map(item=>{
                    return <div className="flex-container shadow-lg p-3 mb-5 bg-body rounded text-center">
                    <div className='w-100 text-center m-1 '>
                        <h1>Name : {item.name}</h1>
                        <h1>Price: {item.quantity} x {item.prices[0]}= Rs. {item.price}/-</h1>
                        <span><b>Quantity : </b></span>
                        <i class="fa-solid fa-minus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity-1))}}></i>
                        <b>{item.quantity}</b>
                        <i class="fa-solid fa-plus" aria-hidden="true" onClick={()=>{dispatch(addToCart(item,item.quantity+1))}}></i>
                   
                    </div>

                    <div className='m-1 w-100'>
                        <img src={item.image} style={{height:"70px",width:"70px"}} srcset="" />

                    </div>
                    <div className='m-1'>
                    <i class="fa-solid fa-trash-can mt-3" onClick={()=>{dispatch(deleteFromCart(item))}}></i>
                    </div>
                    
                </div>

                })}
                
            </div>
            <div className="col-md-4 shadow-lg p-3 mb-5 bg-body rounded mt-5 ">
                <h2 style={{fontsize:'45px'}} className="my-5">Total Amount: Rs. {totalamt}/- </h2>
                <Payment totalamt={totalamt}></Payment>
            </div>

        </div>
    </div>
  )
}

export default Cart