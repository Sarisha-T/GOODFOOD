//combine all reducers
import {getALLFoodsReducer} from './reducers/FoodReducer'
import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import {configureStore} from '@reduxjs/toolkit'
import { cartReducer } from './reducers/cartReducer'
import { regReducer , loginReducer} from './reducers/userReducer';
import { orderReducer } from './reducers/orderReducer';


const reducer=combineReducers({
    getALLFoodsReducer:getALLFoodsReducer,
    cartReducer:cartReducer,
    regReducer:regReducer,
    loginReducer:loginReducer,
    orderReducer:orderReducer

})

//converting item into json if its in localstorage else assign empty array
const cartItems=localStorage.getItem('cartItems')?JSON.parse(localStorage.getItem('cartItems')):[]


const currUser=localStorage.getItem('currUser')?JSON.parse(localStorage.getItem('currUser')):null
//adding to cart reducer
let initialState={
    cartReducer:{
        cartItems:cartItems
    },
    loginReducer:{
        currUser:currUser
    }
    
}
const middleware = [thunk];
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

// const composeEnhancers=composeWithDevTools({})
// const store=createStore(finalReducer,initialState,composeEnhancers(applyMiddleware(thunk)))
export default store;