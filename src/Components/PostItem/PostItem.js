import React from "react";
import "./PostItem.css";
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux'; 
import { flipCond } from '../../Features/postsSlice';

import up from '../../pics/up.svg'
import down from '../../pics/down.svg'


function PostItem(props) {
  const { post } = props;
  const dispatch = useDispatch();
  
  return (
    <div id='post'>
      <div className="post__left" id='post__left'>
        <div className="arrowPic"><img src={up}/></div>
        <span className="VoteNum">{post.upvote}</span>
        <div className="arrowPic"><img src={down}/></div>
      </div>

      <div className="post__right" id='post__right'>

        <h3 id="post__title">{post.title} </h3>
        {post.post_hint && <img src={post.image} alt="" />}
      </div>
      <div id='post__info'>
          <p>
            submitted an hour ago by{" "}
            {post.user} to{" "}
            {post.subreddit}
          </p>
          <p className="smallButton" onClick={()=>{
            dispatch(flipCond(post.id));
          }}>
          {post.comments_count} comments
          </p>
      </div>
    </div>
  );
}

export default PostItem;
