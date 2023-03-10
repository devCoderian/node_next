import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import { Col, Input, Menu, Row } from 'antd';

import LoginForm from './LoginForm';
import UserProfile from './UserProfile';
import {useSelector} from 'react-redux';

const dummy = {
  nickname: '제로초',
  Post: [],
  Followings: [],
  Followers: [],
  isLoggedIn: false,
};

const AppLayout = ({ children }) => {

  const { isLoggedIn } = useSelector((state) => state.user);
  const mainPosts = useSelector((state) => state.post);
  
  console.log('isLoggedIn', isLoggedIn);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
        <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
        <Menu.Item key="mail">
          <Input.Search enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn
            ? <UserProfile />
            : <LoginForm />}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="https://www.zerocho.com" target="_blank" rel="noreferrer noopener">Made by ZeroCho</a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default AppLayout;
