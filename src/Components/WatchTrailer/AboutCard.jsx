import React,{useState} from 'react';
import styled from 'styled-components';
import AddBoxIcon from '@material-ui/icons/AddBox';

const Card = styled.div`
 height:150px;
 width:100%;
//  border:1px solid white;
 display:flex;
 
`;
const Left = styled.div`
width:30%;
 height:100%;
//  border:1px solid white;
padding:1vh;
 
`;
const Right = styled.div`
width:70%;
 height:100%;
//  border:1px solid white;
 padding:1vh;
`;

const Button = styled.button`
background-color:#252525;
border:0px;
color:#4a7ab8;
padding:1vh;
border-radius:5px;
font-weight:bold;
`;

function AboutCard() {

    const [heading,setHeading] = useState('');
    const [type,setType] = useState('');

    useState(()=>{
        setHeading('The Kashmir Files');
        setType('Drama,History,Thriller')

    },[])

  return (
    <div>
        <Card>
            <Left style={{position:"relative"}}>
                <img src="https://m.media-amazon.com/images/M/MV5BZjI0YmMzNDctZGFkZi00NmIyLTk5NWEtMTU1MGRmMDQwNWU2XkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_QL75_UY266_CR3,0,180,266_.jpg" alt="" style={{height:"100%", width:"100%"}}/>
                <AddBoxIcon style={{position:"absolute",top:'0',left:"0" ,fontSize:"4vh"}}></AddBoxIcon>
            </Left>
            <Right>
                <h6>{heading}</h6>
                <p style={{color:"gray" ,fontSize:"15px",fontWeight:"500"}}>{type}</p>
                <Button>Watch Options</Button>
            </Right>
        </Card>
    </div>
  )
}

export default AboutCard