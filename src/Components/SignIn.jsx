import React, { useContext } from "react";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import AppleIcon from "@mui/icons-material/Apple";
import HowToRegIcon from "@mui/icons-material/HowToReg";
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { AuthContext } from "../Context/AuthContext";
const SignIn = () => {
    const {vId , setVId, setProgress} = useContext(AuthContext);

    const navigate = useNavigate();
   const handleSign = ()=>{
    setProgress(10)
    navigate("/signi")
    setProgress(100)
   }
  return (
      <>
      <Navbar/>
    <div style={{background:"rgba(200,200,196,255)"}}>

  
    <div style={{ display: "flex", flexDirection: "row", color: "black",background:"white", justifyContent:"space-evenly" ,height:"60vh", width:"75vw", margin:"auto" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          textAlign: "center",
        //   background:"white"
        
        }}
      >
        <h5> <AdminPanelSettingsIcon></AdminPanelSettingsIcon> Sign In</h5>
        <Button style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)"}} onClick={handleSign} variant="outlined">
          {" "}
          <LocalMoviesIcon sx={{ margin: "0 0.5rem" }}></LocalMoviesIcon> Sign In
          With IMDb
        </Button>
        <Button  style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)"}} variant="outlined">
          {" "}
          <i
            class="fa-brands fa-amazon"
            style={{ margin: "0 1rem", fontSize: "1.5rem" }}
          ></i>{" "}
          Sign In With Amazon
        </Button>
        <Button  style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)"}} variant="outlined">
          {" "}
          <FacebookIcon sx={{ margin: "0 1rem" }}></FacebookIcon> Sign In With
          Facebook
        </Button>
        <Button  style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)"}} variant="outlined">
          {" "}
          <GoogleIcon sx={{ margin: "0 1rem" }}> </GoogleIcon> Sign In With
          Google
        </Button>
        <Button  style={{textTransform:"capitalize", fontWeight:"bolder", color:"rgba(88,88,88,255)", border:"1px solid rgba(88,88,88,255)"}} variant="outlined">
          {" "}
          <AppleIcon sx={{ margin: "0 1rem" }}></AppleIcon> Sign In With Apple
        </Button>
        <h5>or</h5>
        <a style={{textDecoration:"none"}} href="/registeri"><Button sx={{background:"#e4b721", color:"rgba(88,88,88,255)", textTransform:"capitalize", fontWeight:"bolder"}} variant="contained">
          {" "}
          <HowToRegIcon sx={{ margin: "0 1rem" }}></HowToRegIcon> Create A New
          Account
        </Button></a>

        <p style={{ maxWidth: "20vw", fontSize:"0.8rem" }}>
          By signing in, you agree to IMDb's Conditions of Use and Privacy
          Policy
        </p>
      </div>

      <div>
        <div>
          <h3   >Benefits of your free IMDb account </h3>
          <h5> Personalized Recommendations </h5>
          <p> Discover shows you'll love. </p>
          <h5> Your Watchlist </h5>
          <p>
            {" "}
            Track everything you want to watch and receive e-mail when movies
            open in theaters.
          </p>
          <h5> Your Ratings </h5>
          <p> Rate and remember everything you've seen. </p>
          <h5> Contribute to IMDb</h5>
          <p>
            {" "}
            Add data that will be seen by millions of people and get cool
            badges.{" "}
          </p>
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default SignIn;
