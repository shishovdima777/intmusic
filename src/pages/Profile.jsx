import React from "react";
import { logo, profileimg1, profileimg2 } from "../assets/images";
import "../scss/profile.scss";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function Profile() {
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
    </div>
  );
}

export default Profile;
