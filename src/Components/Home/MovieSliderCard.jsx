import React, { useContext } from "react";
import {useDispatch,useSelector} from 'react-redux';
import styled from "styled-components";
import StarIcon from "@material-ui/icons/Star";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import AddIcon from '@material-ui/icons/Add';
import './MovieSliderCard.css';
import DoneIcon from '@material-ui/icons/Done';
import { updateWatchList } from "../../Redux/Laxmi/action";
import { AuthContext } from "../../Context/AuthContext";


const Box = styled.div`
  width: 180px;
  height: 450px;
  // border: 1px solid yellow;
`;

const PictureDiv = styled.div`
  height: 60%;
  width: 100%;
  position:relative;
`;
const TitleDiv = styled.div`
  height: 40%;
  width: 100%;
  background: #1a1a1a;
  text-align: center;
`;
const ImgTag = styled.img`
  width: 100%;
  height: 100%;
`;


const Rate = styled.div`
  width: 80%;
  height: 30px;
  display: flex;
  // border:1px solid yellow;
  padding: 7px;
  // text-align:center;
  // justify-content: space-around;
`;

const Title = styled.div`
  height: 59px;
  padding-top: 1vh;
  padding-bottom: 1vh;
  // border:1px solid white;
  & > p:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;

const WatchNowButton = styled.button`
  width: 90%;
  height: 40px;
  margin: auto;
  border: none;
  background-color: #2c2c2c;
  color: #5594e5;
  padding: 5px;
`;

const TrailerDiv = styled.div`
  height: 50px;
  //  border:1px solid yellow;
  diplay: flex;
  justify-content: space-between;
`;

const TrailerButton = styled.button`
  background: #1a1a1a;
  color: white;
  font-weight: bold;
  border: 0px;
  padding: 4px;
  margin-top: 5px;
  border-radius:5px;

  &:hover {
    background: #2c2c2c;
  }
`;


function MovieSliderCard({ name, poster, rate }) {
  // const store = useSelector((store)=>store.watchList.watchList);
  const {vId , WatchTrailerData, setWatchTrailerData, handleSearch,base_url, popup, setPopup} = useContext(AuthContext);

  const dispatch = useDispatch();
  const dataToStore = useSelector((store)=>(store.watchList));

console.log(WatchTrailerData)

  return (
    <Box onClick={()=>{handleSearch(name); setWatchTrailerData({name:name,poster:poster})}}>
      <PictureDiv>
        <ImgTag src={`${base_url}${poster}`} />
        <div className="AddToWatchList">
        <AddIcon/>
        </div>
      </PictureDiv>

      {/* title div */}
      <TitleDiv>

        <Rate>
          
          <p> <StarIcon style={{ color: "#f5c516",fontSize:"17px" }} /> {rate}</p>
          &nbsp;&nbsp;  &nbsp;&nbsp;
          <StarBorderOutlinedIcon style={{ color: "#5594e5" ,fontSize:"17px"}} />
        </Rate>

        <Title>
          <p>{name}</p>
        </Title>

        <WatchNowButton>Watch now</WatchNowButton>

        <TrailerDiv>
          <TrailerButton>
            <PlayArrowIcon /> Trailer
          </TrailerButton>
          &nbsp;&nbsp;
          <InfoOutlinedIcon />
        </TrailerDiv>

      </TitleDiv>
    </Box>
  );
}

export default MovieSliderCard;
