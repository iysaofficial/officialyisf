import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const ImageSlider = () => {
  const images = [
    '/images/slider/1.jpg',
    '/images/slider/2.jpg',
    '/images/slider/3.jpg',
    '/images/slider/4.jpg',
    '/images/slider/5.jpg',
    '/images/slider/6.jpg',
    '/images/slider/7.jpg',
    '/images/slider/8.jpg',
  ];

  return (
    <div style={{ padding: '5px 0', background: '#000', marginTop: '2rem', marginBottom: '2rem'}}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={10}
        slidesPerView={'auto'}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ padding: '10px 0' }}
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: '250px',
              flexShrink: 0,
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <img
              src={src}
              alt={`Slide ${i}`}
              style={{
                width: '100%',
                height: '180px',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
