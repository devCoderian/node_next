//generate => 함수
const gen = function*(){}
console.log(gen);
gen().next();//generator는 next()를 사용해여 문법이 실행된다.

const gen01 = function*() {
    console.log(1);
    yield;
    console.log(2);
    yield;
    console.log(3);
    yield 4;
}

const generator = gen01();
generator.next();
generator.next();
generator.next();
// generator.next()
// index.2390f104.js:27 1
// {value: undefined, done: false}
// generator.next()
// index.2390f104.js:27 2
// {value: undefined, done: false}
// generator.next()
// index.2390f104.js:27 3
// {value: 4, done: false}
// done이 true가 될때까지

// 함수 중간에 멈추고 싶을 때 사용 일반함수로는 불가능인데 
// generator에서는 next를 더이상 호출안하면 함수를 멈추는 것이 가능하다

//saga에서 절대 멈추지 않는 제너레이터가 있다. while(true)문을 사용해서
const gen02 = function*(){ //무한반복이 
    while(true){
        yield '무한'
    }
}

let i = 0;
const gen03 = function*(){ //무한반복문
    while(true){
        yield i++;
    }
}

// 무한반복문을 통해 이벤트 리스너 같은 역할을 할 수 있다.
// click같은 이벤트가 있을때 g.next()를 호출하고
// yield 실행

import { all, fork, call, put, take, delay, takeEvery, takeLatest} from 'redux-saga/effects';
import axios from 'axios'

function logInAPI(data){
    // return axios.post('/api/login', data, a, b, c);
    return axios.post('/api/login', data);
}

function logOutAPI(){
    return axios.post('/api/logout');
}

function addPostAPI(){
    return axios.post('/api/post');
}

// const l = logIn({type: 'LOG_IN_REQUEST', data: {id: 'ian.jung4099@hncorp.world'}});
// l.next();
// l.next();

//logIn API 호출
function* logIn(action){
    try {
        // const result = yield call(logInAPI, action.data, 'a', 'b', 'c');
        /* 주석 해제 */
        //const result = yield call(logInAPI, action.data);
        // call을 써서 요청을 기다림 => fork는 비동기 이기 때문에 axios.post('/api/login'); 랑 마찬가지이다.
        // call axios.post('/api/login').then()
        
        /* 더미데이터 비동기 처리 */
        yield delay(2000);
        
        yield put({
            type: 'LOG_IN_SUCCESS',
            // data: result.data //성공 결과
        });

    } catch (err) {
        
        yield put({
            type: 'LOG_IN_FAILURE',
            data: err.response.data, //실패 결과
        })
    }
}



function* logOut(){
    try {
        
        // call을 써서 요청을 기다림 => fork는 비동기 이기 때문에 axios.post('/api/login'); 랑 마찬가지이다.
        // call axios.post('/api/login').then()
        
        /* 주석 해제 */
        //const result = yield call(logOutAPI);
        /* 더미데이터 비동기 처리 */
        yield delay(2000);

        yield put({
            type: 'LOG_OUT_SUCCESS',
            data: result.data
        })
        
    } catch (err) {
        yield put({
            type: 'LOG_OUT_FAILURE',
            data: err.response.data,
        })
    }
}

function* addPost(){
    try {
        const result = yield call(addPostAPI);
        yield put({
            type: 'ADD_POST_SUCCESS',
            data: result.data
        })
    } catch (error) {
        yield put({
            type: 'ADD_POST_FAILURE',
            data: error.response.data

        })
    }
    
}

// 비동기 액션 크리에이터(watchLogIn, watchLogOut, watchAddPost)
// 이벤트 리스너 같은 역할을 한다.
// 한번밖에 실행되지 않는다.
function* watchLogIn(){

    //takeEvery = while(true){takeEvery}
    // while(true){
    //     yield take('LOG_IN_REQUEST', logIn);
    // }
    // 클릭하는대로 요청
    //yield takeEvery('LOG_IN_REQUEST', logIn);
     //두번 실행을 막아야 할때 => 완료중인건 놔두고 동시에 로딩중인것만 취소
    // 요청은 두번이 가나 응답을 한번만 해준다. 서버에는 두번이 들어오기 때문에
    // 데이터가 저장이 되고 해당 중복데이터를 막기 위해서느  서버에서 검사를 한번 더 해주어야 한다.
    // yield throttle(요청, 시간); 해당 시간동안 요청을 못하도록 막기 => 보통 스크롤(디도스 공격 방어)에서 사용 , 데이터는 서버에서 중복검사 처리 권장/
    yield takeLatest('LOG_IN_REQUEST', logIn);

    // yield put({
    //     type: 'LOG_IN_SUCCESS'
    // })
}

function* watchLogOut(){
    // while(true){
    //     yield take('LOG_OUT_REQUEST', logIn);
    // }
    
    yield takeLatest('LOG_OUT_REQUEST', logOut);
    // yield put({
    //     type: 'LOG_OUT_SUCCESS'
    // })
}

function* watchAddPost(){
    
    // while(true){
    //     yield take('ADD_POST', addPost);
    // }
    yield takeLatest('ADD_POST', addPost); 
    
    // yield take('ADD_POST');
    // yield put({
    //     type: 'ADD_POST',
    // })
}

//리스너들 등록
export default function* rootSaga(){
    yield all([
        fork(watchLogIn), //fork 대신 call 사용가능 
        fork(watchLogOut),
        fork(watchAddPost)
    ])
}
/* fork vs call 
fork는 비동기 함수 호출 
call은 동기 함수 호출

all => 동시 실헹(fork, call)
generator 함수 실행하는 effects

debounce
요청이 들어오고 일정 시간을 기다린 후 요청을 수행한다. 만약 일정 시간 안에 같은 요청이 추가로 들어오면 이전 요청은 취소된다

throttle
일정 시간 동안 요청이 한 번만 수행되도록 한다.

throttle 보통 실행할 때

debouces는 마지막 요청
예를 들어 SNS에서 자주 쓰이는 무한 스크롤 기능에서는 debounce보다 throttle이 적합합니다. 유저가 스크롤링을 멈출 때까지 기다렸다가 새로운 글을 불러오는 것보다는 유저의 스크롤이 어느 정도 내려왔을 때 미리 글을 불러오는 것이 좀 더 좋은 경험을 제공할 수 있을 것입니다.

반면 toggle 버튼의 이벤트 리스너에는 debounce가 더 적합합니다.

저는 모바일에서 toggle 버튼이 있으면 항상 여러 번 눌러봅니다. 애니메이션을 보는 것이 재밌기도 하지만 앱이 죽나 안 죽나 보고 싶기도 합니다. 저와 같은 유저들의 횡포를 막기 위해서 toggle 이벤트 리스너에 어느 정도 debounce를 줘서 마지막으로 일어난 toggle의 요청만 처리하는 것이 좋을 것입니다.



*/