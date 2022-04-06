import styled from "styled-components";
import React from "react";
import Logo from "./Logo";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
const RegisterPage = () => {
  return (
    <div
      style={{ backgroundColor: "white", height: "100vh", textAlign: "center", marginTop:"12px" }}
    >
      <div>
        <Logo></Logo>

        <div
          style={{
            marginTop:"24px",
            display: "flex",
            flexDirection: "column",
            width: "20rem",
            margin: "auto",
            textAlign: "left",
            border: "1px solid grey",
            padding: "12px",
            borderRadius: "6px",
          }}
          className="register-input"
        >
          <h4>Create account</h4>
          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop:"12px" }}
            htmlFor="name"
          >
            Your name
          </label>
          <input style={{ fontSize: "12px" }} type="text" name="name" />
          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop:"12px" }}
            htmlFor="email"
          >
            Email
          </label>
          <input style={{ fontSize: "12px" }} type="email" name="email" />

          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop:"12px" }}
            htmlFor="password"
          >
            Password
          </label>
          <input
            style={{ fontSize: "12px" }}
            type="password"
            placeholder="at least 8 characters"
          />
          <p style={{ fontSize: "12px" }}>
            {" "}
            <span
              style={{
                color: "#4f99bd",
                fontSize: "16px",
                fontStyle: "italic",
                fontWeight: "500",
              }}
            >
              i
            </span>{" "}
            Passwords must be at least 8 characters.
          </p>
          <label
            style={{ fontSize: "12px", fontWeight: "bold", marginTop:"12px" }}
            htmlFor="password"
          >
            Re-enter password
          </label>
          <input
            style={{ fontSize: "12px" }}
            type="password"
            placeholder="********"
          />
          <button
            style={{
              // background: "#f2c75e",
              fontSize: "12px",
              padding: "4px",
              outline: "none",
              border: "none",
              borderRadius: "3px",
              margin: "6px 0px",
              fontWeight: "500",
              background: "linear-gradient(to top, #f1c558 90%, white)",
            }}
          >
            Create your IMDb account
          </button>
        </div>
        <p style={{fontSize:"12px", fontWeight:"500"}}>Already have an account? <span style={{color:"#56aee2"}}> <a href="/signi">Sign-In <ArrowRightIcon></ArrowRightIcon>  </a> </span> </p>
      </div>
    </div>
  );
};

export default RegisterPage;
