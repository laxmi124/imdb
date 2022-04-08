
import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import SimpleSlider from './Components/DummySlider';
import MovieWatch from './Components/MovieWatch';
import Navbar from './Components/Navbar';
import RegisterPage from './Components/RegisterPage';
import SignIn from './Components/SignIn';
import SignInPage from './Components/SignInPage';
import { AuthContext } from './Context/AuthContext';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import WatchTrailer from './Components/WatchTrailer/WatchTrailer';

function App() {
  const {vId , setVId, progress, setProgress} = useContext(AuthContext);

  return (
    <div className="App">
      <LoadingBar
        color='yellow'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar/>
      
     
      
      <Routes>
        <Route path='/' element={ <Home/>}></Route> 
        <Route path='/home' element={ <Home/>}></Route> 
        <Route path='/watch' element={<WatchTrailer/>}></Route> 
        <Route path='/signin' element={<SignIn/>}></Route> 
        <Route path='/signi' element={<SignInPage/>}></Route> 
        <Route path='/registeri' element={<RegisterPage/>}></Route> 
        
        {/* <Route></Route>
        <Route></Route>
        <Route></Route> */}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
