import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Logout() {
    const navigate = useNavigate()
    return (
      <>
      {localStorage.getItem('token')?
<button className="btn btn-danger my-1"
onClick={() => {
  localStorage.clear('token')
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