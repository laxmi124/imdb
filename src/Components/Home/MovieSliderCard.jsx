import React, { useEffect } from 'react';
import styled from 'styled-components';

const Box = styled.div`
width:180px;
height:450px;
// border: 1px solid yellow;
`;

const PictureDiv = styled.div`
height:60%;
width:100%;
`;
const TitleDiv = styled.div`
height:40%;
width:100%;
background:#1a1a1a;
text-align:center;
`;
const ImgTag = styled.img`
width:100%;
height:100%;
`
function MovieSliderCard() {

    const API_KEY = 'cd1b752287267fcdd91d7693d2fb5336'
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`)
        .then((res)=>res.json())
        .then((res)=>console.log(res))
    },[])

  return (
    <Box>
        <PictureDiv>
            <ImgTag src="https://m.media-amazon.com/images/M/MV5BMDNkOTE4NDQtMTNmYi00MWE0LWE4ZTktYTc0NzhhNWIzNzJiXkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_QL75_UX280_CR0,3,280,414_.jpg"/>
        </PictureDiv>
        <TitleDiv>
            <h4>the movie</h4>
            <button style={{width:"80%",margin:"auto",border:"none",backgroundColor:"#2c2c2c",color:"white",padding:"5px"}}>Watch now</button>
            <br />
            <br />
            <button style={{background:"#1a1a1a",color:"white",fontWeight:"bold",border:"none"}}>Trailer</button>
        </TitleDiv>
    </Box>
  )
}

export default MovieSliderCard