// import { HYDRATE } from 'next-redux-wrapper';
import { HYDRATE } from 'next-redux-wrapper'; //리덕스 서버 사이드 렌더링을 위해 HYDRATE 사용
import user from './user';
import post from './post';
import { combineReducers } from 'redux';

//https://leehyungi0622.github.io/2021/05/17/202105/210514-React_with_NextJS/
// export const initialState ={
//     user: {
//         isLoggedIn: false,
// 		user: null,
// 		signUpData: {},
// 		loginData: {},
//     },
//     posts: {
//         mainPosts: [],
//     }
// }

//(이전 상태, 액션) => 다음 상태
// const rootReducer = (state = initialState, action) => {
//     switch(action.type){
//         case HYDRATE:
//             console.log('HYDRATE');
//             return {...state, ...action.payload};
//         default:
//             return state;
//     }
// }


//const rootReducer = combineReducers({ user,post }); //HYDRATE(넥스트 서버사이드 렌더링을 위해) 넣기전 react에서만 사용
 const rootReducer = combineReducers({
    //서버사이드 렌더링을 위헤
    index: (state = {}, action) => {
        switch(action.type) {
            case HYDRATE:
                console.log('HYDRATE', action);
                return { ...state, ...action.payload };
            default:
                return state;
        }
    },
    user,
    post
 })

export default rootReducer;