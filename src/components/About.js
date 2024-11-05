import React from 'react';
import './About.css';

const About = () => {
  return (
    <section className="about">
      <h2>About This Project</h2>
      <a href='https://github.com/javiermedinaj/gallery-button' target='_blank' rel="noreferrer">See the code in Github </a>
      <p>This project is built using the following technologies:</p>
      <ul>
        <li>React</li>
        <li>Swiper</li>
        <li>GSAP</li>
        <li>Splitting</li>
        <li>React Icons</li>
      </ul>
    </section>
  );
};

export default About;