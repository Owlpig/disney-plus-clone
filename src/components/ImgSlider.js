import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Carousel, sliderWrap as Wrap } from '../styles';

const ImgSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <Carousel {...settings}>
      <Wrap>
        <a>
          <img src='/images/slider-badging.jpg' alt=''/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-scale.jpg' alt=''/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-badag.jpg' alt=''/>
        </a>
      </Wrap>
      <Wrap>
        <a>
          <img src='/images/slider-scales.jpg' alt=''/>
        </a>
      </Wrap>
    </Carousel>
  );
};

export default ImgSlider;
