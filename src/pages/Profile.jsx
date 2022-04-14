import React from "react";
import MainHeader from "./MainHeader";
import { Swiper, SwiperSlide } from "swiper/react";
import { profileimg2, rectangle } from "../assets/images";
import "../scss/profile.scss";
import "swiper/css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function ProfileExplore() {
  return (
    <div className="profile-wrapper">
      <MainHeader />
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
