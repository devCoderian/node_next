import React, { useState, useCallback } from 'react';
import { Card, Button, Avatar, Popover, List, Comment } from 'antd';
import PropTypes from 'prop-types';
import { RetweetOutlined, HeartTwoTone, HeartOutlined, MessageOutlined, EllipsisOutlined } from '@ant-design/icons';
import styled from 'styled-components';
import Link from 'next/link';
import CommentForm from './CommentForm';
import PostCardContent from './PostCardContent';
import PostImages from './PostImages';
import FollowButton from './FollowButton';
import { useSelector } from 'react-redux';

const dummyComments = [{
  User: {
    nickname: 'nero',
  },
  content: '우와 개정판이 나왔군요~',
}, {
  User: {
    nickname: 'hero',
  },
  content: '얼른 사고싶어요~',
}];

const CardWrapper = styled.div`
  margin-bottom: 20px;
`;

const PostCard = ({ post }) => {
  console.log('post-------', post)

  //const {me} = useSelector((state) => state.user);
  //const id = me && me.id;
  //const id = me?.id; //옵셔널 체이닝 연산자
  
  // const {me} = useSelector((state) => state.user);
  // console.log(me)
  const id = useSelector((state) => state.user?.me?.id);

  // console.log(id);

  const [commentFormOpened, setCommentFormOpened] = useState(false);
  const [liked, setLiked] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommentFormOpened((prev) => !prev);
  }, []);

  return (
    <CardWrapper key={post.id}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images} />}
        //배열안에 JSX를 넣을때는 key를 붙여주어야한다.
        actions={[
          <RetweetOutlined key="retweet" />,
          liked
            ? <HeartTwoTone twoToneColor="#eb2f96" key="heart" onClick={onToggleLike} />
            : <HeartOutlined key="heart" onClick={onToggleLike} />,
          //댓글
          <MessageOutlined key="message" onClick={onToggleComment} />,
          // 더보기
          <Popover 
            key="ellipsis"
            content={(
              <Button.Group>
                 {id && post.User.id === id ? (
                  <>
                  <Button danger>삭제</Button>
                  <Button>수정</Button>
                  </>
               ) : <Button danger>신고</Button>}
              </Button.Group>
            )}
          >
            <EllipsisOutlined />
          </Popover>,
        ]}
        extra={<FollowButton post={post} />}
        >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={<PostCardContent postData={post.content} />}
        />
      </Card>
      
      <CommentForm post = {post} />
      {commentFormOpened && (
        <>
          <CommentForm post={post} />
          <List
            header={`${dummyComments.length} 댓글`}
            itemLayout="horizontal"
            dataSource={dummyComments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={(
                    <Link href={{ pathname: '/user', query: { id: item.User.id } }} as={`/user/${item.User.id}`}>
                      <a><Avatar>{item.User.nickname[0]}</Avatar></a>
                    </Link>
                  )}
                  content={item.content}
                />
              </li>
            )}
          />
        </>
      )}
    </CardWrapper>
  );
};

PostCard.propTypes = {

  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    Images: PropTypes.arrayOf(PropTypes.shape({
      src: PropTypes.string,
    })),
    createdAt: PropTypes.object,
  }),
};

export default PostCard;
