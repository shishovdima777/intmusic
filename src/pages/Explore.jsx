import React from "react";
import "../scss/explore.scss";
import { MainHeader, ExploreAlbumsUsers, AlbumSwiper, UserSwiper } from "../components";
import {
  rectangle,
  rectangle2,
  useravatar,
  useravatar2,
} from "../assets/images";

function Explore() {
  const albums = [
    { img: rectangle2, header: "Lucid Dreams", user: "Juice WRLD" },
    { img: rectangle2, header: "Lucid Dreams", user: "Juice WRLD" },
    { img: rectangle2, header: "Lucid Dreams", user: "Juice WRLD" },
    { img: rectangle2, header: "Lucid Dreams", user: "Juice WRLD" },
    { img: rectangle2, header: "Lucid Dreams", user: "Juice WRLD" },
  ];
  const userAvatar = [
    { img: useravatar, header: "Juice WRLD", user: "User" },
    { img: useravatar, header: "Juice WRLD", user: "User" },
    { img: useravatar, header: "Juice WRLD", user: "User" },
    { img: useravatar, header: "Juice WRLD", user: "User" },
    { img: useravatar, header: "Juice WRLD", user: "User" },
  ];
  const albumSlider = [
    { img: rectangle, album: "Lucid Dreams" },
    { img: rectangle, album: "Death race for love" },
    { img: rectangle, album: "Lucid Dreams" },
    { img: rectangle, album: "Lucid Dreams" },
    { img: rectangle, album: "Lucid Dreams" },
  ];
  const userSlider = [
    { img: useravatar2, user: "Juice WRLD" },
    { img: useravatar2, user: "Polo G" },
    { img: useravatar2, user: "Juice WRLD" },
    { img: useravatar2, user: "Juice WRLD" },
    { img: useravatar2, user: "Juice WRLD" },
  ];

  return (
    <div className="explore-wrapper">
      <MainHeader />
      <div className="explore-container">
        <div className="new-albums-header">
          <h1>New Albums</h1>
          <a href="#">ALL</a>
        </div>
        <div>
          <ExploreAlbumsUsers items={albums} />
        </div>
        <div className="new-users-header">
          <h2>New Albums</h2>
          <a href="#">ALL</a>
        </div>
        <div>
          <ExploreAlbumsUsers items={userAvatar} />
        </div>
      </div>
      <div className="explore-small-width">
        <h1>New Albums</h1>
          <AlbumSwiper items={albumSlider} />
        <h2>New Users</h2>
        < UserSwiper items={userSlider} />
      </div>
    </div>
  );
}
export default Explore;
