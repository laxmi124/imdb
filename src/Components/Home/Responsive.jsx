import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import MovieSliderCard from "./MovieSliderCard";

function Responsive (){
 
    var settings = {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };


    const [data,setData] = useState([]);

    const API_KEY = 'cd1b752287267fcdd91d7693d2fb5336';
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
        .then((res)=>res.json())
        .then((res)=>setData(res.results))
    },[])


    return (
      <div>
       
        <Slider {...settings}>
           {
           
          // console.log(data)// poster_path ,,vote_average
            data.map((item)=>{
              return (
                <MovieSliderCard key={item.id} name={item.name} poster ={item.poster_path} rate = {item.vote_average} /> 
              )
              
            })
           }
        </Slider>
      </div>
    );
  
}

export default Responsive;