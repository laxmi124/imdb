
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import WatchTrailer from './Components/WatchTrailer/WatchTrailer';

function App() {
  return (
    <div className="App">
      <Home/>
      {/* <WatchTrailer /> */}
      <Footer/>
      
      <Routes>
        {/* <Route path='' element={}></Route> */} // format for routing
        <Route></Route>
        <Route></Route>
        <Route></Route>
      </Routes>
    </div>
  );
}

export default App;
