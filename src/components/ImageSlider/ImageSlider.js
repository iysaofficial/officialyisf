import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const ImageSlider = () => {
  const images = [
    '/images/slider/1-min.png',
    '/images/slider/2-min.png',
    '/images/slider/3-min.png',
    '/images/slider/4-min.png',
    '/images/slider/5-min.png',
    '/images/slider/6-min.png',
    '/images/slider/7-min.png'
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
            {/* edited */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageSlider;
