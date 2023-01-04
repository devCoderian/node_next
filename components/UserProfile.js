import { Avatar, Card, Button } from 'antd';
import React from 'react';
import { logoutAction } from '../reducers/user';
import { useDispatch } from 'react-redux';
const dummy = {
  nickname: '제로초',
  Posts: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};


const UserProfile = () => {

  const dispatch = useDispatch();
  const logout = () => {
    dispatch(logoutAction());
  }
  return (
    <Card
      actions={[
        <div key="twit">짹짹<br />{dummy.Posts.length}</div>,
        <div key="following">팔로잉<br />{dummy.Followings.length}</div>,
        <div key="follower">팔로워<br />{dummy.Followers.length}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
        title={dummy.nickname}
      />
      <Button onClick={logout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
