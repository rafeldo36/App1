import React from 'react'
import { useEffect } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { useNavigate } from 'react-router-dom';
import IncDecCounter from "./IncDecCounter";
import 'bootstrap-daterangepicker/daterangepicker.css';
import DateRangePicker from 'react-bootstrap-daterangepicker';

export default function Homepage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!localStorage.getItem('token')) {
      navigate("/sign-in")
    }
  })
  return (
    <>
      <div>
        <h1> Welcome To UYO Rooms </h1>
        <div className='my-2'>
          <Dropdown>
            <Dropdown.Toggle variant="primary" id="dropdown-basic">
              Select City/Village
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Vasai</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Bhiwandi</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Kaman</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className='col-7'>
        <h6>Duration :</h6>
          <DateRangePicker
            initialSettings={{ startDate: '09/11/2022', endDate: '09/15/2022' }}
          >
            <input type="text" className="form-control" />
          </DateRangePicker>
        </div>
        <div className='my-1'>
          <h6>Rooms :</h6><IncDecCounter />
        </div>
        <div className='my-1'>
          <h6>Guests :</h6><IncDecCounter />
        </div>
        <button className="btn btn-success my-2"
onClick={() => {
  navigate("/sign-in")
}}
>
Search 
</button>
      </div>
    </>
  )
}


