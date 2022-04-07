import React from 'react';
import {useSelector,useDispatch} from 'react-redux';



function WatchList() {

   const state = useSelector((store)=>(store.ReducerL.watchList))
   console.log(state,'this is from watchList')
  return (
    <div>
     
    </div>
  )
}

export default WatchList