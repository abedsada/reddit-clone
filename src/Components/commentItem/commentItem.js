import React from "react";
import "./commentItem.css";

function CommentItem(props) {
  const { comment } = props;
  
  return (
    <div className="Comment box">
      {/*<div className="Comment__left">
        <i className="fas fa-caret-up"></i>
        <span style={{color:'black'}}>{comment.ups}</span>
        <i className="fas fa-caret-down"></i>
      </div>*/}
      <div className="Comment__right">
        <span>
          {comment.user} 
        </span>
        <h3>: {comment.text} [{comment.ups} ups]</h3>
      </div>

    </div>
    );
}

export default CommentItem;
