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

// Warning: useLayoutEffect does nothing on the server, because its effect cannot be encoded into the server renderer's output format. This will lead to a mismatch between the initial, non-hydrated UI and the intended UI. To avoid this, useLayoutEffect should only be used in components that render exclusively on the client. See https://reactjs.org/link/uselayouteffect-ssr for common fixes.
// at Overflow (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/rc-overflow/lib/Overflow.js:42:32)
// at InheritableContextProvider (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/rc-menu/lib/context/MenuContext.js:40:23)
// at Menu (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/rc-menu/lib/Menu.js:80:32)
// at InternalMenu (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/antd/lib/menu/index.js:77:37)
// at Menu (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/antd/lib/menu/index.js:176:37)
// at div
// at AppLayout (webpack-internal:///./components/AppLayout.js:34:22)
// at Home (webpack-internal:///./pages/index.js:46:85)
// at NodeBird (webpack-internal:///./pages/_app.js:22:21)
// at Provider (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/react-redux/lib/components/Provider.js:19:3)
// at Wrapper (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/next-redux-wrapper/lib/index.js:184:35)
// at InnerApp
// at StyleRegistry (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/styled-jsx/dist/stylesheet-registry.js:231:34)
// at AppContainer (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/next/dist/server/render.js:340:29)
// at AppContainerWithIsomorphicFiberStructure (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/next/dist/server/render.js:370:57)
// at div
// at Body (/Users/hn/Downloads/react-nodebird-master/ch2/front/node_modules/next/dist/server/render.js:638:21)

// 워닝은 무시하셔도 됩니다. antd 내부적으로 쓰고있어서 방법이 없습니다. ssr할때 antd 화면이 필요가 없어서 실제 영향은 없습니다.