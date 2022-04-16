import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function AlbumSwiper({ items }) {
  return (
    <Swiper
    spaceBetween={115}
    slidesPerView={4}
  >
      {items.map((album, index) => (
        <SwiperSlide key={`${album}_${index}`}>
          <div className="album-name-img">
            <img src={album.img} alt="pic of album" />
            <h2>{album.album}</h2>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
export default AlbumSwiper;
