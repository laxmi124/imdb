import React, { useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
// import FanFavoritesSlideShow from "./FanFavoritesSlideShow";
import FeaturesToday from "./FeaturesToday";
import OwlCarousel from "./OwlCarousel";
import Responsive from "./Responsive";
import UpNextCardBoxes from "./UpNextCardBoxes";
import { updateWatchList } from "../../Redux/Laxmi/action";
import MoreToWatch from "./MoreToWatch";
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import './Home.css'
import OptionsForWhatStreaming from "./OptionsForWhatStreaming";
import BornToday from "./BornToday";
import WatchList from "./WatchList";
import { addUser, islogin } from "../../Redux/Kanhaiya/action";
import { AuthContext } from "../../Context/AuthContext";


const Container = styled.div`
  width: 90%;
  margin: auto;
  justify-content: center;
  border: 1px solid black;
  color: white;
  @media (max-width: 720px) {
   width:100%
     }
`;

const WrapperOfFirstSlidingShow = styled.div`
  display: flex;
  // margin-top: 4px;
  background-color: black;

  @media (max-width: 720px) {
   flex-direction:column;
   justify-content:center;
   align-items:center;
    }
`;

const DataAcordingToSliding = styled.div`
  border: 2px solid black;
  background-color: black;
  width: 35%;
  padding: 10px;
  @media (max-width: 720px) {
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width: 80%;
     }
`;



function Home() {
  const {vId , setVId, setProgress,  setIsChecked,isChecked, handleSearch} = useContext(AuthContext);
  
  const isLogin = useSelector((state) => state.myReducer.isLogin);
  let navigate = useNavigate()
  let dispatch = useDispatch()
  useEffect(()=>{
    console.log(isChecked, "isCheked")
    let userlog = JSON.parse(localStorage.getItem('userdetails'));
    if(userlog || isChecked){
      // console.log("bolo ji")
      dispatch(addUser(userlog))
      dispatch(islogin(true));
      return;
    }
    if(!isLogin){
      

      navigate("/signi")
    }
  }, [])


  const API_KEY = 'cd1b752287267fcdd91d7693d2fb5336';



  // fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`)
  // .then((res)=>res.json())
  // .then((res)=>console.log(res,'this is from home page'))


  return (
    <div style={{background:"black"}}>
      <Container>
        <div style={{background:"black"}}>
          <div
          // onClick={()=>{handleSearch("amazonprime")}}
            className="bannerTop"
          >
            <img
              src="https://m.media-amazon.com/images/I/51rCt2U8jeL.jpg"
              alt=""
              style={{ width: "100%", height: "100%",  }}
            />
          </div>

          <WrapperOfFirstSlidingShow className="topSliderandrightDiv">
            {/* left side */}
            <OwlCarousel />

            {/* right side */}

            <DataAcordingToSliding>
            <h5 style={{color:"#f5c516",fontWeight:"bold" ,paddingBottom: "2vh"}}>Up next</h5>
              {/* in right side there are some small small boxes wich data changes acording to the slideshow */}
              <UpNextCardBoxes img_url='https://m.media-amazon.com/images/M/MV5BOWYzN2Q0NTYtODEzMi00YWMxLWE3MDMtZGUwNGM4NjMxMzQ4XkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_QL75_UX280_CR0,0,280,414_.jpg' title="Undone" time="2:59" discription='A woman discovers she has a new relationship with time, after surviving a car accident that almost killed her.'/>
              <UpNextCardBoxes img_url="https://m.media-amazon.com/images/M/MV5BMmIwZDMyYWUtNTU0ZS00ODJhLTg2ZmEtMTk5ZmYzODcxODYxXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_QL75_UX280_CR0,0,280,414_.jpg" title="Star Trek: Strange New Worlds" time="1:59" discription='A woman discovers she has a new relationship with time, after surviving a car accident that almost killed her.'/>
              <UpNextCardBoxes img_url='https://m.media-amazon.com/images/M/MV5BN2YzNjU4MTYtMzY5OS00ODg0LTkxMTUtNjg0YjRkYzI5ZWJjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY414_CR16,0,280,414_.jpg'title="What's It Like to Play a Cult Leader?" time="3:38" discription='A woman discovers she has a new relationship with time, after surviving a car accident that almost killed her.'/>
            </DataAcordingToSliding>
          </WrapperOfFirstSlidingShow>
        </div>

        
        <h1 style={{color:"#f5c516",paddingLeft:"4vh"}}>Featured today</h1>
        <FeaturesToday threeSliderApiKey={`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`}/>

        <br />
        <br />
        <br />
        <br />
        <h1 style={{color:"#f5c516"}}>What to watch</h1>
        <div style={{display:"flex"}}>
        <h3>Top Picks</h3> <NavigateNextIcon className="navigationIcon" style={{fontSize:"6vh"}}/>
        </div>
        <h6 style={{color:"gray"}}>TV shows and movies just for you</h6>
        <Responsive api_url={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`}/>
        <br />
        <br />
        <br />
        <div style={{display:"flex"}}>
        <h3>From your WatchList</h3> <NavigateNextIcon className="navigationIcon" style={{fontSize:"6vh"}}/>
        </div>
        <br />
        <br />
        <WatchList/>
        <br />
        <br />
        <br />

        <div style={{display:"flex"}}>
        <h3>Fan Favourite</h3> <NavigateNextIcon className="navigationIcon" style={{fontSize:"6vh"}}/>
        </div>
        <h6 style={{color:"gray"}}>This week's top TV and movies</h6>
        <Responsive  api_url={`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`}/>

        <br />
        <br />
        <MoreToWatch/>
        <br />
        <br />
        <br />
        <h1 style={{color:"#f5c516",paddingLeft:"4vh"}}>Exclusive videos</h1>
        <br />
        <br />
        <h2>IMDb Originals</h2>
        <h6 style={{color:"gray"}}>Celebrity interviews, trending entertainment stories, and expert analysis</h6>
        <FeaturesToday threeSliderApiKey={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749`}/>

        <br />
        <br />
        <br />
        <h2 style={{color:"#f5c516"}}>Explore what’s streaming</h2>
        <OptionsForWhatStreaming></OptionsForWhatStreaming>
        <Responsive  api_url={`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US`}/>
        <br />
        <br />
        <br />
        <h2 style={{color:"#f5c516"}}>Explore Movies & TV shows</h2>
        <Responsive  api_url={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=99`}/>
{/* 
  
          <br />
          <br />
          <br />
        <Responsive/> */}
        <br />
        <br />
        <br />
        <div style={{display:"flex"}}>
        <h3>Comming soo to theaters (US)</h3> <NavigateNextIcon className="navigationIcon" style={{fontSize:"6vh"}}/>
        </div>
        <h6 style={{color:"gray"}}>Trailers for upcoming releases</h6>
        <Responsive api_url={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749`}/>
        <br />
        <br />
        <br />
        <div style={{display:"flex"}}>
        <h3>Born Today</h3> <NavigateNextIcon className="navigationIcon" style={{fontSize:"6vh"}}/>
        </div>
        <h6 style={{color:"gray"}}>People Born today</h6>
        <BornToday/>
        {/* <FanFavourites/> */}
      </Container>
    </div>
  );
}

export default Home;
