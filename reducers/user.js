//https://leehyungi0622.github.io/2021/05/17/202105/210514-React_with_NextJS/
export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
}

// redux-thunk vs saga 
// 한번에 디스패치를 여러번 할 수 있게 해준다 => 이기능밖에 없음
// saga는 delay등 사용할 수 있다. thunk는 js로 setTimeout 직접 구현
// takeLatest등 두번 클릭방지를 금지 할 수 있다. thunk는 직접 구현 throttle든 스크롤 비동기 요청
// 프론트에서 디도스 공격 가능 , UI등 클라이언트 쪽 보안 가능
// debounce로 방지 가능

// 복잡할때는 사가
export const loginAction = (data) => {
    return {
        type: 'LOG_IN',
        data,
    }
}

export const logoutAction = (data) => {
    return {
        type: 'LOG_OUT',
        data,
    }
}
export const loginRequestAction = (data) => {
    return {
        type: 'LOG_IN_REQUEST',
        data
    }
}

//(이전 상태, 액션) => 다음 상태
const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'LOG_IN': 
        return {
            ...state, 
            isLoggedIn: true,
            me: action.data,
        };
        case 'LOG_OUT': 
        return {
            ...state, 
            isLoggedIn: false,
            me: null,
        }
        default:
            return state;
    }
}

export default reducer;