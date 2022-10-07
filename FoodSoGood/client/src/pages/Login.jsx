import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import {loginUser} from '../actions/userActions'
import Load from '../components/Load'
import Err from '../components/Err'


function Login() {

   
    const[email,setEmail]=useState("")
    
    const[password,setPwd]=useState("")
    //for error
    const loginstate=useSelector(state=>state.loginReducer)
    const {loading,error}=loginstate
    const dispatch=useDispatch()
    
//if user logged in then clicking login page should be directed to homepage
    useEffect(()=>{
        if(localStorage.getItem('currUser')){
            window.location.href='/home'
        }
    },[])


    function login(){
        const user={email,password}
        dispatch(loginUser(user))
    }
  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">
                <h2 className='text-center m-2' style={{fontSize:'35px'}}>Login Now</h2>
                {loading && (<Load/>)}
                {error && (<Err error="Invalid Credentials"/>)}
                <div>
                    
                    <input type="email" required placeholder='email' className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                   
                    <input type="password" required placeholder='password' className="form-control" minLength={8} value={password} onChange={(e)=>setPwd(e.target.value)}/>
                    
                    <button className="add mt-3 mb-3" onClick={login}>
                        LOGIN
                    </button>
                    <br />
                    <a style={{color:'blue'}} href="/register">click here to register</a>
                </div>

            </div>

        </div>



    </div>
  )
}

export default Login