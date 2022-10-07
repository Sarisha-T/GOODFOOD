//import 
import axios from "axios";

//action and async logic
export const  getAllFoods=()=>dispatch=>{
    dispatch({type:'GET_FOOD_REQUEST'}) //req to reducer
    try{
        const res=axios.get('/api/foods/getfood')
        console.log(res)
        dispatch({type:'GET_FOOD_SUCCESS',payload:res.data})
    }catch(error){
        dispatch({type:'GET_FOOD_FAILED',payload:error})
    }
}




