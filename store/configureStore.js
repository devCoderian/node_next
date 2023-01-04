
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from "redux"; //createStore deprecated
import reducer from '../reducers';
import {composeWithDevTools}  from 'redux-devtools-extension';
// https://stackoverflow.com/questions/71944111/redux-createstore-is-deprecated-cannot-get-state-from-getstate-in-redux-ac

const configureStore = () => {

    const middlewares = []; //thunk나 saga 확장
    //리덕스의 기능이 확장 된거라 인헨서
    const enhancer = process.env.NODE_ENV === 'production'
    // ? compose(applyMiddleware([]))
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(reducer, enhancer);
    //미들웨어는 인헨서 넣어서 설정 가능
    //const store = createStore(reducer, enhancer);

    return store;

};


const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;

// getStaticProps, getServerSideProps연결을 위해 HYDRATE 사용