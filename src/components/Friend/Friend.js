import React from 'react';

const Friend = (props) => {
  const {name, phone, website, address, email} = props.friend;
  const friendStyle = {
    border: '3px solid goldenrod',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: 'lightgray'
  }
  return (
    <div style={friendStyle}>
        <h1>I am : {name} </h1>
        <h3>Call Me:{phone} </h3>
        <p>Visit me: {website}</p>
        <p>Visit me: {website}</p>
        <p>Email:{email} </p>
        <h3>Address:{address.city} </h3>
        
    </div>
  );
};

export default Friend;