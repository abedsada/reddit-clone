import React , { useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux'; 
import PostItem from "../PostItem/PostItem";
import { useParams } from 'react-router-dom';
import {addPost,clearPosts} from '../../Features/postsSlice';
import {postsSelector} from '../../Features/postsSlice';
import Comments from "../Comments/Comments";


function Posts() {
    const {subreddit} = useParams();

    let name = subreddit?subreddit:'popular';
    const url = `https://www.reddit.com/r/${name}`;
    const dispatch = useDispatch();
    const postsList = useSelector(postsSelector);
  
    useEffect( () => {
        dispatch(clearPosts());
        const fetchRequest = ()=>{
          fetch(`${url}.json`)
          .then((response) => response.json())
          .then((i) => {
            const data = i.data.children;
            const length = data.length;
            for (let index = 1; index <length ; index++) {
                if(data[index].data.over_18===true) continue;
                const newElem = {
                  image: data[index].data.url_overridden_by_dest,
                  title: data[index].data.title,
                  key: index,
                  id:  data[index].data.id,
                  user: data[index].data.author,
                  upvote: data[index].data.ups,
                  subreddit: data[index].data.subreddit,
                  comments_count: data[index].data.num_comments,
                  post_hint: data[index].data.post_hint,
                  cond: false
                };
                dispatch(addPost(newElem));
            }
        });
        }
        fetchRequest();
      },[subreddit,url,dispatch]);
    return (
        <div>
            {postsList.map((post) => (
              <div>
                <div  className={`post box A${post.id}`}>
                  <PostItem post={post} />
                </div>
                { post.cond && <Comments id={post.id}/>}
              </div>
            ))}
        </div>
    )
}
export default Posts;

