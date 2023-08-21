import React , { useEffect,useState } from 'react';
import { useDispatch,useSelector } from 'react-redux'; 

import CommentItem from "../commentItem/commentItem";
import { useParams } from 'react-router-dom';

import {addComment,clearComments} from '../../Features/commentsSlice';
import {commentsSelector} from '../../Features/commentsSlice';

function Comments(props) {
  const {subreddit} = useParams();
  let name = subreddit?subreddit:'popular';
  const [allCommentsSwitch,setAllCommentsSwitch] = useState(false);

  const id = props.id;
  const dispatch = useDispatch();
  const commentsLists = useSelector(commentsSelector);
  
  const url = `https://www.reddit.com/r/${name}/comments/${id}`;
  var commentsLength=0;
  useEffect( () => {
      const fetchRequest = ()=>{
        fetch(`${url}.json`)
        .then((response) => response.json())
        .then((i) => {
          dispatch(clearComments());
          const comments = i[1].data.children;
          if(allCommentsSwitch) {commentsLength = comments.length}
          else {commentsLength = comments.length>10?10:comments.length;}

          for(let i=0 ; i<commentsLength ; ++i){
            const elem = {
              user: comments[i].data.author,
              text: comments[i].data.body,
              id: comments[i].data.id,
              ups: comments[i].data.ups
            }
            dispatch(addComment(elem));
          }
      });
      } 
      fetchRequest();
      dispatch(clearComments());
    },[id,url,subreddit,dispatch,allCommentsSwitch]);
  
    return(
      <div className="comments">
        { commentsLists.map((comment) => (
          comment.text && <CommentItem comment={comment} key={comment.id} />
        )) }
        {(commentsLength<=10 && !allCommentsSwitch) && <p className="smallButton" onClick={()=>setAllCommentsSwitch(true)}>See all comments</p>}
      </div>
    );
}
  
  export default Comments;
  