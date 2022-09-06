import React from 'react'
import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';

export default function Homepage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/sign-in")
    }
  }, [])
  return (
    <div>
      <h1> Welcome To UYO Rooms </h1>
      <div className='my-3'>
        <Dropdown>
          <Dropdown.Toggle variant="outline-primary" id="dropdown-basic">
            Select City/Village
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Vasai</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Bhiwandi</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Kaman</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

      </div>

      <button className="btn btn-danger my-2"
        onClick={() => {
          localStorage.removeItem('token')
          navigate("/sign-in")
        }}
      >
        Logout
      </button>

    </div>
  )
}


