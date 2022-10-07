import axios from 'axios';

//
export const getALLFoods=()=>async dispatch=>{
 
    dispatch({type:'GET_FOODS_REQUEST'})
    try{
        const res= await axios.get("/api/foods/getallfoods")
        console.log(res);
        dispatch({type:'GET_FOODS_SUCCESS',payload:res.data})
    }catch(error){
        dispatch({type:'GET_FOODS_FAILED',payload:error})
    }

}