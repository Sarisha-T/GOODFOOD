import React from 'react'
import {useState} from "react"
import {useNavigate} from 'react-router-dom'; 

function Loginn() {
    let [login,SetLogin]=useState("register");
    const [userCreds, setUserCreds] = useState({ role: 'customer' });
    const [message, setMessage] = useState('');
    const [isMessage, setIsMessage] = useState(false);

   let [msg,setMsg]=useState(null);
   const nav=useNavigate();
   let user={};
   function changeLogin(){
    if(login==="register")
    {
      SetLogin('login')
    }else{
      SetLogin("register")
    }

   }
   function readVal(property,value){
    user[property]=value;

   }


   function readValue(property,value){
    let dummyCreds = { ...userCreds };
    dummyCreds[property] = value;
    setUserCreds(dummyCreds);
    

   }

    // function to log in the user
    const signin = (event) => {
      event.preventDefault();

      let dummyCreds = { ...userCreds };
      dummyCreds.name = dummyCreds.name;

      fetch("http://localhost:5000/user/login", {
          method: 'POST',
          headers: { 'content-type': 'application/json' },
          body: JSON.stringify(dummyCreds),
      })
          .then((res) => res.json())
          .then((data) => {
              if (data.success) {
                  setUserCreds({ role: 'customer' });
                  localStorage.setItem('userDetails', JSON.stringify(data));
                  nav('/home');
              } else {
                  setMessage(data.message);
                  setIsMessage(true);
                  setTimeout(() => setIsMessage(false), 3000);
              }
          })
          .catch((err) => {
              console.log(err);
              setMessage('Internal Server error');
              setIsMessage(true);
              setTimeout(() => setIsMessage(false), 3000);
          });
  };


   function register(){
    fetch("http://localhost:5000/user/reg",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"

      },
      body:JSON.stringify(user)

    })
    .then((res)=>res.json())
    .then((data)=>{setMsg(data.message)
      user={};
      setTimeout(()=>{
        setMsg(null);
      },3000)
      SetLogin("login")
    })
    .catch((err)=>{
      console.log(err)})
    }

    
  //  function signin(){
  //   fetch("http://localhost:5000/user/login",{
  //     method:"POST",
  //     headers:{
  //       "Content-Type":"application/json"

  //     },
  //     body:JSON.stringify(user)

  //   })
  //   .then((res)=>res.json())
  //   .then((data)=>{
  //     if(data.success===true){
  //       localStorage.setItem("token",data.token);
  //       nav('/Home')
       
  //     }else{
  //       setMsg(data.message)
  //       setTimeout(()=>{
  //         setMsg(null);
  //       },3000)


  //     }
  //   })
  //   .catch((err)=>{
  //     console.log(err)})
  //   }




  return (
    <div>
        
      <div className='row justify-content-center m-5 mt-5'>
      
         {
      msg!==null?(
      
        <div className="message">
         {msg}
        </div>
       ):null
      }
            <div className="col-md-5 mt-5 text-left">
            <p className="signin" onClick={changeLogin}>
                  {
                    login==="register"?(
                      "Login"
                    ):(
                      "Register"
                    )
                  }
                </p> 
                
                <br />
                {
                  login==='register'?(
                    
                    
                <div>
                    <h2 className='text-center m-1' style={{fontSize:'35px'}}>Register Now</h2>
                    <input type="text"  placeholder='name' className="form-control" onChange={(event)=>{
                      readVal("name",event.target.value)
                    }} required/>
                    <input type="email" required placeholder='email' className="form-control" onChange={(event)=>{
                      readVal("email",event.target.value)}} />
                    {/* <input type="number" required placeholder='mobile number' maxLength={10} max={10} className="form-control" onChange={(e)=>setNum(e.target.value)} /> */}
                    <input type="password" required placeholder='password' className="form-control" onChange={(event)=>{
                      readVal("password",event.target.value)}}/>
                    {/* <input type="password" required placeholder='cpassword' className="form-control" minLength={8} onChange={(e)=>setCpwd(e.target.value)}/> */}
                    <button className="add mt-3" onClick={register}>
                        REGISTER
                    </button>
                </div>


                  ):(
                    <div>
                      {isMessage ? (
                
                <h1>{message}</h1>
            
        ) : (
            
                <h1>{message}</h1>
           
        )}
                        <h2 className='text-center m-1' style={{fontSize:'35px'}}>LOGIN NOW</h2>
                        <input type="name" required placeholder='name' className="form-control" onChange={(event)=>{
                      readValue("name",event.target.value)}} />
                     
                    <input type="password" required placeholder='password' className="form-control" onChange={(event)=>{
                      readValue("password",event.target.value)}}/>
                
                    <button className="add mt-3 w-50 p-2" onClick={(event) => signin(event)}>
                        LOGIN
                    </button>
                    



                    </div>
                  )
                  }


            </div>
      </div>


    </div>
  )
}

export default Loginn