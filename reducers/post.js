

export const initialState ={
    mainPosts: [{
        id: 1,
        User:{
            id: 1,
            nickname: '제로초'
        },
        content: '첫 번째 게시글 #해시태그 #익스프레스',
        Images: [{
            src: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
          }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001958/rn_view_BN001958.jpg',
          }, {
            src: 'https://gimg.gilbut.co.kr/book/BN001998/rn_view_BN001998.jpg',
          }]
    }],
    Comments: [
        {User: {
            nickname: 'nero'
        },
        content: 'nero~!~!~!',
        },
        {User: {
            nickname: 'nero2'
        },
        content: 'nero2~!~!~!',
        },
    ],
    imagePaths: [],
    postedAdd: false, //추가 완료 시
};

const ADD_POST = 'ADD_POST';


const dummyPost = {
    id: 2,
    content: '!더미데이터',
    User: {
        id: 1,
        nickname: 'ian'
    },
    Images: [],
    Comments: [],
}

export const addPost = (data) => {
    return {
        type: ADD_POST,
        data
        }    
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case ADD_POST:
            return {
                ...state,
                ////앞으로 추가해야 반복문돌면서 위에서 포스팅을 로드할 수 있기 때문에 돌기 때문
                mainPosts: [action.data, ...state.mainPosts],
                postAdded: true,
              
            }
        default:
            return state;
    }
};

export default reducer;