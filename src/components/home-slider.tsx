'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css/bundle';

import Image01 from '@/../public/home/1.webp';
import Image02 from '@/../public/home/2.webp';
import Image03 from '@/../public/home/3.webp';
import Image04 from '@/../public/home/4.webp';
import Image05 from '@/../public/home/5.webp';
import Image06 from '@/../public/home/6.webp';
import Image07 from '@/../public/home/7.webp';
import Image08 from '@/../public/home/8.webp';

export default function HomeSlider() {
  return (
    <Swiper
      allowTouchMove={false}
      effect={'fade'}
      fadeEffect={{
        crossFade: true
      }}
      autoplay={{
        delay: 2000
      }}
      speed={2000}
      modules={[EffectFade, Autoplay]}
      className='size-full bg-zinc-900'
    >
      <SwiperSlide>
        <Image src={Image01} alt='Balcony' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image02} alt='Lampshades' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image03} alt='Garlic' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image04} alt='Fisherman' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image05} alt='Camels' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image06} alt='Pool' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image07} alt='Chair lift' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={Image08} alt='Bride in doorway' fill style={{ objectFit: 'cover' }} />
      </SwiperSlide>
    </Swiper>
  );
}
