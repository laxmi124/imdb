import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import styled from 'styled-components';
import EmptyWatchList from './EmptyWatchList';

const Wrapper = styled.div`
height:300px;
width:100%;

`;


function WatchList() {

   const watchLater = useSelector((store)=>(store.watchList.watchList))
  //  console.log(watchLater,'this is from watchList')

  return (
    <Wrapper>
      {
        
        watchLater.map((item)=>{
          return (
            <h1>{item.name}</h1>
          )
        })
      }
       
    </Wrapper>
  )
}

export default WatchList