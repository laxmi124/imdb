
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
function App() {
  const {vId , setVId, progress, setProgress} = useContext(AuthContext);

  return (
    <div className="App">
      <LoadingBar
        color='yellow'
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      {/* <SimpleSlider/> */}
      <Routes>
        <Route path='/' element={<Navbar/>}></Route> 
        <Route path='/watch' element={<MovieWatch/>}></Route> 
        <Route path='/signin' element={<SignIn/>}></Route> 
        <Route path='/signi/:id' element={<SignInPage/>}></Route> 
        <Route path='/registeri' element={<RegisterPage/>}></Route> 
        
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
