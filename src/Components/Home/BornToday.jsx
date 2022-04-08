import React, { Component, useEffect, useState } from "react";
import Slider from "react-slick";
import MovieSliderCard from "./MovieSliderCard";
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(23),
    height: theme.spacing(23),
  },
}));

function BornToday (){
 
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
    const classes = useStyles();

    const [data,setData] = useState([]);

    const API_KEY = 'cd1b752287267fcdd91d7693d2fb5336';
    useEffect(()=>{
        fetch(`https://reqres.in/api/users?page=2`)
        .then((res)=>res.json())
        .then((res)=>setData(res.data))
    },[])


    return (
      <div>
       
        <Slider {...settings}>
           {
           
          // console.log(data)// poster_path ,,vote_average
            data.map((item)=>{
              return (
                // <MovieSliderCard key={item.id} name={item.name} poster ={item.poster_path} rate = {item.vote_average} /> 
                <div className={classes.root} style={{textAlign: 'center'}}>
                <Avatar alt="Remy Sharp" src={item.avatar} className={classes.large} />
                <p>{item.first_name}</p>
              </div>
              )
              
            })
           }
        </Slider>
      </div>
    );
  
}

export default BornToday;