import React from "react";
import { logo, profileimg1 } from "../assets/images";
import "../scss/main_header.scss";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

function MainHeader({
  setVisiblePopUpFirst,
  visiblePopUpFirst,
  visiblePopUpSecond,
  setVisiblePopUpSecond,
  visiblePopUpThird,
  setVisiblePopUpThird,
  headerBurger,
  headerProfile,
  dotsPopUp,
}) {
  return (
    <header className="profile-header-wrapper">
      <div className="profile-header">
        <div className="profile-header-child1">
          <img src={logo} alt="logo" />
          <form className="profile-form">
            <input type="text" placeholder="Search" className="search-field" />
            <button className="search-btn">
              <SearchIcon />
            </button>
          </form>
          <button className="upload-btn">Upload</button>
          <a href="#">Explore Music</a>
        </div>
        <div className="profile-header-child2">
          <div
            ref={headerProfile}
            onClick={() => setVisiblePopUpFirst(!visiblePopUpFirst)}
            className="profile-header-child2__elem1"
          >
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
          <div
            ref={dotsPopUp}
            onClick={() => setVisiblePopUpSecond(!visiblePopUpSecond)}
            className="profile-header-child2__elem2"
          >
            <MoreHorizIcon className="MoreHorizIcon" />
          </div>
        </div>
        <div
          ref={headerBurger}
          onClick={() => setVisiblePopUpThird(!visiblePopUpThird)}
          className="profile-header-child3"
        >
          <span className="hum-line"></span>
          <span className="hum-line"></span>
          <span className="hum-line"></span>
        </div>
      </div>
    </header>
  );
}

export default MainHeader;
