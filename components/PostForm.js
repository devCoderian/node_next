import React, { useCallback, useRef, useState } from 'react';
import { Form, Input, Button } from 'antd';
import { useSelector, useDispatch} from 'react-redux';
import { addPost } from '../reducers/post';
// const dummy = {
//   isLoggedIn: true,
//   imagePaths: [],
//   mainPosts: [{
//     User: {
//       id: 1,
//       nickname: '제로초',
//     },
//     content: '첫 번째 게시글',
//     img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
//   }],
// };


const PostForm = () => {
  
  const dispatch = useDispatch();
  const imageInput = useRef();
  const {imagePaths} = useSelector((state) => state.post);

  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  const [text, setText] = useState(''); 
  
  console.log(text);
  
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

  const onChangeText = useCallback((e) => {
    console.log('dsads',e.target.value);
    setText(e.target.value);
  })

  const onSubmit = useCallback(() => {
    console.log('onSubmit', text);
    // dispatch(addPost(text));
    dispatch(addPost(dummyPost));
    setText("");
  },[text]);

  return (
    <Form style={{ margin: '10px 0 20px' }} encType="multipart/form-data" onFinish={onSubmit}>
      <Input.TextArea 
        value={text}
        onChange={onChangeText}
        maxLength={140} 
        placeholder="어떤 신기한 일이 있었나요?" />
      <div>
        {/* ref왜 넣었지? 실제 DOM에 접근하기 위해 사용*/}
        <input type="file" multiple hidden ref={imageInput} />
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: 'right' }} htmlType="submit">짹짹</Button>
      </div>
      <div>
        {/* {imagePaths.map((item) => <div>{item}</div>)} */}

        {imagePaths.map((v) => {
          return (
            <div key={v} style={{ display: 'inline-block' }}>
              <img src={`http://localhost:3065/${v}`} style={{ width: '200px' }} alt={v} />
              <div>
                <Button>제거</Button>
              </div>
            </div>
          )
        })}
      </div>
    </Form>
  );
};

export default PostForm;
