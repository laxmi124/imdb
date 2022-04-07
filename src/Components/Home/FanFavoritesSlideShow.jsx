import React, { Component } from "react";
import Slider from "react-slick";
// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";

export default class FanFavoritesSlideShow extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
    };
    return (
      <div
        style={{
          color: "black",
          background: "black",
          width: "100%",
          margin: "auto",
        }}
      >
        <h2> Multiple items </h2>
        <Slider {...settings}>
          <div
            style={{
              height: "300px",
              margin: "2vh",
              width: "90%",
              padding: "2vh",
              border: "3px solid yellow",
            }}
          >
            <img
              src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"
              alt=""
              height={"88%"}
              width={"100%"}
            />
            <h6
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "0",
                margin: "0",
              }}
            >
              New Movie of 2022
            </h6>
          </div>
          <div style={{ height: "300px", margin: "auto", width: "95%" }}>
            <img
              src="https://m.media-amazon.com/images/M/MV5BZDMxMDc3ZmItMWRjMi00YWU4LTg3ZGQtNGE1MDc2YzliZWU0XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX760_CR0,0,760,428_.jpg"
              alt=""
              height={"88%"}
              width={"100%"}
            />
            <h6
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "0",
                margin: "0",
              }}
            >
              New Movie of 2022
            </h6>
          </div>
          <div style={{ height: "300px", margin: "auto", width: "95%" }}>
            <img
              src="https://m.media-amazon.com/images/M/MV5BYzJjYzY5MDUtMDNmNi00NjY2LTljNzEtNTM5ZWNjNTUzMmNiXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_QL75_UX760_CR0,0,760,428_.jpg"
              alt=""
              height={"88%"}
              width={"100%"}
            />
            <h6
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "0",
                margin: "0",
              }}
            >
              New Movie of 2022
            </h6>
          </div>
          <div style={{ height: "300px", margin: "auto", width: "95%" }}>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"
              alt=""
              height={"88%"}
              width={"100%"}
            />
            <h6
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "0",
                margin: "0",
              }}
            >
              New Movie of 2022
            </h6>
          </div>
          <div style={{ height: "300px", margin: "auto", width: "95%" }}>
            <img
              src="https://m.media-amazon.com/images/M/MV5BNGZhMjBiMDMtYTIyMS00OTRlLThhZWItYThjNTRkZWEyNjIzXkEyXkFqcGdeQWpnYW1i._V1_QL40_QL75_UX1000_CR0,0,1000,563_.jpg"
              alt=""
              height={"88%"}
              width={"100%"}
            />
            <h6
              style={{
                color: "white",
                position: "relative",
                top: "5px",
                padding: "0",
                margin: "0",
                justifyContent: "center",
              }}
            >
              New Movie of 2022
            </h6>
          </div>
        </Slider>
      </div>
    );
  }
}
