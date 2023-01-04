import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import wrapper from '../store/configureStore'
const NodeBird = ({ Component }) => {
  
  // provider 생성 시 오류
  // 주의할 점은 Provider로 감싸지 않는다는 점, next-redux-wrapper가 알아서 store를 실은 후 자동으로 감싸준다는 점입니다.
  /*
  차이점 1 ) 우선 Provier로 감쌀 최상위 컴포넌트는 page/_app.js 입니다. React 때 처럼 index.js가 없거든요.
  차이점 2 ) Next에서는 store를 최상위 컴포넌트의 props에 가져와야 합니다. 그런데 _app.js에 있는 컴포넌트에 props가 존재할 수가 없죠. HOC을 이용해서 한번 감싸줘야 합니다. 다음 패키지(next-redux-wrapper)를 설치 한 후 감싸줍시다.
  */
 console.log('초기 페이지 리렌더링 확인')
  return (
    <>
      <Head>
        <title>NodeBird</title>
      </Head>
      <Component />
    </>
  );
};

NodeBird.propTypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(NodeBird);
//export default NodeBird;
