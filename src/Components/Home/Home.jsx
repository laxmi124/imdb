import React from "react";
import styled from "styled-components";
// import FanFavoritesSlideShow from "./FanFavoritesSlideShow";
import FeaturesToday from "./FeaturesToday";
import OwlCarousel from "./OwlCarousel";
import Responsive from "./Responsive";
import UpNextCardBoxes from "./UpNextCardBoxes";

const Container = styled.div`
  width: 90%;
  margin: auto;
  justify-content: center;
  border: 1px solid black;
  color: white;
`;

const WrapperOfFirstSlidingShow = styled.div`
  display: flex;
  // margin-top: 4px;
  background-color: black;
`;

const DataAcordingToSliding = styled.div`
  border: 2px solid black;
  background-color: black;
  width: 35%;
  padding: 10px;
`;
function Home() {
  return (
    <div style={{background:"black"}}>
      <Container>
        <div style={{background:"black"}}>
          <div
            style={{
              width: "970px",
              margin: "auto",
              border: "1px solid black",
              height: "250px",
            }}
          >
            <img
              src="https://m.media-amazon.com/images/I/51rCt2U8jeL.jpg"
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
          <WrapperOfFirstSlidingShow>
            {/* left side */}
            <OwlCarousel />

            {/* right side */}

            <DataAcordingToSliding>
              {/* in right side there are some small small boxes wich data changes acording to the slideshow */}
              <UpNextCardBoxes />
              <UpNextCardBoxes />
              <UpNextCardBoxes />
            </DataAcordingToSliding>
          </WrapperOfFirstSlidingShow>
        </div>
        <h1 style={{color:"#f5c516",paddingLeft:"4vh"}}>Featured today</h1>
        <FeaturesToday />
        {/* <FanFavoritesSlideShow /> */}
        <br />
        <br />
        <br />
        <h2 style={{color:"#f5c516"}}>Explore what’s streaming</h2>
        <Responsive/>
        <br />
        <br />
        <br />
        <h1 style={{color:"#f5c516",paddingLeft:"4vh"}}>Exclusive videos</h1>
        <FeaturesToday />
        <br />
        <br />
        <br />
        <br />
        <h2 style={{color:"#f5c516"}}>what to watch</h2>
        <Responsive/>
        <br />
        <br />
        <br />
        <h2 style={{color:"#f5c516"}}>Explore Movies & TV shows</h2>
        <Responsive/>
        {/* <FanFavourites/> */}
      </Container>
    </div>
  );
}

export default Home;
