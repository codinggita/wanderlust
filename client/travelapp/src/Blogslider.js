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

  return (<>
   <div className='icons'>
      <div className="ico">
        <div className="l1"><FontAwesomeIcon className='less' icon={faLessThan} onClick={() => slider.current.slickPrev()}/></div>
        <div className="l2"><FontAwesomeIcon className='greater' icon={faGreaterThan} onClick={() => slider.current.slickNext()} /></div>
      
      </div>
      
    </div>
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
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis magni dicta deleniti ipsam sed consequatur vero officia excepturi ab voluptate, doloremque, blanditiis, dolorum ullam error. Illo veritatis tempora dolore quisquam minus quibusdam fugit et sapiente ad expedita animi magni, sint recusandae dolor, vitae adipisci laborum pariatur debitis sequi sed quae rem, modi nisi. Alias, voluptatem tempora officiis maiores ducimus labore iure voluptatibus dolor. Harum inventore natus aut atque, maiores placeat. Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus asperiores harum aliquid quis placeat commodi optio dignissimos ab laudantium? Quos?</p>
        </div>
        </div>
        
      </div>

      {/* Add more slides as needed */}
    </Slider></>
   
  );
};

export default Blogslider;