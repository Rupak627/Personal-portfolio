import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import Sidebar from "../../img/test1.png";
import Ecommerce from "../../img/test2.png";
import HOC from "../../img/tempsnip.png";
import MusicApp from "../../img/huluimg.png";
import Temp from "../../img/tempsnip2.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      {/* heading */}
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
        <a href="https://master.d2ce5nv6gf8wjn.amplifyapp.com/">
          <img src={Sidebar} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://master.d2ce5nv6gf8wjn.amplifyapp.com/">
          <img src={Ecommerce} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://master.d3v9kdgxo404uc.amplifyapp.com">
          <img src={HOC} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
        <a href="https://master.d3v9kdgxo404uc.amplifyapp.com">
          <img src={Temp} alt="" />
          </a>
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Portfolio;
