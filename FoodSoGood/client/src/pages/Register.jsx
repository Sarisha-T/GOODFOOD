import React,{useState,useEffect} from 'react'
import {useDispatch,useSelector} from 'react-redux'
import{regis} from '../actions/userActions'
// import {regReducer} from '../reducers/userReducer'
import Load from '../components/Load'
import Err from '../components/Err'
import Success from '../components/Success'



function Register() {
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[mobilenum,setNum]=useState("")
    const[password,setPwd]=useState("")
    const[cpassword,setCpwd]=useState("")

    //for error
    const registerstate=useSelector(state=>state.regReducer)
    const {error,loading,success}=registerstate
    const dispatch=useDispatch()

    function reg(){
        if(password!=cpassword){
        
            alert("passwords not matching")
        }else{
            const user={
                name,
                email,
                password,
                mobilenum
            }
            console.log(user)
            dispatch(regis(user))
        }
    }

  return (
    <div>
        <div className='row justify-content-center mt-5'>
            <div className="col-md-5 mt-5 text-left shadow-lg p-3 mb-5 bg-body rounded">

                {loading && (<Load/>)}
                {success && (<Success success="User Registered Succesfully"/>)}
                {error && (<Err error="Email already registered"/>)}
                <h2 className='text-center m-2' style={{fontSize:'35px'}}>Register Now</h2>
                <div>
                    <input type="text"  placeholder='name' className="form-control" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    <input type="email" required placeholder='email' className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} />
                    <input type="number" required placeholder='mobile number' maxLength={10} className="form-control" value={mobilenum} onChange={(e)=>setNum(e.target.value)} />
                    <input type="password" required placeholder='password' className="form-control" minLength={8} value={password} onChange={(e)=>setPwd(e.target.value)}/>
                    <input type="password" required placeholder='cpassword' className="form-control" minLength={8} value={cpassword} onChange={(e)=>setCpwd(e.target.value)}/>
                    <button className="add mt-3 mb-3" onClick={reg}>
                        REGISTER
                    </button>
                    <br />
                    <a href="/login">click here to login</a>
                </div>

            </div>

        </div>

    </div>
  )
}

export default Register