import React from 'react';
import styled from 'styled-components';
// import AccessAlarmIcon from '@material-ui/icons/AccessAlarm';
// import ThreeDRotation from '@material-ui/icons/ThreeDRotation';
import LaunchIcon from '@material-ui/icons/Launch';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import YouTubeIcon from '@material-ui/icons/YouTube';

const Container = styled.div`
  display:grid;
  grid-template-columns : auto auto auto auto auto auto;
  justify-content : center;
  align-items:center;
  background-color:black;
  color: white;




  &>h6{
      padding: 10px;
  }
  &>h6:hover{
      text-decoration: underline;
      cursor: pointer;
  }
`;

const ContainerForIcons=styled.div`
   height:46px;
   display:flex;
   justify-content: center;

   &>div{
       margin:2vh;
       height:100%;
       width : 30px;
       cursor: pointer;
   }
`;

function Footer() {
  return (
    <div style={{marginTop:"5vh", backgroundColor:"black",color: "white",justifyContent:"center"}}>
        <ContainerForIcons>
              <div> <FacebookIcon></FacebookIcon> </div>
              <div> <InstagramIcon></InstagramIcon> </div>
              <div> <TwitterIcon/></div>
              <div> <YouTubeIcon/></div>
           
        </ContainerForIcons>


       <Container>
          <h6>Get the IMDb App <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon> </h6>
          <h6>Help <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon> </h6>
          <h6>Site Index <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon> </h6>
          <h6>IMDbPro <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon> </h6>
          <h6>Box Office Mojo <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon> </h6>
          <h6>IMDb Developer <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon> </h6>
        </Container> 
       <Container>
          <h6>Press Room</h6>
          <h6>Advertising <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon></h6>
          <h6>Jobs <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon></h6>
          <h6>Conditions of Use</h6>
          <h6>Privacy Policy</h6>
          <h6>Interest-Based Ads <LaunchIcon style={{width:"15px",margin:"0px",padding:"0px"}}></LaunchIcon></h6>
        </Container> 

        <div style={{ height:"50px", width:"100%", display:"flex" ,}}>
            <div style={{width:"10%",margin:"auto", height:"100%" ,justifyContent:"center"}}>
               <img src="https://i.pinimg.com/originals/47/b7/bd/47b7bdac4285ee24654ca7d68cf06351.png" alt="" style={{height:"100%",width:"100%"}}/>
            </div>
        </div>

                <div style={{textAlign: "center",color:"#cececece",fontSize:"13px",padding:"3vh"}}>
                    <p>© 1990-2022 by IMDb.com, Inc.</p>
                </div>

    </div>
  )
}

export default Footer