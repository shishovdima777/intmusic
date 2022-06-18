import React, { useEffect, useState, useRef } from "react";
import { MainHeader, AlbumSwiper, PopUp } from "../components";
import { profileimg2, rectangle } from "../assets/images";
import "../scss/profile.scss";
import "swiper/css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

function ProfileExplore() {
  const popUpRef = useRef();
  const headerBurger = useRef();

  const [visiblePopUpFirst, setVisiblePopUpFirst] = useState(false);
  const [visiblePopUpSecond, setVisiblePopUpSecond] = useState(false);
  const [visiblePopUpThird, setVisiblePopUpThird] = useState(false);
  const albumSlider = [
    { img: rectangle, album: "Lucid Dreams" },
    { img: rectangle, album: "Death race for love" },
    { img: rectangle, album: "Lucid Dreams" },
    { img: rectangle, album: "Lucid Dreams" },
    { img: rectangle, album: "Lucid Dreams" },
  ];
  const popUpLinks = [
    { href: "#", value: "Change Profile Photo" },
    { href: "#", value: "Change Profile Name" },
    { href: "#", value: "Log out" },
  ];
  const popUpLinksTwo = [
    { href: "#", value: "Upload Music" },
    { href: "#", value: "Explore Music" },
  ];
  const popUpLinksThree = [
    { href: "#", value: "Change Profile Photo" },
    { href: "#", value: "Change Profile Name" },
    { href: "#", value: "Upload Music" },
    { href: "#", value: "Explore Music" },
    { href: "#", value: "Log out" },
  ];

  const profileOutsideClick = (e) => {
    if (
      !e.path.includes(popUpRef.current) &&
      !e.path.includes(headerBurger.current)
    ) {
      setVisiblePopUpThird(false);
    }
  };

  useEffect(() => {
    document.body.addEventListener("click", profileOutsideClick);
  }, []);
  return (
    <div className="profile-wrapper">
      <MainHeader
        headerBurger={headerBurger}
        setVisiblePopUpFirst={setVisiblePopUpFirst}
        visiblePopUpFirst={visiblePopUpFirst}
        visiblePopUpSecond={visiblePopUpSecond}
        setVisiblePopUpSecond={setVisiblePopUpSecond}
        visiblePopUpThird={visiblePopUpThird}
        setVisiblePopUpThird={setVisiblePopUpThird}
      />
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
        {visiblePopUpFirst && (
          <div className="popup-1">
            <PopUp items={popUpLinks} />
          </div>
        )}
        {visiblePopUpSecond && (
          <div className="popup-2">
            <PopUp items={popUpLinksTwo} />
          </div>
        )}
      </div>
      <div className="profile-small-width">
        <h1>Albums</h1>
        <AlbumSwiper items={albumSlider} />
        <h2>My music</h2>
      </div>
      {visiblePopUpThird && (
        <div ref={popUpRef} className="popup-3">
          <PopUp items={popUpLinksThree} />
        </div>
      )}
    </div>
  );
}

export default ProfileExplore;
