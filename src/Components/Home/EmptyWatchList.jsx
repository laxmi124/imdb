import React from "react";
import AddIcon from "@material-ui/icons/Add";
import styled from 'styled-components';


const WatchNowButton = styled.button`
  width: fit-content;
  height: 40px;
  margin: auto;
  border: none;
  background-color: #1f1f1f;
  color: #5594e5;
  padding: 10px;
  font-weight:bold;
  border-radius:5px;
  &:hover{
    background-color: #2c2c2c;

  }
`;

function EmptyWatchList() {
  return (
    <div>
          <div style={{width:"100%",margin:"auto",textAlign:"center"}}>
             <div style={{height:"35px",width:"25px",backgroundColor:"#1f1f1f",margin:"auto"}}>
                <AddIcon />
              </div>
              <br />
                <h5>Your watchlist is empty</h5>
                <h6>Save shows and movies to keep track of what you want to watch.</h6>
                <br />
                <WatchNowButton>Browse popular movies</WatchNowButton>
      </div>
    </div>
  );
}

export default EmptyWatchList;
