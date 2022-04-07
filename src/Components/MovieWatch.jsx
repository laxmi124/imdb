import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../Context/AuthContext'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import {  useNavigate } from 'react-router-dom';

const MovieWatch = () => {
    const {vId , setVId} = useContext(AuthContext);
    const navigate = useNavigate();
    const [val , setVal] = useState("")
    useEffect(()=>{
        setVal(`https://www.youtube.com/embed/${vId}`)
       
    }, [val])
//   console.log(val);
const handleBack = ()=>{
    navigate("/")
}

  return ( <div style={{overflowY:"hidden", position:"relative",marginTop: "1rem"}}> 
  <button  onClick={handleBack} style={{background:"black", color:"white", borderRadius:"10%", position:"absolute", left:"0px" }}> <CloseIcon></CloseIcon> Close</button>
    {/* <ArrowBackIcon className='backbtn' onClick={handleBack} sx={{position:"absolute", top:"45vh", left:"0", fontSize:"3rem", color:"yellow", border:"1px solid yellow", borderRadius:"1%"}}></ArrowBackIcon> */}
    {val != ""?  <iframe style={{height:"60vh" , width:"100%"}} src={val} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe> : null }
    
    </div>
  )
}

export default MovieWatch