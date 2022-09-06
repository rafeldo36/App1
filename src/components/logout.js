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

<button className="btn btn-outline-danger my-1"
onClick={() => {
  localStorage.removeItem('token')
  navigate("/sign-in")
}}
>
Logout
</button>
    )
}