import React from 'react';
import './Slide.css';

const Slide = ({ text1, text2, imgSrc }) => {
  return (
    <div className="swiper-slide">
      <div className="swiper-slide_text">
        <div className="ofh">{text1}</div>
        <div className="ofh">{text2}</div>
      </div>
      <figure className="swiper-slide_figure">
        <img src={imgSrc} alt="" className="swiper-slide_image" />
      </figure>
    </div>
  );
};

export default Slide;