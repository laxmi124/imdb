import { Checkbox } from '@mui/material'
import React from 'react'
import Logo from './Logo'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
const SignInPage = () => {
  const [user, setUser] = useState({username:"", password:""});
    let navigate = useNavigate()
  let {id} = useParams();
  
  useEffect(()=>{
    // getUser()
  }, [])
  const getUser = async ()=>{
    // console.log(user)
  
    console.log(user);
    let res1 = await fetch(`https://masai-api-mocker.herokuapp.com/auth/login`, {
      method:"POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    let res2 = await res1.json();
    // console.log( "hello" , res2);
    if(!res2.error){
      setUser({...res2});
      navigate("/")

    }
  }
  
  const handleChange = (e)=>{
    const {name, value} = e.target;
    // if(name!=="name"){

      setUser({...user, [name] : value })
     
    // }

  }
  const handleSubmit = async()=>{
  
      
     getUser()
    
      
    
  }
  return (
    <div
      style={{ backgroundColor: "white", height: "100vh", textAlign: "center", marginTop:"12px" }}
    >
      <div style={{margin:"12px"}}>
        <Logo></Logo>

        <div
          style={{
            marginTop:"24px",
            display: "flex",
            flexDirection: "column",
            width: "20rem",
            margin: "auto",
            textAlign: "left",
            border: "1px solid #b0a7a7",
            padding: "12px",
            borderRadius: "6px",
          }}
          className="register-input"
        >
          <h4>Sign-In</h4>
         
          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop:"12px" }}
            htmlFor="email"
          >
            Email
          </label>
          <input onChange={handleChange}  style={{ fontSize: "12px" }} type="email" name="username" />

          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop:"12px" }}
            htmlFor="password"
          >
            Password
          </label>
          <input onChange={handleChange} 
            style={{ fontSize: "12px" }}
            type="password"
            placeholder=""
            name='password'
          />
          
        
          
          <button
          onClick={handleSubmit}
            style={{
              fontSize: "12px",
              padding: "4px",
              outline: "none",
              borderRadius: "3px",
              margin: "6px 0px",
              fontWeight: "400",
              background: 'rgb(240 193 75)',
              borderColor: 'rgb(168 135 52) rgb(156 126 49) rgb(132 106 41)',
              color:' rgb(17 17 17)',
            


            }}
          >
           Sign-In
          </button>
          <div style={{fontSize:"12px"}}>
          <Checkbox  defaultChecked />
            <label htmlFor="" >Keep me signed in. <span>Details <sup><ArrowDropDownIcon></ArrowDropDownIcon></sup></span></label>
          </div>
          <button  style={{
              fontSize: "12px",
              padding: "4px",
              outline: "none",
              borderRadius: "3px",
              margin: "6px 0px",
              fontWeight: "400",
              background: 'rgb(240 193 75)',
              borderColor: 'rgb(168 135 52) rgb(156 126 49) rgb(132 106 41)',
              color:' rgb(17 17 17)',
            


            }}>Create your IMDb account</button>
        </div>
        
      </div>
      <hr />
    </div>
  )
}

export default SignInPage