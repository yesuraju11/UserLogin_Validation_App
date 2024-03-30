import React from 'react'
import { status } from './Login'
import { Link } from 'react-router-dom'

function Welcome() {
  return (
    <div class="container">
        
        <div class="d-flex bd-highlight navbg my-5">
                <div class="p-2 bd-highlight">
                      <span class="material-symbols-outlined fs-1 ms-5 me-5 d-inline-block align-text-top bg-info rounded-circle p-2">
                       supervisor_account
                      </span>
                  </div>
                <div class="p-2 w-100 bd-highlight">
                      <p class="ms-5 fs-2 text-break">Hello,<lable class="text-uppercase me-5 text-danger "> {status}</lable></p>

                </div>
                <div class="ms-auto p-2 bd-highlight">
                     <button type="button" class="btn btn-danger logWel my-3"><Link to={"/"} class="text-dark">Log-Out</Link></button>
                </div>
        </div>

        <h1 class="text-center">Welcome</h1>

        
    </div>
  )
}

export default Welcome