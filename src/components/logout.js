import React from 'react'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Logout() {
    const navigate = useNavigate()
    useEffect(() => {
      if (!localStorage.getItem('token')) {
        navigate("/sign-in")
      }
    })
    return (
      <>
      {localStorage.getItem('token')?
<button className="btn btn-danger my-1"
onClick={() => {
  localStorage.removeItem('token')
  navigate("/sign-in")
}}
>
Logout
</button>
:null
}
</>
    )
}