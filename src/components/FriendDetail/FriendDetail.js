import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';

const FriendDetail = () => {
  const {friendId} = useParams();
  const [friend, setFriend] = useState({});
  const history = useHistory();
  // console.log(params);
  useEffect(() => {
    const url =`https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(res => res.json())
    // .then (data => console.log(data))
    .then (data => setFriend(data))
    
  },[]);

  const handleBtn =() => {
   history.push('/friends')
  }
  
  return (
    <div>
      <h2>Friend detail is  Here:{friendId} </h2>
      <h2>{friend.name}</h2>
      <h2>{friend.phone}</h2>
      <h5>{friend.website}</h5>
      <p>Works at:{friend.company?.name} </p>
      <button onClick={handleBtn}>See All Friends </button>
    </div>
  );
};

export default FriendDetail;