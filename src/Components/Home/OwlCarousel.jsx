import React from "react";
import styled from 'styled-components';

const Wrapper = styled.div`
width: 65%;
 height: 100%;
  margin:20px;
   background:green;
   position:relative;
`;

const TitleDiv = styled.div`
   width:100%;
   background:transparate;
   diplay:flex;
   flex-direction:row;
  //  position:absolute;
   bottom:1vh;
   border:1px solid red;
`;

const TitlePicture = styled.img`
  width:100%;
  height:100%;
  flex:1

`;

function OwlCarousel() {
  return (
    <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel" style={{width: "65%", height:" 100%" ,margin:"20px", background:"#green", position:"relative"}} >
  {/* <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div> */}
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="https://m.media-amazon.com/images/M/MV5BYWI1ZDQ4ZDItNjk0Ny00ZDcyLWI5MjctMmFkZjdkODI5ZGRlXkEyXkFqcGdeQWRvb2xpbmhk._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption" style={{display:"flex", width:"100%"}}>
          {/* <TitleDiv> */}
              <div style={{border: "1px solid yellow", width:"20%", height:"100px", background:"yellow"}}>
                 <TitlePicture src="https://m.media-amazon.com/images/M/MV5BYjVlMjZhYzYtOGQxNC00OTQxLTk2NzEtMWFmMmNhODA4YjYzXkEyXkFqcGdeQXVyNjQ3MDgwNjY@._V1_QL75_UX280_CR0,3,280,414_.jpg" alt="" />
              </div>
              <div style={{border: "1px solid yellow", width:"60%", height:"100px"}}>
                <h5>First slide label</h5>
                <p>Some representative placeholder content for the first slide.</p>
              </div>
          {/* </TitleDiv> */}

      </div>
    </div>
  
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/M/MV5BMDE0YTA2OTctOWIyMC00NjE5LTg5YjUtOThhYjhiY2Q5Njk1XkEyXkFqcGdeQXZ3ZXNsZXk@._CR647,146,1267,712_QL75_UY563_CR1,0,1000,563_.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="https://m.media-amazon.com/images/M/MV5BNTNlNWY0YzUtMTQ1My00NGJjLWExZTAtZTM3YWI3OWMyZmE3XkEyXkFqcGdeQWFsZWxvZw@@._V1_QL75_UX1000_CR0,0,1000,563_.jpg" class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true" style={{ width:"30px", height:"70px",borderRadius:"1vh",border:"white 2px solid",padding:"4vh",fontWeight:"bold"}}></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true" style={{ width:"30px", height:"70px",borderRadius:"1vh",border:"white 2px solid",padding:"4vh",fontWeight:"bold"}}></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
  );
}

export default OwlCarousel;
