import React from "react";
import '../index.css'
import {useSelector,useDispatch} from 'react-redux'
import {logoutUser} from '../actions/userActions'

function Header() {
const cartState=useSelector(state=>state.cartReducer)
const userState=useSelector(state=>state.loginReducer)
const {currUser}=userState
const dispatch=useDispatch()


  return (
    <div>
        <nav className="navbar navbar-expand-lg back shadow-lg p-1 mb-2">
  <div className="container-fluid ">
    <a className="navbar-brand front" href="/home">Food so Good</a>
    {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button> */}
    {/* <div className="collapse navbar-collapse" id="navbarNav"> */}
      <ul className="navbar-nav ml-auto">

        
        {currUser?( 
        <div className="dropdown mt-1">
        <a className="dropdown-toggle" style={{color:"orange"}} type="button" data-bs-toggle="dropdown" aria-expanded="false">
          {currUser.name}
        </a>
        <ul class="dropdown-menu">
          <li><a className="dropdown-item" href="/order">Orders</a></li>
          <li><a className="dropdown-item" href="#" onClick={()=>{dispatch(logoutUser())}}>logout</a></li>
        </ul>
      </div>
        ):(  //to display name of user logged in
        <li className="nav-item ">
          <a className="nav-link front"  href="/login">Login</a>
        </li>)}
        <li className="nav-item">
          <a className="nav-link front mx-2 p-1" style={{color:"yellow"}} href="/cart">Cart : {cartState.cartItems.length}
          </a>
        </li>
      </ul>
    {/* </div> */}
  </div>
</nav>

    </div>
  );
}

export default Header;
