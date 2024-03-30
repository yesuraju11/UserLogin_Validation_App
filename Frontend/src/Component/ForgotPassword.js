import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Navgation from './Navgation'
let status;

function ForgotPassword() {

    const navgate=useNavigate()

    const [user, setUser] = useState({
        email: "",
        phoneNum: ""
      });

      const onInputChange = (e) => {
        setUser({ ...user,[e.target.name] : e.target.value });
      };

      const getPassword= async(event)=>
      {
       // console.log(user);
        event.preventDefault();
        //console.log(user);
    
              await axios.post(`http://localhost:8080/userlogin/forgotPassword?email=${user.email}&phoneNum=${user.phoneNum}`)
              .then(function (response) 
              {
                
                  status=response.data.password
                    //console.log(status);
                    if(status!=null)
                    {
                        Swal.fire({
                            title: "your Password",
                            text: "Note - "+status,
                            icon: "info"
                          });
                    }
                    else
                    {
                      Swal.fire({
                        icon: "error",
                        title: 'Error!',
                        text: ' Email or Phone-Number Not Currect',
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
  return (
    <div class="container">
        <Navgation/>
        <div class="md-3 forgotPass">
                <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label fs-4 color-black fw-bold">Email</label>
                        <input type="email" class="form-control inputs w-100" placeholder="name@example.com" name='email' value={user.email} onChange={onInputChange} required/>
                </div>
                <div class="mb-3 ">
                        <label for="exampleFormControlInput1" class="form-label fs-4 fw-bold">Phone Number</label>
                        <input type="text" class="form-control inputs" id="exampleFormControlInput1" placeholder="***********" name='phoneNum' value={user.phoneNum} onChange={onInputChange} required/>
                </div>
                <button type="button" class="btn btn-primary loginbtn" id="type-error" onClick={getPassword}>Get Password</button>

        </div>
    </div>
  )
}
 
export default ForgotPassword