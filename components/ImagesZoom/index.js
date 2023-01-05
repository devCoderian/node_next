import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Slick from 'react-slick';
import { Overlay, Header, CloseBtn, SlickWrapper, ImgWrapper, Indicator, Global } from './styles';
import styled from 'styled-components';


const ImagesZoom = ({ images, onClose }) => {
  
  // https://velog.io/@juno7803/3%EB%B6%84-TIPS-React-Slick-%EC%89%BD%EA%B2%8C-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose} />
      </Header>
      <SlickWrapper>
        <div>
        {/* afterChange 
        arguments : slick, currentSlide
        슬라이드 변경 후에 발생

        beforeChange
        arguments: slick, currentSlide, nextSlide
        슬라이드 변경되기 전에 발생 */}
          <Slick
          //슬라이드 시작 번호 체크 , 초기 슬라이드 인덱스 setting
            initialSlide={0}
            //슬라이드 변경되기 전에 발생 이미지가 넘어가기전
            // beforeChange={(slide) => setCurrentSlide(slide)}
            beforeChange={(slide, newSlide) => {
                //console.log('checkSlide')
                console.log('[slide-----]', slide) //current slide 0
                console.log('[newSlide-----]', newSlide) //next slide 1
                setCurrentSlide(newSlide);
            }}
            infinite
            arrows={false}
            slidesToShow={1}
            slidesToScroll={1}
          >
            {images.map((v) => (
              <ImgWrapper key={v.src}>
                <img src={v.src} alt={v.src} />
              </ImgWrapper>
            ))}
          </Slick>
          {/* Indicator => 현재 몇번째 슬라이드를 보고 있는지 */}
          {/* 몇장 중에 몇장을 보고 있는지 관리하는 인디케이터 */}
          {/* Styled-component 사용하면 바벨이 필수 */}
          <Indicator>
            <div>
              {currentSlide + 1}
              {' '}
              /
              {images.length}
            </div>
          </Indicator>
        </div>
      </SlickWrapper>
    </Overlay>
  );
};

ImagesZoom.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImagesZoom;
