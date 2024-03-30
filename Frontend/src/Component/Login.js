import React from 'react'
import Avatar from'./avatar.png'
import { Link, redirect } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

let status=''
function Login() 
{
  const navgate=useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: ""
  });

  const onInputChange = (e) => {
    setUser({ ...user,[e.target.name] : e.target.value });
  };
  
   
  const submit=async(event)=>
  {
                console.log(user);
              
                  event.preventDefault();
                  //console.log(user);
              
                 await axios.post(`http://localhost:8080/userlogin/validlogin?email=${user.email}&password=${user.password}`)
                .then(function (response) 
                {
                  
                    status=response.data.name
                  //console.log(status);
                  if(status!=null)
                  {
                    navgate("/welcome")
                  }
                  else
                  {
                    Swal.fire({
                      icon: "error",
                      title: 'Error!',
                      text: ' Email or Password Not Currect',
                      type: 'error',
                      customClass: {
                        confirmButton: 'btn btn-primary'
                      },
                      buttonsStyling: false
                    })
                  }
                })
                .catch(function (error) 
                {
                  console.log(error);
                }) 
               
          }
          const passwordShow=()=> 
          {
            var x = document.getElementById("exampleFormControlInput1");
            if (x.type === "password") {
              x.type = "text";
            } else {
              x.type = "password";
            }
          }


  return (
    <div>
       
             <div class="container">
                <div class="container login" >
                  <img src={Avatar} alt='photo' width={100} class="img-fluid mx-auto d-block mx-2"></img>
                <h2 class="text-center">Login</h2>
                   <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label fs-4 color-black fw-bold">Email</label>
                        <input type="email" class="form-control inputs w-100" placeholder="name@example.com" name='email' value={user.email} onChange={onInputChange} required/>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label fs-4 fw-bold">Password</label>
                        <input type="password" class="form-control inputs" id="exampleFormControlInput1" placeholder="***********" name='password' value={user.password} onChange={onInputChange} required/>
                        <div class="form-check form-switch my-4">
                        <input type="checkbox" class="form-check-input" id='id="flexSwitchCheckChecked"' onClick={passwordShow}/>Show Password
                        </div>
                       <Link to={"/forgotPassword"} ><label><u>Forgot Password</u></label></Link>
                      </div>
                    <button type="button" class="btn btn-primary loginbtn" id="type-error" onClick={submit}>Login</button>
                    <p class="font-monospace text-break ms-5">
                    Don't have an account? <Link to={"/register"} class="text-reset fs-4 "><label class="text-primary"><u>Create</u> </label></Link> Now.
                        </p>
                    
                </div>
            </div>
    </div>
  )
}
export {status}
export default Login
