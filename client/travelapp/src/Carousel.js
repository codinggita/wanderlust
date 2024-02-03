import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import items from './download.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan, faLessThan } from './FontAwesomeIcons';
import './Carousel.css'
import { faMapMarker } from '@fortawesome/free-solid-svg-icons';


const Carousel = () => {
  const slider = React.useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    customPaging: function (i) {
      // Provide custom styles for dots based on active and inactive states
      return (
        <div
          style={{
            width: '10px',
            height: '10px',
            margin: '0 5px',
            background: i === 0 ? 'blue' : 'gray', // Set the active dot color and inactive dot color
            borderRadius: '50%',
            cursor: 'pointer',
          }}
        ></div>
      );
    },
  };

  return (
    <div className='emaaa'>
       <div className='icons'>
      <div className="ico">
        <div className="l1"><FontAwesomeIcon className='less' icon={faLessThan} onClick={() => slider.current.slickPrev()}/></div>
        <div className="l2"><FontAwesomeIcon className='greater' icon={faGreaterThan} onClick={() => slider.current.slickNext()} /></div>
      
      </div>
      
    </div>
      <Slider ref={slider} {...settings}>
        <div className='images'>
          <img src={items} alt="Slide 1" />
          <div className="abouts">
            <div className="a1">Monument of Berlin</div>
            <div className="h2"><FontAwesomeIcon className='location' icon={faMapMarker} />Berlin, Germany</div>
          </div>
        </div>
        <div className='images'>
        <img src={items} alt="Slide 1" />
        <div className="abouts">
            <div className="a1">Monument of Berlin</div>
            <div className="h2"><FontAwesomeIcon className='location' icon={faMapMarker} />Berlin, Germany</div>
          </div>
        </div>
        <div className='images'>
        <img src={items} alt="Slide 1" />
        <div className="abouts">
            <div className="a1">Monument of Berlin</div>
            <div className="h2"><FontAwesomeIcon className='location' icon={faMapMarker} />Berlin, Germany</div>
          </div>
        </div>
        <div className='images'>
          <img src={items} alt="Slide 1" />
          <div className="abouts">
            <div className="a1">Monument of Berlin</div>
            <div className="h2"><FontAwesomeIcon className='location' icon={faMapMarker} />Berlin, Germany</div>
          </div>
        </div>
        <div className='images'>
          <img src={items} alt="Slide 1" />
          <div className="abouts">
            <div className="a1">Monument of Berlin</div>
            <div className="h2"><FontAwesomeIcon className='location' icon={faMapMarker} />Berlin, Germany</div>
          </div>
        </div>
        <div className='images'>
          <img src={items} alt="Slide 1" />
          <div className="abouts">
            <div className="a1">Monument of Berlin</div>
            <div className="h2"><FontAwesomeIcon className='location' icon={faMapMarker} />Berlin, Germany</div>
          </div>
        </div>
        <div className='images'>
          <img src={items} alt="Slide 1" />
          <div className="abouts">
            <div className="a1">Monument of Berlin</div>
            <div className="h2"><FontAwesomeIcon className='location' icon={faMapMarker} />Berlin, Germany</div>
          </div>
        </div>
        {/* Add more images as needed */}
      </Slider>

      {/* Next and Previous buttons */}
     
    </div>
  );
};

export default Carousel;