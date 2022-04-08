import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
color:white;
height:150px;
width:100%;
`;
const Button = styled.button`
width:40%;
border:2px solid white;
color:white;
background:black;
font-weight:bold;
padding:4px;
border-radius:5px;
&:hover{
    background:#121212;
}
`;
function MoreToWatch() {
  return (
    <Wrapper>
        <h1>More to Watch</h1>
        <p>IMDb helps you select the perfect next show or movie to watch.</p>
        <Button>Watch Guide</Button> &nbsp;&nbsp;
        <Button>Most Popular</Button>
    </Wrapper>
  )
}

export default MoreToWatch