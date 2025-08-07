'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

import camelsImage from '@/../public/home/camels.jpg';
import balconyImage from '@/../public/home/balcony.jpg';
import chaletImage from '@/../public/home/chalet.jpg';
import garlicImage from '@/../public/home/garlic.jpg';
import lampshadesImage from '@/../public/home/lampshades.jpg';
import skyImage from '@/../public/home/sky.jpg';

export default function HomeSlider() {
  return (
    <Swiper
      allowTouchMove={false}
      effect={'fade'}
      fadeEffect={{
        crossFade: true
      }}
      autoplay={{
        delay: 5000
      }}
      speed={1000}
      modules={[EffectFade, Autoplay]}
      className='size-full bg-zinc-900'
    >
      <SwiperSlide>
        <Image src={balconyImage} alt='Balcony' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={camelsImage} alt='Camels' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={lampshadesImage} alt='Lampshades' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={chaletImage} alt='Chalet' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={garlicImage} alt='Garlic' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={skyImage} alt='Sky' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
    </Swiper>
  );
}
