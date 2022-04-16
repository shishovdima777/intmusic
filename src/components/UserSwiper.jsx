import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

function UserSwiper({ items }) {
  return (
    <Swiper spaceBetween={115} slidesPerView={4}>
      {items &&
        items.map((user, index) => (
          <SwiperSlide key={`${user}_${index}`}>
            <div className="album-name-img">
              <img src={user.img} alt="pic of album" />
              <h2>{user.user}</h2>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
}

export default UserSwiper;
