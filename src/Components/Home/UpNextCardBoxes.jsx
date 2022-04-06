import React from 'react';
import styled from 'styled-components';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";

const Boxes = styled.div`
 width:98%;
 background-color:#101010;
 height:180px;
  margin:1vh;
  display: flex;
  align-items: center;
  padding:1vh;
`;
const BoxPicture = styled.img`
  height:87%;
  width:100%
`;
function UpNextCardBoxes() {
  return (
    <>
     <Boxes>
       <div style={{width:"20%",height:"100%",display: "flex",flexDirection:"row",alignItems: "center"}}>
            <BoxPicture src='https://terrigen-cdn-dev.marvel.com/content/prod/1x/theavengers_lob_crd_03.jpg'/>
       </div>
       <div style={{width:"80%",height:"100%",paddingLeft:"1vh" }}>
           <PlayCircleOutlineIcon style={{fontSize:"40px"}}></PlayCircleOutlineIcon>
           <p>Why Jared Leto Fought Against Prosthetics for 'Morbius</p>
           <p>watch the trailer</p>
       </div>
     </Boxes>
    </>
  )
}

export default UpNextCardBoxes