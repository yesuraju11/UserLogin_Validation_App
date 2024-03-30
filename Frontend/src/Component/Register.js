import React from 'react'
import Navgation from './Navgation'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
function Register() {

  const navgate=useNavigate()
    const [user, setUser] = useState({
        name: "",
        email: "",
        phoneNum:"",
        password:""
      });
    
      const onInputChange = (e) => {
        setUser({ ...user,[e.target.name] : e.target.value });
      };

      const submit=async(event)=>
                {
                  event.preventDefault();
                  console.log(user);
                  await axios.post('http://localhost:8080/userlogin/post', {

                  name:user.name,
                  email:user.email,
                  phoneNum:user.phoneNum,
                  password:user.password
                })
                .then(function (response) 
                {
                  console.log(response.data);
                })
                .catch(function (error) 
                {
                  console.log(error);
                });
                Swal.fire({
                  icon: "success",
                  title: 'Thankyou',
                  text: 'Successfully Register',
                  type: 'success',
                  customClass: {
                    confirmButton: 'btn btn-primary'
                  },
                  buttonsStyling: false
                })
                navgate("/")
                }
  return (
    <div class="caintainer rigebg">
        <Navgation/>
       
         <h2 class="text-center"><u>Register</u></h2>
                <div class="rigester">
                    
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                        <input type="text" class="form-control w-100" placeholder="ABCD" name='name' value={user.name} onChange={onInputChange} required/>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={user.email} onChange={onInputChange} required/>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
                        <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="91xxxxxxxxxx" name='phoneNum' value={user.phoneNum} onChange={onInputChange} required/>
                    </div>
                    <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label">Password</label>
                        <input type="password" class="form-control" id="exampleFormControlInput1" placeholder="***********" name='password' value={user.password} onChange={onInputChange} required/>
                    </div>
                    <button type="button" class="btn btn-primary" onClick={submit}>Register</button>
                </div>
        
    </div>
  )
}

export default Register