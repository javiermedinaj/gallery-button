import React, { useEffect } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Slide from './Slide';
import SwiperLib from 'swiper';
import Splitting from 'splitting';
import gsap from 'gsap';
import './CustomSwiper.css';
import Image1 from '../assets/images/01.jpg';
import Image2 from '../assets/images/02.jpg';
import Image3 from '../assets/images/03.jpg';
import Image4 from '../assets/images/04.jpg';
import Image5 from '../assets/images/05.jpg';
import Image6 from '../assets/images/06.jpg';

const CustomSwiper = () => {
  useEffect(() => {
    const sliderText = document.querySelectorAll('.swiper-slide_text');
    const sliderFigure = document.querySelector('.swiper-slide_figure');
    const arrowNext = document.querySelector('.swiper-button-next');
    const arrowPrev = document.querySelector('.swiper-button-prev');

    let swiper = new SwiperLib('.swiper', {
      loop: true,
      direction: 'vertical',
      allowTouchMove: true, 
      parallax: true,
      speed: 1000,
    });

    Splitting({
      target: sliderText,
      by: 'chars',
      matching: 'ofh',
    });

    gsap.set('.char', { y: '-101%' });

    const init = () => {
      gsap.from(sliderFigure, {
        duration: 2,
        height: 0,
        ease: 'expo.inOut',
        onStart: slideAnimation,
      });
    };

    const handleArrows = (opacity, pointerEvents) => {
      arrowNext.style.pointerEvents = pointerEvents;
      arrowNext.style.opacity = opacity;

      arrowPrev.style.pointerEvents = pointerEvents;
      arrowPrev.style.opacity = opacity;
    };

    const slideAnimation = () => {
      const tl = gsap.timeline({ defaults: { ease: 'expo.out' } });

      handleArrows(0.5, 'none');

      return new Promise((resolve) => {
        tl.to('.char', {
          duration: 1,
          y: '-101%',
          stagger: {
            from: 'random',
            amount: 0.4,
          },
          onComplete: resolve,
        }).to(
          '.char',
          {
            duration: 1,
            y: '0',
            stagger: {
              from: 'random',
              amount: 0.4,
            },
            onComplete: () => handleArrows(1, 'auto'),
          },
          2
        );
      });
    };

    const slideNext = async () => {
      await slideAnimation();
      swiper.slideNext();
    };

    const slidePrev = async () => {
      await slideAnimation();
      swiper.slidePrev();
    };

    const addEventListeners = () => {
      arrowNext.addEventListener('click', slideNext);
      arrowPrev.addEventListener('click', slidePrev);
    };

    window.onload = () => {
      init();
      addEventListeners();
    };
  }, []);

  return (
    <section className="swiper">
      <div className="swiper-wrapper">
        <Slide text1="The pulsating" text2="beats of the music" imgSrc={Image1} />
        <Slide text1="People from" text2="all walks of life" imgSrc={Image2} />
        <Slide text1="a gateway" text2="to escape reality" imgSrc={Image3} />
        <Slide text1="a form of expression" text2="a visual representation" imgSrc={Image4} />
        <Slide text1="a shaman" text2="leading the tribe" imgSrc={Image5} />
        <Slide text1="Through the haze" text2="of smoke and sweat" imgSrc={Image6} />
      </div>
      <div className="swiper-button-prev"><FaArrowLeft /></div>
      <div className="swiper-button-next"><FaArrowRight /></div>
    </section>
  );
};

export default CustomSwiper;