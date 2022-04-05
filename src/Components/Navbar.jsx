import React, { useContext, useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import YoutubeSearchedForIcon from '@mui/icons-material/YoutubeSearchedFor';
import { AppBar, Button, Dialog, IconButton, Slide, toggleButtonClasses, Toolbar, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import { AuthContext } from '../Context/AuthContext';
import { Navigate, useNavigate } from 'react-router-dom';
import Skeleton from '@mui/material/Skeleton';
import Logo from './Logo';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });



const Navbar = () => {
    const [open, setOpen] = React.useState(false);
    const [text , setText] = useState("");
    const [arr , setArr] = useState([]);
    const {vId , setVId, setProgress} = useContext(AuthContext);
    const [loading, setLoading] = useState(false)
    const naviagte = useNavigate()
    let id;
    const handleChange = (e)=>{
      setLoading(true)
        setText(e.target.value);
        let value = text;
        
        if(id !=='undefined'){
         
          clearTimeout(id)}
        id = setTimeout( async () => {
            console.log(1);
           await getData(value)
        }, 2000);
    }

    const handleSearch = (title)=>{
      setProgress(30)
      getYT(title)
    }

    const  getYT = async (title)=>{
      setProgress(50)
      let res1 = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=${title}&key=AIzaSyCdkSUDMRM0nqFxIZpIujLEWkrtX7W8H6c`);
      let res2 = await res1.json();
      console.log(res2.items[0]);
      const {id:{videoId}} = res2.items[0];
      console.log(videoId);
      setVId(videoId)
      setProgress(100)
      naviagte("/watch")
    }

    const getData = async(data)=>{
        let res1 = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=cc5085fde0592cd1488b3e136fcc481d&query=${data}`);
        let res2 = await res1.json();
        

        let searchedMovie = (res2.results);
        if(searchedMovie.length<=0){
          setLoading(true)
        }
        let arr1 = []
        for(let i=0; i<searchedMovie.length; i++){

            if(searchedMovie[i].poster_path){
              //  console.log(searchedMovie[i].poster_path)
                let poster_path1 = `https://image.tmdb.org/t/p/original${searchedMovie[i].poster_path}` 
                searchedMovie[i].poster_path = poster_path1;
                arr1.push(searchedMovie[i])
            }
        }
        setLoading(false)
        setArr([...arr1 ])
    }

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlelog = ()=>{
    console.log("hello")
    naviagte("/signin")
  }
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(()=>{
// console.log(arr);
  }, [arr])

  
  return (
      <div style={{background:"#121212"}}> 
    
    <div id='navbar' style={{maxWidth:"90vw" , display:"flex" , justifyContent:"space-evenly", margin:"auto"}} >
    <nav style={{background:"#121212", color:"white"}} className="navbar navbar-expand-lg">
  <div className="container-fluid">
      
    <a className="navbar-brand" href="/">
        <Logo/>
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li id='menucard' className="nav-item">
          <a style={{color:"white"}} className="nav-link active" aria-current="page" href="#" onClick={handleClickOpen}> <MenuIcon></MenuIcon> Menu </a>
          <Dialog
     
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      sx={{background:"rgb(31,31,31)"}}
      >
        <AppBar   sx={{ position: 'relative', background:"rgb(31,31,31)" }}>
          <Toolbar    className='container' style={{backgroundColor:"rgb(31,31,31)"}} >
            <IconButton
              edge="start"
             
            //   color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
            </IconButton>
            
              <CloseIcon onClick={handleClose} style={{background:"yellow" , color:"black", borderRadius:"50%", height:"3rem" , width:"3rem", position:"absolute", right:"0"}} />
            <a className="navbar-brand" href="#">
        <svg id="home_img" className="ipc-logo" xmlns="http://www.w3.org/2000/svg" width="64" height="32" viewBox="0 0 64 32" version="1.1"><g fill="#F5C518"><rect x="0" y="0" width="100%" height="100%" rx="4"></rect></g><g transform="translate(8.000000, 7.000000)" fill="#000000" fillRule="nonzero"><polygon points="0 18 5 18 5 0 0 0"></polygon><path d="M15.6725178,0 L14.5534833,8.40846934 L13.8582008,3.83502426 C13.65661,2.37009263 13.4632474,1.09175121 13.278113,0 L7,0 L7,18 L11.2416347,18 L11.2580911,6.11380679 L13.0436094,18 L16.0633571,18 L17.7583653,5.8517865 L17.7707076,18 L22,18 L22,0 L15.6725178,0 Z"></path><path d="M24,18 L24,0 L31.8045586,0 C33.5693522,0 35,1.41994415 35,3.17660424 L35,14.8233958 C35,16.5777858 33.5716617,18 31.8045586,18 L24,18 Z M29.8322479,3.2395236 C29.6339219,3.13233348 29.2545158,3.08072342 28.7026524,3.08072342 L28.7026524,14.8914865 C29.4312846,14.8914865 29.8796736,14.7604764 30.0478195,14.4865461 C30.2159654,14.2165858 30.3021941,13.486105 30.3021941,12.2871637 L30.3021941,5.3078959 C30.3021941,4.49404499 30.272014,3.97397442 30.2159654,3.74371416 C30.1599168,3.5134539 30.0348852,3.34671372 29.8322479,3.2395236 Z"></path><path d="M44.4299079,4.50685823 L44.749518,4.50685823 C46.5447098,4.50685823 48,5.91267586 48,7.64486762 L48,14.8619906 C48,16.5950653 46.5451816,18 44.749518,18 L44.4299079,18 C43.3314617,18 42.3602746,17.4736618 41.7718697,16.6682739 L41.4838962,17.7687785 L37,17.7687785 L37,0 L41.7843263,0 L41.7843263,5.78053556 C42.4024982,5.01015739 43.3551514,4.50685823 44.4299079,4.50685823 Z M43.4055679,13.2842155 L43.4055679,9.01907814 C43.4055679,8.31433946 43.3603268,7.85185468 43.2660746,7.63896485 C43.1718224,7.42607505 42.7955881,7.2893916 42.5316822,7.2893916 C42.267776,7.2893916 41.8607934,7.40047379 41.7816216,7.58767002 L41.7816216,9.01907814 L41.7816216,13.4207851 L41.7816216,14.8074788 C41.8721037,15.0130276 42.2602358,15.1274059 42.5316822,15.1274059 C42.8031285,15.1274059 43.1982131,15.0166981 43.281155,14.8074788 C43.3640968,14.5982595 43.4055679,14.0880581 43.4055679,13.2842155 Z"></path></g></svg>
    </a>
          </Toolbar>
        </AppBar>
        <div style={{height:"100vh" , backgroundColor:"#121212" , color:"white" }}>

                <div style={{display:"flex", justifyContent:"space-evenly", width:"100%"}}>

            <div>
                <h3> <LocalMoviesIcon sx={{color:"yellow"}}></LocalMoviesIcon> Movies </h3>
                <div className="all-menu-links">
                    <div>Release Calender</div>
                    <div>DVD & Blu-ray Releases</div>
                    <div>Top 250 Movies</div>
                    <div>Most Popular Videos</div>
                    <div>Browse Movies by Genre</div>
                    <div>Top Box Office</div>
                    <div>Showtimes & Tickets</div>
                    <div>In Theaters</div>
                    <div>Coming Soon</div>
                    <div>Movies News</div>
                    <div>India Movie Spotlight</div>
                </div>
            </div>
            <div><div>
            <h3> <LocalMoviesIcon sx={{color:"yellow"}}></LocalMoviesIcon> TV Shows </h3>
                <div  className='all-menu-links'>
                    <div>What's on TV Streaming</div>
                    <div>Top 250 TV Shows</div>
                    <div>Most Popular TV Shows</div>
                    <div>Browse TV Shows by Genre</div>
                    <div>TV News</div>
                    <div>India TV Spotlight</div>
                    
                </div>
                </div>
                <div>
                <h3> <LocalMoviesIcon sx={{color:"yellow"}}></LocalMoviesIcon> Watch </h3>
                <div className='all-menu-links'>
                    <div>What to Watch</div>
                    <div>Latest Trailers</div>
                    <div>IMDb Originals</div>
                    <div>IMDb Picks</div>
                    <div>IMDb Podcasts</div>
                    
                </div>

                </div>
            </div>
            <div>
            <h3> <LocalMoviesIcon sx={{color:"yellow"}}></LocalMoviesIcon> Movies </h3>
                <div className="all-menu-links">
                    <div>Release Calender</div>
                    <div>DVD & Blu-ray Releases</div>
                    <div>Top 250 Movies</div>
                    <div>Most Popular Videos</div>
                    <div>Browse Movies by Genre</div>
                    <div>Top Box Office</div>
                    <div>Showtimes & Tickets</div>
                    <div>In Theaters</div>
                    <div>Coming Soon</div>
                    <div>Movies News</div>
                    <div>India Movie Spotlight</div>
                </div>
            </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-evenly", width:"100%"}}>

            <div>
            <h3> <LocalMoviesIcon sx={{color:"yellow"}}></LocalMoviesIcon> Movies </h3>
                <div className="all-menu-links">
                    <div>Release Calender</div>
                    <div>DVD & Blu-ray Releases</div>
                    <div>Top 250 Movies</div>
                    <div>Most Popular Videos</div>
                    <div>Browse Movies by Genre</div>
                    <div>Top Box Office</div>
                    <div>Showtimes & Tickets</div>
                    <div>In Theaters</div>
                    <div>Coming Soon</div>
                    <div>Movies News</div>
                    <div>India Movie Spotlight</div>
                </div>
            </div>
            <div>
            <h3> <LocalMoviesIcon sx={{color:"yellow"}}></LocalMoviesIcon> Movies </h3>
                <div className="all-menu-links">
                    <div>Release Calender</div>
                    <div>DVD & Blu-ray Releases</div>
                    <div>Top 250 Movies</div>
                    <div>Most Popular Videos</div>
                    <div>Browse Movies by Genre</div>
                    <div>Top Box Office</div>
                    <div>Showtimes & Tickets</div>
                    <div>In Theaters</div>
                    <div>Coming Soon</div>
                    <div>Movies News</div>
                    <div>India Movie Spotlight</div>
                </div>
            </div>
            </div>

        </div>
      </Dialog>
        </li>
        <li className="nav-item font-weight-bold">
          {/* <a className="nav-link" href="#">Link</a> */}
          
        </li>
        <li style={{marginTop:"0.5rem"}} >
        <select style={{ outline:"none",border:"none" , borderTopLeftRadius:"0.2rem" ,  borderBottomLeftRadius:"0.2rem" ,textAlign:"center" ,height:"4vh"}} name="" id="selectOption">
            <option className='bg-dark text-light' value="all">  All</option>
            <option className='bg-dark text-light' value="all">Titles</option>
            <option className='bg-dark text-light' value="all">TV Episodes</option>
            <option className='bg-dark text-light' value="all">Celebs</option>
            <option className='bg-dark text-light' value="all">Companies</option>
            <option className='bg-dark text-light' value="all">Keywords</option>
        </select>
        <input autoComplete='none' onChange={handleChange} value={text} id='search-input'  type="text" placeholder='Search' style={{outline:"none",border:"none",borderBottomRightRadius:"0.2rem", borderTopRightRadius:"0.2rem" ,height:"4vh" , width:"35vw", padding:"0.5rem"}} />  </li>
    
       

        <li className="nav-item">
          <a className="nav-link active">IMDbPro</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"> <WatchLaterIcon></WatchLaterIcon> Watchlist</a>
        </li>
        <li onClick={handlelog }  className="nav-item">
          <a className="nav-link active">Sign In</a>
        </li>
        <li style={{marginTop:"0.5rem",outline:"none", border:"none"}}>
         <select style={{outline:"none" , border:"none" , background:"rgb(31,31,31)"}} className='text-light' name="" id="">
             <option value="en">EN</option>
             <option value="hi">HI</option>
         </select>
        </li>

     
        

      </ul>
     
    </div>
  </div>
</nav>
</div>
<div className='search-popup'>
  {loading ? <><Skeleton variant="text" />
      <Skeleton variant="circular" width={100} height={20} />
      <Skeleton variant="rectangular" width={210} height={118} /></> : arr.map((movie, index)=>(

        <div onClick={()=>handleSearch(movie.title)} key={index} className='eachpop' style={{position:"relative"}}>
        
        <h5>{movie.title}</h5>
        <img src={movie.poster_path} alt="movie" />
        <PlayCircleOutlineIcon className='playbtn' sx={{position:"absolute", left:"0vw", fontSize:"5vw", bottom:"0"}}></PlayCircleOutlineIcon>
        </div>
    ))}  
    
</div>
</div>
  )
}

export default Navbar