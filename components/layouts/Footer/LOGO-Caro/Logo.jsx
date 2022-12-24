import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { Image } from "@chakra-ui/react";

import BoxLayout from "../../BoxLayout";

const Logo = () => {
  return (
    <BoxLayout>
      <Swiper
        slidesPerView={1}
        loop={true}
        style={{ width: "100%", height: "100%", margin: "1rem 0rem" }}
      >
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Image src="/img/AITA.png" alt="logo" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Image src="/img/HAAB.png" alt="logo" />
        </SwiperSlide>
        <SwiperSlide style={{ width: "100%", height: "100%" }}>
          <Image src="/img/LOGO1.png" alt="logo" />
        </SwiperSlide>
      </Swiper>
    </BoxLayout>
  );
};

export default Logo;
