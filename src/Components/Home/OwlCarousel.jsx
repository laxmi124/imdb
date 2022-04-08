import React, { useEffect } from "react";
import styled from "styled-components";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Wrapper = styled.div`
  width: 65%;
  height: 900px;
  margin: 20px;
  background: green;
  position: relative;
  @media (max-width: 720px) {
   
    justify-content:center;
    align-items:center;
    width: 500px;

     }
`;
const Slidercom = styled.div`
width: "65%",
height: "100%",
margin: "20px",
background: "#green",
position: "relative",
  @media (max-width: 720px) {
    width:100%,
    margin:0,
  
     }
`;


const TitleDiv = styled.div`
  width: 100%;
  background: transparate;
  diplay: flex;
  flex-direction: row;
  //  position:absolute;
  bottom: 1vh;
  border: 1px solid red;
`;

const TitlePicture = styled.img`
  width: 100%;
  height: 100%;
  flex: 1;
`;

function OwlCarousel() {
  // let arrOfImgSlider = [
  //   {title:"",url:""},
  //   {title:"",url:""},
  //   {title:"",url:""},
  //   {title:"",url:""},
  //   {title:"",url:""},
  //   {title:"",url:""},
  //   {title:"",url:""},
  //   {title:"",url:""},
  // ]

  const [data, setData] = React.useState([]);

  // /movie/top_rated?api_key=${API_KEY}&language=en-US
  // https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213
  const API_KEY = "cd1b752287267fcdd91d7693d2fb5336";
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=35`
    )
      .then((res) => res.json())
      .then((res) => setData(res));
  }, []);

  return (
    <Slidercom
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
      style={{
        width: "65%",
        height: " 100%",
        margin: "20px",
        background: "#green",
        position: "relative",
      }}
    >
      {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
      <div className="carousel-inner">
        {/* 
{
  data.map((item)=>{
    return (
        
    )
  })
} */}

        <div className="carousel-item active">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption" style={{ width: "100%" }}>
            {/* <div style={{border: "1px solid yellow", width:"20%", height:"200px", background:"yellow"}}>
                 <TitlePicture src="https://m.media-amazon.com/images/M/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" alt="" />
              </div> */}
            <div style={{ width: "100%", height: "90px" }}>
              <div style={{ display: "flex" }}>
                <PlayCircleOutlineIcon style={{ fontSize: "10vh" }} />
                <h3>Tom Cruise Returns in Sequel</h3>
              </div>
              <h6>Watch the New Trailer</h6>
            </div>
          </div>
        </div>

        {/* Star Trek: Strange New Worlds */}
        {/* Watch Trailer */}

        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/M/MV5BMDE0YTA2OTctOWIyMC00NjE5LTg5YjUtOThhYjhiY2Q5Njk1XkEyXkFqcGdeQXZ3ZXNsZXk@._CR647,146,1267,712_QL75_UY563_CR1,0,1000,563_.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <div style={{ width: "100%", height: "90px" }}>
              <div style={{ display: "flex" }}>
                <PlayCircleOutlineIcon style={{ fontSize: "10vh" }} />
                <h3>Star Trek: Strange New Worlds</h3>
              </div>
              <h6>Watch Trailer </h6>
            </div>
          </div>
        </div>
        {/* Andrew Garfield stars in "under the banner of heaven" */}
        {/* Watch Trailer Now  */}
        <div className="carousel-item">
          <img
            src="https://m.media-amazon.com/images/M/MV5BYWVhNTEyYTMtODg1OS00YTE2LWJlYTQtMDhiNWM4ZmQ4Yzg2XkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"
            class="d-block w-100"
            alt="..."
          />
          <div className="carousel-caption d-none d-md-block">
            <div style={{ width: "100%", height: "90px" }}>
              <div style={{ display: "flex" }}>
                <PlayCircleOutlineIcon style={{ fontSize: "10vh" }} />
                <h3> Andrew Garfield stars in "under the banner of heaven"</h3>
              </div>
              <h6>Watch Trailer Now </h6>
            </div>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span
          className="carousel-control-prev-icon"
          aria-hidden="true"
          style={{
            width: "30px",
            height: "70px",
            borderRadius: "1vh",
            border: "white 2px solid",
            padding: "4vh",
            fontWeight: "bold",
          }}
        ></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span
          className="carousel-control-next-icon"
          aria-hidden="true"
          style={{
            width: "30px",
            height: "70px",
            borderRadius: "1vh",
            border: "white 2px solid",
            padding: "4vh",
            fontWeight: "bold",
          }}
        ></span>
        <span className="visually-hidden">Next</span>
      </button>
    </Slidercom>
  );
}

export default OwlCarousel;
