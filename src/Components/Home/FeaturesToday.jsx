import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FeaturesToday() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div style={{ color: "black", background:"black",width:"100%",margin:"auto", }}>
     

  <Carousel responsive={responsive}>
    <div style={{height : "300px", margin:"auto", width : "95%" }} > 
    <img src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" height={"88%"} width={"100%"} /> 
    <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0"}} >New Movie of 2022</h6>
    </div>
    <div style={{height : "300px", margin:"auto", width : "95%"}} >
    <img src="https://m.media-amazon.com/images/M/MV5BZDMxMDc3ZmItMWRjMi00YWU4LTg3ZGQtNGE1MDc2YzliZWU0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" height={"88%"} width={"100%"} /> 
    <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0"}} >New Movie of 2022</h6>
    </div>
    <div style={{height : "300px", margin:"auto", width : "95%"}} >
    <img src="https://m.media-amazon.com/images/M/MV5BYzJjYzY5MDUtMDNmNi00NjY2LTljNzEtNTM5ZWNjNTUzMmNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg" alt="" height={"88%"} width={"100%"} /> 
    <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0"}} >New Movie of 2022</h6>
    </div>
    <div style={{height :"300px", margin:"auto", width : "95%" }} >
    <img src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" height={"88%"} width={"100%"} /> 
    <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0"}} >New Movie of 2022</h6>
    </div>
    <div style={{height :"300px", margin:"auto",width : "95%" }} >
    <img src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" height={"88%"} width={"100%"} /> 
    <h6 style={{ color : "white", position : "relative", top : "5px", padding : "0", margin : "0",justifyContent : "center"}} >New Movie of 2022</h6>
    </div>
   
  </Carousel>
    </div>
  );
}

export default FeaturesToday;
