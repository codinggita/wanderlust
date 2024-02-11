import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './Blogslider.css'; // Create a CSS file for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from './FontAwesomeIcons';
import image1 from './im1.jpg'
import image2 from './im2.jpeg'

const Blogslider = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
   
      

    <Slider  ref={slider} {...settings}>
      <div className="carousel-item">
        <div className="itemss">
        <div className="image-container">
          <img src={image1} alt="Image 1" />
        </div>
        <div className="content-container">
        <p>Beautiful Italy</p>
          <p>Let's Travel</p>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit dolores voluptatem dicta consequatur incidunt optio voluptatibus harum reiciendis? Repellat, expedita?Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, dolores dolorum. Voluptatibus dolore dolorem consectetur aspernatur quaerat animi distinctio, magnam suscipit nisi, ipsam, alias culpa minima quasi veritatis reprehenderit eius nemo facere! Dolores ex odio maiores nobis laboriosam numquam explicabo minus cumque, sapiente facere dicta vel, pariatur dignissimos quis suscipit eius sed velit in quos molestias assumenda optio dolor quasi. Perspiciatis, non ipsum. Expedita, blanditiis consequatur qui porro ea laudantium.</p>
        </div>
        </div>
        
      </div>

      <div className="carousel-item">
        <div className="itemss">
        <div className="image-container">
          <img src={image2} alt="Image 2" />
        </div>
        <div className="content-container">
          <p>Beautiful Italy</p>
          <p>Let's Travel</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque at ut quidem rem soluta iure beatae expedita, blanditiis ipsa unde recusandae eos in accusantium voluptatum nulla fuga laudantium, labore earum est voluptate fugiat animi veritatis totam? Officia, fuga, dignissimos suscipit delectus at autem enim nulla possimus, doloremque dolorem culpa ex?Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates cupiditate numquam saepe voluptatem, optio vitae quas? Esse quos quisquam facere quo magni dolores perspiciatis temporibus. Nulla reiciendis aliquid consectetur sequi.</p>
        </div>
        </div>
        
      </div>

      {/* Add more slides as needed */}
    </Slider>
   
  );
};

export default Blogslider;