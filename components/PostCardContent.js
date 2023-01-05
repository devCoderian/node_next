import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

//props types 라이브러리는 런타임 체크 가능 ex)외부 API가 잘못된 경우
//게시글 해시태그 링크로 만들기

const PostCardContent = ({ postData }) => ( // 첫 번째 게시글 #해시태그 #해시태그  
  <div>
    {/* /#[^\s]+/g */}
    {/* split안에서 사용하려면 () 삽입 */}
    {/* https://regexr.com/ => 정규식 체크 사이트*/}
    {/* 분할된 배열 map 돌리기 */}
    {/* postData.split(/(#[^\s]+)/g).map((item) => console.log(item)); */}
    {postData.split(/(#[^\s]+)/g).map((v, i) => {
      if (v.match(/#[^\s]+/)) { // 반복문 도는 대상과 일치하는 것 => 단수니까 g 제거
        return (
          //수정이 일어나지 않는 이상 수정될일 이 잘 없기 때문에 인덱스 사용 가능
          <Link
            key={v+i}
            href={{ pathname: '/hashtag', query: { tag: v.slice(1) } }}
            as={`/hashtag/${v.slice(1)}`} //v.slice(1) => 앞에 해시태그(#)를 제거
          >
            <a>{v}</a>
          </Link>
        );
      }
      //해당되지 않는 경우 => 그대로 리턴
      return v;
    })}
  </div>
);


PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
};

export default PostCardContent;
