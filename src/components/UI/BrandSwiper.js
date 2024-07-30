import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';

// Import your brand logos
import keelsLogo from '../../assets/images/keels-logo.png';
import nestleLogo from '../../assets/images/nestle-logo.png';
import unileverLogo from '../../assets/images/unilever-logo.png';
import uokLogo from '../../assets/images/uok-logo.png';
import cargilsLogo from '../../assets/images/cargils-logo.png';
import arpicoLogo from '../../assets/images/arpico-logo.png';
import melwaLogo from '../../assets/images/melwa-logo.png';

const BrandSwiper = () => {
  const brands = [
    { name: 'Keels', logo: keelsLogo },
    { name: 'Nestlé', logo: nestleLogo },
    { name: 'Unilever', logo: unileverLogo },
    { name: 'University of kelaniya', logo: uokLogo },
    { name: 'cargils', logo: cargilsLogo },
    { name: 'Arpico', logo: arpicoLogo },
    { name: 'Melwa', logo: melwaLogo },
  ];

  return (
    <div className="brand-swiper">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={40}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
      >
        {brands.map((brand, index) => (
          <SwiperSlide key={index}>
            <div className="brand-logo-container">
              <img src={brand.logo} alt={brand.name} className="brand-logo" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BrandSwiper;