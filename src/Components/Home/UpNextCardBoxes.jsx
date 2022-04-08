import React, { useContext } from 'react';
import styled from 'styled-components';
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import { AuthContext } from '../../Context/AuthContext';
import './UpNextCardBoxes.css'
const Boxes = styled.div`
 width:98%;
 background-color:#101010;
 height:180px;
  margin:1vh;
  display: flex;
  align-items: center;
  padding:1vh;
  &:hover{
    cursor:pointer;
  }
`;
const BoxPicture = styled.img`
  height:87%;
  width:100%
`;
function UpNextCardBoxes({img_url,title,time,discription}) {
  const {handleSearch} = useContext(AuthContext);
  return (
    <>

     <Boxes onClick={()=>handleSearch(title)}>
       <div style={{width:"20%",height:"100%",display: "flex",flexDirection:"row",alignItems: "center"}}>
            <BoxPicture src={img_url}/>
       </div>
       <div style={{width:"80%",height:"100%",paddingLeft:"1vh" }}>
         <div style={{display:'flex'}}>
           <PlayCircleOutlineIcon className="PlayButton" style={{fontSize:"40px"}}>{time}</PlayCircleOutlineIcon>
            <p style={{color:"gray",fontSize:"2vh",marginTop:"2vh",marginLeft:"5px"}}>{time}</p>
         </div>
            <p>{title}</p>
           <p>watch the trailer</p>
       </div>
     </Boxes>
    </>
  )
}

export default UpNextCardBoxes