import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
 display:flex;
 overflow:hidden;
 &>div{
     margin:3vh;
     font-weight:bold;
     padding:5px;
 }
 &>div:hover{
    background:#1a1a1a;
 }
 &>div:active{
    background:#1a1a1a;
    border-bottom:3px solid yellow;
 }
`;

function OptionsForWhatStreaming() {
  return (
    <Box>
        <div>PRIME VIDEO</div>
        <div>NETFLIX</div>
        <div>HOTSTAR</div>
        <div>MX PLAYER</div>
        <div>JIOCINEMA</div>
        <div>SONYLIV</div>
        <div>EROSNOW</div>
        <div>VOOT</div>
    </Box>
  )
}

export default OptionsForWhatStreaming