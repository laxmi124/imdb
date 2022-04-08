import React, { Component, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Slider from "react-slick";
import MovieSliderCard from "./MovieSliderCard";

function Responsive ({api_url}){

  const dispatch = useDispatch();


 
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

    useEffect(()=>{
        fetch(api_url)
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
                <MovieSliderCard key={item.id} dispatch = {dispatch} item={item} name={!item.title?item.name:item.title} poster ={item.poster_path} rate = {item.vote_average} /> 
              )
              
            })
           }
        </Slider>
      </div>
    );
  
}

export default Responsive;