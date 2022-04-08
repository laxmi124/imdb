import React, { useContext, useEffect, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import YoutubeSearchedForIcon from "@mui/icons-material/YoutubeSearchedFor";
import {
  AppBar,
  Button,
  Dialog,
  IconButton,
  MenuItem,
  Select,
  Slide,
  toggleButtonClasses,
  Toolbar,
  Typography,
} from "@mui/material";
import "./Navbar.css";
import CloseIcon from "@mui/icons-material/Close";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import LocalMoviesIcon from "@mui/icons-material/LocalMovies";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { AuthContext } from "../Context/AuthContext";
import { Link, Navigate, useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";
import Logo from "./Logo";
import { useSelector } from "react-redux";
import "./Navbar.css";
import UserDropdown from "./UserDropdown";
import TemporaryDrawer from "./Home/TemporaryDrawer";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const Navbar = () => {
  const user = useSelector((state) => state.myReducer.user);
  const isLogin = useSelector((state) => state.myReducer.isLogin);
 
  const [open, setOpen] = React.useState(false);
  const [text, setText] = useState("");

  const [arr, setArr] = useState([]);
  const {
    vId,
    setVId,
    setProgress,
    handleSearch,
    popup,
    setPopup,
    setisEnglish,
    isEnglish,
  } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const naviagte = useNavigate();
  var id;
  const [timer, setTimer] = useState(null);

  const handleChange = (e) => {
    // clearTimeout(timer);
    setLoading(true);
    setPopup(true);
    let value = text;

    setText(e.target.value);
    getData(value);
  };

  const getData = async (data) => {
    let res1 = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=cc5085fde0592cd1488b3e136fcc481d&query=${data}`
      // `https://api.themoviedb.org/3/search/movie?api_key=[paste your key here]&query=${data}`
    );
    let res2 = await res1.json();

    let searchedMovie = res2.results;
    if (searchedMovie.length <= 0) {
      setLoading(true);
    }
    let arr1 = [];
    for (let i = 0; i < searchedMovie.length; i++) {
      if (searchedMovie[i].poster_path) {
        //  console.log(searchedMovie[i].poster_path)
        let poster_path1 = `https://image.tmdb.org/t/p/original${searchedMovie[i].poster_path}`;
        searchedMovie[i].poster_path = poster_path1;
        arr1.push(searchedMovie[i]);
      }
    }
    setLoading(false);
    setArr([...arr1]);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handlelog = () => {
    console.log("hello");
    naviagte("/signin");
  };
  const handleClose = () => {
    setOpen(false);
  };
  useEffect(() => {
    // console.log(arr);
  }, [arr]);

  return (
    <div className="navbar-bgd">
      
      <TemporaryDrawer Menu={'Menu'}/>
      <div id="navbar">
        <nav className="navbar navbar-expand-lg navbar-full">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              <Logo className="nav-logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li id="menucard" className="nav-item">
                  <a
                    className="nav-link active"
                    aria-current="page"
                    href="#"
                    onClick={handleClickOpen}
                  >
                 
                      <MenuIcon></MenuIcon>
                      <div><i className="fi fi-rr-menu-burger white-color"></i></div>
               
                    <div>{isEnglish ? <p>Menu</p> : <p> मेनू </p>}</div>   
                  </a>
                  <Dialog
                    fullScreen
                    open={open}
                    onClose={handleClose}
                    TransitionComponent={Transition}
                    sx={{ background: "rgb(31,31,31)" }}
                  >
                    <AppBar
                      sx={{ position: "relative", background: "rgb(31,31,31)" }}
                    >
                      <Toolbar
                        className="container"
                        style={{ backgroundColor: "rgb(31,31,31)" }}
                      >
                        <IconButton
                          edge="start"
                          //   color="inherit"
                          onClick={handleClose}
                          aria-label="close"
                        ></IconButton>

                        <CloseIcon
                          onClick={handleClose}
                          style={{
                            background: "#f5c518",
                            color: "black",
                            borderRadius: "50%",
                            height: "2rem",
                            width: "2rem",
                            position: "absolute",
                            right: "0",
                          }}
                        />
                        <Link className="navbar-brand" to="/">
                          <Logo />
                        </Link>
                      </Toolbar>
                    </AppBar>
                    <div
                      style={{
                        height: "100vh",
                        backgroundColor: "#121212",
                        color: "white",
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          width: "100%",
                        }}
                      >
                        <div>
                          <h3>
                            {" "}
                            <LocalMoviesIcon
                              sx={{ color: "yellow" }}
                            ></LocalMoviesIcon>{" "}
                            Movies{" "}
                          </h3>
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
                          <div>
                            <h3>
                              {" "}
                              <LocalMoviesIcon
                                sx={{ color: "yellow" }}
                              ></LocalMoviesIcon>{" "}
                              TV Shows{" "}
                            </h3>
                            <div className="all-menu-links">
                              <div>What's on TV Streaming</div>
                              <div>Top 250 TV Shows</div>
                              <div>Most Popular TV Shows</div>
                              <div>Browse TV Shows by Genre</div>
                              <div>TV News</div>
                              <div>India TV Spotlight</div>
                            </div>
                          </div>
                          <div>
                            <h3>
                              {" "}
                              <LocalMoviesIcon
                                sx={{ color: "yellow" }}
                              ></LocalMoviesIcon>{" "}
                              Watch{" "}
                            </h3>
                            <div className="all-menu-links">
                              <div>What to Watch</div>
                              <div>Latest Trailers</div>
                              <div>IMDb Originals</div>qw2
                              <div>IMDb Picks</div>
                              <div>IMDb Podcasts</div>
                            </div>
                          </div>
                        </div>
                        <div>
                          <h3>
                            {" "}
                            <LocalMoviesIcon
                              sx={{ color: "yellow" }}
                            ></LocalMoviesIcon>{" "}
                            Movies{" "}
                          </h3>
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
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "space-evenly",
                          width: "100%",
                        }}
                      >
                        <div>
                          <h3>
                            {" "}
                            <LocalMoviesIcon
                              sx={{ color: "yellow" }}
                            ></LocalMoviesIcon>{" "}
                            Movies{" "}
                          </h3>
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
                          <h3>
                            {" "}
                            <LocalMoviesIcon
                              sx={{ color: "yellow" }}
                            ></LocalMoviesIcon>{" "}
                            Movies{" "}
                          </h3>
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

                <li className="input-navbar">
                  <Select
                    sx={{
                      color: "black",
                      background: "white ",
                      maxHeight: "28px",
                      outline: "none",
                      borderRadius: "none",
                      border: "none",
                    }}
                    id="selectOption"
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value=""></MenuItem>
                    <MenuItem value={10}> All</MenuItem>
                    <MenuItem value={20}> Titles</MenuItem>
                    <MenuItem value={30}> TV Episodes</MenuItem>
                    <MenuItem value={30}> Celebs</MenuItem>
                    <MenuItem value={30}> Companies</MenuItem>
                    <MenuItem value={30}> Keywords</MenuItem>
                  </Select>
                  <input
                    autoComplete="off"
                    onChange={handleChange}
                    value={text}
                    id="search-input"
                    type="text"
                    placeholder={isEnglish ? "Search IMDb" : "सर्च IMDb"}
                    style={{
                      outline: "none",
                      border: "none",
                      borderBottomRightRadius: "0.2rem",
                      borderTopRightRadius: "0.2rem",
                      height: "4vh",
                      width: "35vw",
                      padding: "0.5rem",
                    }}
                  />{" "}
                </li>

                <li className="nav-item">
                  <a className="nav-link active">
                    {isEnglish ? "IMDbPro" : "IMDb प्रो"}
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active watchlist">
                    {" "}
                    <WatchLaterIcon></WatchLaterIcon>{" "}
                    {isEnglish ? "Watchiist" : "वाच लिस्ट"}
                  </a>
                </li>
                <li className="nav-item">
                  {/* <a className="nav-link active">Sign In</a>  */}
                  {isLogin ? (
                    <UserDropdown username={user.username} ></UserDropdown>
                  ) : (
                    <a onClick={handlelog} className="nav-link active">
                      {isEnglish ? "  Sign In" : "साइन इन" }
                    </a>
                  )}
                </li>
                <li>
                  <select
                    // style={{
                    //   outline: "none",
                    //   border: "none",
                    //   background: "rgb(31,31,31)",
                    //   fontSize: "20px",
                    // }}
                    className="text-light"
                    name=""
                    id=""
                    onChange={() => setisEnglish(!isEnglish)}
                  >
                    <option value="en">EN</option>
                    <option value="hi">HI</option>
                  </select>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {popup && (
        <div className="search-popup">
          {loading ? (
            <>
              <Skeleton variant="text" />
              {/* <Skeleton variant="circular" width={100} height={20} /> */}
              <Skeleton variant="rectangular" width={210} height={118} />
            </>
          ) : (
            arr.map((movie, index) => (
              <div
                onClick={() => handleSearch(movie.title)}
                key={index}
                className="eachpop"
              >
                <h5>{movie.title}</h5>
                <img src={movie.poster_path} alt="movie" />
                <PlayCircleOutlineIcon
                  className="playbtn"
                  sx={{
                    position: "absolute",
                    left: "0vw",
                    fontSize: "5vw",
                    bottom: "0",
                  }}
                ></PlayCircleOutlineIcon>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
