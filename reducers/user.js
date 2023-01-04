//https://leehyungi0622.github.io/2021/05/17/202105/210514-React_with_NextJS/
export const initialState = {
    isLoggedIn: false,
    me: null,
    signUpData: {},
    loginData: {},
}

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