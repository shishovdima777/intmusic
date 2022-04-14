import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { logo, profileimg1, profileimg2, rectangle } from "../assets/images";
import "../scss/profileExplore.scss";
import "swiper/css";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function ProfileExplore() {
  return (
    <div className="profile-wrapper">
      <header className="profile-header-wrapper">
        <div className="profile-header">
          <div className="profile-header-child1">
            <img src={logo} alt="logo" />
            <form className="profile-form">
              <input
                type="text"
                placeholder="Search"
                className="search-field"
              />
              <button className="search-btn">
                <SearchIcon />
              </button>
            </form>
            <button className="upload-btn">Upload</button>
            <a href="#">Explore Music</a>
          </div>
          <div className="profile-header-child2">
            <div className="profile-header-child2__elem1">
              <div>
                <img src={profileimg1} alt="profile image" />
              </div>
              <div>
                <h1>Dima Shishov</h1>
              </div>
              <div>
                <KeyboardArrowDownIcon className="key-arrow" />
              </div>
            </div>
            <div className="profile-header-child2__elem2">
              <MoreHorizIcon className="MoreHorizIcon" />
            </div>
          </div>
          <div className="profile-header-child3">
            <span className="hum-line"></span>
            <span className="hum-line"></span>
            <span className="hum-line"></span>
          </div>
        </div>
      </header>
      <div className="profile-continer">
        <div className="profile-name-photo">
          <img src={profileimg2} alt="profile image" />
          <h1>Dima Shishov</h1>
        </div>
        <div className="profile-continer-header">
          <nav className="profile-header-elem1">
            <ul>
              <li>
                <a href="#">Tracks</a>
              </li>
              <li className="vertical-line"></li>
              <li>
                <a href="#">Albums</a>
              </li>
              <li className="vertical-line"></li>
              <li>
                <a href="#">Playlists</a>
              </li>
            </ul>
          </nav>
          <div>
            <CloudUploadIcon className="CloudUploadIcon" />
          </div>
        </div>
      </div>
      <div className="profile-small-width">
        <h1>Albums</h1>
        <Swiper
          spaceBetween={115}
          slidesPerView={4}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <div className="album-name-img">
              <img src={rectangle} alt="pic of album" />
              <h1>Lucid Dreams</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="album-name-img">
              <img src={rectangle} alt="pic of album" />
              <h1>Lucid Dreams</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="album-name-img">
              <img src={rectangle} alt="pic of album" />
              <h1>Lucid Dreams</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="album-name-img">
              <img src={rectangle} alt="pic of album" />
              <h1>Lucid Dreams</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="album-name-img">
              <img src={rectangle} alt="pic of album" />
              <h1>Lucid Dreams</h1>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="album-name-img">
              <img src={rectangle} alt="pic of album" />
              <h1>Lucid Dreams</h1>
            </div>
          </SwiperSlide>
        </Swiper>
        <h2>My music</h2>
      </div>
    </div>
  );
}

export default ProfileExplore;


