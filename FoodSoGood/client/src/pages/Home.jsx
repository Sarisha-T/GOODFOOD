import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'//dispatch actions
import foods from '../components/data.json'
import Foodcards from '../components/Foodcards'
import { getALLFoods } from '../actions/foodActions'

function Home() {

 
  const dispatch=useDispatch()
  const foodstate=useSelector((state)=>state.getALLFoodsReducer)

  const {food,err,load}=foodstate; 
  
  //object 
useEffect(()=>{
  dispatch(getALLFoods())
},[])
  return (
    // loading foods to homepage
    <div>
        <div className="row mx-5 my-0 ">
          {load?(<h1>Load</h1>):err?(<h1>Something wrong</h1>):(
            foods.map(food=>{
              return <div className="col-md-3 py-0 text-center ">
                  <Foodcards food={food}/>
              </div>
          })
          )}
        </div>
    </div>
  )

}

export default Home