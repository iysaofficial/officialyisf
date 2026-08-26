import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const ImageSlider = () => {
  const images = [
    '/images/news/YNSF_YISF_2026-58_quguzi.jpg',
    '/images/news/YNSF_YISF_2026-112_ix9lja.jpg',
    '/images/news/YNSF_YISF_2026-343_h5q1sl.jpg',
    '/images/news/YNSF_YISF_2026-259_ucngzk.jpg',
    '/images/slider/5-min.png',
    '/images/slider/6-min.png',
    '/images/slider/7-min.png'
  ];

  return (
    <div style={{ padding: '5px 0', background: '#000', marginTop: '2rem', marginBottom: '2rem'}}>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={16}
        slidesPerView={'auto'}
        autoplay={{ delay: 3000 }}
        loop={true}
        style={{ padding: '10px 0' }}
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            style={{
              width: '400px',
              maxWidth: '85vw',
              flexShrink: 0,
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <img
              src={src}
              alt={`Slide ${i + 1}`}
              style={{
                width: '100%',
                height: '260px',
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
