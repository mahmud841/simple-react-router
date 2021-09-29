import React from 'react';
import { Link,useHistory } from 'react-router-dom';

const Post = (props) => {
  const { title, body,id } = props.post;
  const history = useHistory();

  const handleClick =() =>{
    history.push( `/post/${id}`);
  }
  return (
    <div>
      <h3>{title} </h3>
      <h4>{body} </h4>
      <Link to={`/post/${id}`} >Post Detail</Link>
      <br />
      <button onClick={handleClick}>Click to see daetail</button>
    </div>
  );
};

export default Post;