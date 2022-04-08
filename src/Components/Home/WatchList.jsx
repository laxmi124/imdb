import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import EmptyWatchList from "./EmptyWatchList";
import AddIcon from "@material-ui/icons/Add";
import { AuthContext } from "../../Context/AuthContext";
import StarIcon from "@material-ui/icons/Star";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";
import DoneIcon from '@material-ui/icons/Done';
import './WatchList.css'



const Wrapper = styled.div`
  height: 500px;
  width: 100%;
  display: flex;
`;
const Box = styled.div`
  width: 180px;
  height: 450px;
  // border: 1px solid yellow;
  margin:4vh
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

function WatchList() {
  const watchLater = useSelector((store) => store.watchList.watchList);
  //  console.log(watchLater,'this is from watchList')

  const {
    vId,
    WatchTrailerData,
    setWatchTrailerData,
    handleSearch,
    base_url,
    popup,
    setPopup,
  } = useContext(AuthContext);

  return (
    watchLater.length === 0 ? <EmptyWatchList/> :
    <Wrapper>
      {watchLater.map((item) => {
        return (
          <Box>
            <PictureDiv>
              <ImgTag src={`${base_url}${item.poster_path}`} />
              <div className="doneIcon">
                <DoneIcon/>
              </div>
            </PictureDiv>

            <TitleDiv onClick={() => handleSearch(item.name)}>
              <Rate>
                <p>
                  {" "}
                  <StarIcon
                    style={{ color: "#f5c516", fontSize: "17px" }}
                  />{" "}
                  {item.rate}
                </p>
                &nbsp;&nbsp; &nbsp;&nbsp;
                <StarBorderOutlinedIcon
                  style={{ color: "#5594e5", fontSize: "17px" }}
                />
              </Rate>

              <Title>
                <p>{item.name}</p>
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
      })}
    </Wrapper>
  );
}

export default WatchList;
