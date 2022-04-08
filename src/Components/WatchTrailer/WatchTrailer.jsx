import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthContext } from '../../Context/AuthContext';
import Footer from '../Footer/Footer';
import MovieWatch from '../MovieWatch';
import AboutCard from './AboutCard';
import RelatedVideoSlider from './RelatedVideoSlider';

const Container = styled.div`
//  display:grid;
//  gird-template-column:auto auto;
//  gird-template-row:auto; 
 display:flex;
 width:100%;
 height:500px;
 border:1px solid black;
 background:yellow;
`;

function WatchTrailer() {
  const API_KEY = 'cd1b752287267fcdd91d7693d2fb5336';

 


  const {vId , WatchTrailerData, setWatchTrailerData, handleSearch,base_url, popup, setPopup} = useContext(AuthContext);

  console.log(WatchTrailerData,'this from watchTrailer')
  return (
    <>
    <div id='' style={{width:"86%",margin:"auto",color:"white", position:"relative"}}>
        <Container>
          {/* left */}
            <div style={{width:"70%",height:"100%",background:"black", paddingTop:"2rem"}}>
            <MovieWatch/>

            </div>

              
            
            {/* right */}
            <div style={{width:"30%",height:"100%",backgroundColor:"#121212",padding:"2vh"}}>
              <AboutCard/>
            </div>
        </Container>
        <h3 style={{ color: "white", paddingLeft: "4vh", marginBottom: "3vh" }}>
        Featured Videos
      </h3>
        <RelatedVideoSlider api_url={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749`} base_url={base_url}/>

        <h3 style={{ color: "white", paddingLeft: "4vh", marginBottom: "3vh",marginTop:"3vh" }}>
        Related Videos
      </h3>
        <RelatedVideoSlider  api_url={`https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_genres=10749`} base_url={base_url}/>
    </div>
    </>
  )
}

export default WatchTrailer