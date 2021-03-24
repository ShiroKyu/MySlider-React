import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

export const SliderHeader = styled.header`
  width: 100vw;
  height: 100vh;

  display: flex;
  position: relative;

  .slide {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;

    transition: transform 0.5s;

    position: absolute;
  }

  .active {
    transform: translateX(0);
  }

  .notActive {
    transform: translateX(-100vw);
  }
`;

export const ImageBanner = styled.div`
  width: 100%;
  height: 100%;

  background-image: url(${props => props.imageBanner});
  background-position: center;
  background-size: cover;
  position: absolute;
  z-index: -100;
`;

export const LeftArrow = styled(FiChevronLeft)`
  width: 3.5rem;
  height: 4.5rem;

  color: rgba(202, 174, 174, 0.897);

  position: absolute;
  bottom: 2%;
  right: 13%;

  cursor: pointer;
`;

export const RightArrow = styled(FiChevronRight)`
  width: 3.5rem;
  height: 4.5rem;

  color: rgba(202, 174, 174, 0.897);

  position: absolute;
  bottom: 2%;
  right: 8%;

  cursor: pointer;
`;
