import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';

import ImagesZoom from './ImagesZoom';

const PostImages = ({ images }) => {
  console.log('images', images);

  const [showImagesZoom, setShowImagesZoom] = useState(false);

  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);

  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  
  //이미지가 한개일 경우는 화면이 꽉차게 표현
  if (images.length === 1) {
    return (
      <>
        <img src={images[0].src} onClick={onZoom} alt={images[0].src} />
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }

  if (images.length === 2) {
    return (
      <>
        <div>
          <img src={images[0].src} width="50%" onClick={onZoom} />
          <img src={images[1].src} width="50%" onClick={onZoom} />
        </div>
        {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  // 이미지가 3개 이상일 경우
  return (
    <>
      <div>
        {/* //button이나 input이 아니념 role="presentation"을 명시해 스크린 리더에게 굳이 누를 필요없다는 걸 알려줘야한다. */}
        <img role ="presentation" src={images[0].src} width="50%" onClick={onZoom} />
        <div
          style={{ display: 'inline-block', width: '50%', textAlign: 'center', verticalAlign: 'middle' }}
          onClick={onZoom}
        >
          {/* 더보기 버튼 */}
          <PlusOutlined />
          <br />
          {images.length - 1}
          개의 사진 더보기
        </div>
      </div>
      {showImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
};


PostImages.propTypes = {
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
  })).isRequired,
};

export default PostImages;
