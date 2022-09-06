import React from 'react'

export default function Home() {

  return (
    <div>
     <h2>Welcome To UYO Rooms</h2>
     <div className="d-grid my-3">
      <p>Are you looking for a rooms? Click the below button!</p>
          <a className="btn btn-outline-primary my-2" href='sign-up' role="button">Signup</a>
          <a className="btn btn-outline-primary my-2" href='sign-in' role="button">Login</a>
        </div>
    </div>
  )
}


