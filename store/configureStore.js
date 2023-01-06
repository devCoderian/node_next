
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from "redux"; //createStore deprecated
import reducer from '../reducers';
import {composeWithDevTools}  from 'redux-devtools-extension';
// https://stackoverflow.com/questions/71944111/redux-createstore-is-deprecated-cannot-get-state-from-getstate-in-redux-ac
import thunkMiddleware from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'; 
import rootReducer from '../reducers';
import rootSaga from '../sagas';
//3단 고차 함수
//console에 로깅 가능 , custom으로 만들어서 middleware로 사용가능
const loggerMiddleware = ({ dispatch, getState }) => (next) => (action) => {
    // console.log(dispatch, getState)
    // if(typeof action === 'function'){
    //     return action(dispatch, getState);
    // }
    console.log(action);
   return next(action)
}

const configureStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    // const middlewares = []; //없을 떄 비워둠
    const middlewares = [sagaMiddleware, loggerMiddleware]; //thunk나 saga 확장
    //리덕스의 기능이 확장 된거라 인헨서
    const enhancer = process.env.NODE_ENV === 'production'
    // ? compose(applyMiddleware([]))
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(applyMiddleware(...middlewares));

    const store = createStore(reducer, enhancer);
    //미들웨어는 인헨서 넣어서 설정 가능
    //const store = createStore(reducer, enhancer);
    store.sagaTask =sagaMiddleware.run(rootSaga);
    return store;    
};



function increment(){
    return {
         type: INCREMENT_COUNTER,
    }
}

// redux-thunk 쓰면 사용 가능
// thunk 지연의 의미를 가지고 있다 =>> dispatch를 좀 나중에 한꺼번에 처리해준다.
// 하나의 액션에서 dispatch 여러개의 비동기 요청이 가능
function incrementAsync(){
    return (dispatch) => {
        setTimeout(() => {
            dispatch(increment())
        }, 1000)
    }
}

function incrementfOdd(){
    return (dispatch, getState) => {
        const {counter} = getState();
    }
}

const wrapper = createWrapper(configureStore, {
    debug: process.env.NODE_ENV === 'development',
});

export default wrapper;

// getStaticProps, getServerSideProps연결을 위해 HYDRATE 사용