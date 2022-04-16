import React from "react";

function ExploreAlbumsUsers({ items }) {
  return (
    <div className="album-bar-wrapper">
      {items &&
        items.map((album, index) => (
          <div key={`${album}_${index}`} className="explore-album-container">
            <img src={album.img} alt="picture of the album" />
            <p className="exp-album-name">{album.header}</p>
            <p className="exp-artist">{album.user}</p>
          </div>
        ))}
    </div>
  );
}

export default ExploreAlbumsUsers;
