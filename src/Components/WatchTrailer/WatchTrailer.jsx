import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
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
  
  const isLogin = useSelector((state) => state.myReducer.isLogin);
  let navigate = useNavigate()
  useEffect(()=>{

    if(!isLogin){
      navigate("/signi")
    }
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
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
        <RelatedVideoSlider/>

        <h3 style={{ color: "white", paddingLeft: "4vh", marginBottom: "3vh",marginTop:"3vh" }}>
        Related Videos
      </h3>
        <RelatedVideoSlider/>
    </div>
    </>
  )
}

export default WatchTrailer