import React, { useState } from 'react';
import { GlobalStyle } from './styles/GlobalStyle';

import {
  SliderHeader,
  ImageBanner,
  LeftArrow,
  RightArrow,
} from './styled';

import { sliderData } from './SliderData';

export default function Slider() {
  const [slide, setSlide] = useState(0);
  const len = sliderData.length;

  let autoSlide = '';

  function handleRightClick() {
    clearInterval(autoSlide);
    setSlide(slide === len - 1 ? 0 : slide + 1);
  }

  function handleLeftClick() {
    clearInterval(autoSlide);
    setSlide(slide === 0 ? len - 1 : slide - 1);
  }

  autoSlide = setInterval(handleRightClick, 10000);

  return (
    <>
    <GlobalStyle />
    <SliderHeader>
      {sliderData.map((data, index) => (
        <div
          key={index}
          className={slide === index ? 'slide active' : 'slide notActive'}
        >
          <ImageBanner imageBanner={data.image} />
        </div>
      ))}
      <LeftArrow onClick={handleLeftClick} />
      <RightArrow onClick={handleRightClick} />
    </SliderHeader>
    </>
  );
}
