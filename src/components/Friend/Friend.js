import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
  const {id,name, phone, website, address, email} = props.friend;
  const history = useHistory();
  const friendStyle = {
    border: '3px solid goldenrod',
    padding: '10px',
    borderRadius: '10px',
    backgroundColor: 'lightgray'
  };
  const url = `/friend/${id}`;

  const handleButton = () => {
    history.push(`/friend/${id}`)
  }
  return (
    <div style={friendStyle}>
        <h1>I am : {name}ID no.{id} </h1>
        <h3>Call Me:{phone} </h3>
        <p>Visit me: {website}</p>
        <p>Visit me: {website}</p>
        <p>Email:{email} </p>
        <h3>Address:{address.city} </h3>
        <Link style={{backgroundColor:'lightgray', border: '1px solid green',borderRadius:'5px',padding:'5px'}}  to={url}>Visit Me </Link>
        <br />
        <Link>
        <button style={{backgroundColor:'goldenrod', border: '3px solid red',borderRadius:'10px',padding:'5px',margin:'5px'}}>Visit Us </button>
        </Link>
        <br />
        <button style={{backgroundColor:'goldenrod', border: '3px solid red',borderRadius:'10px',padding:'5px',margin:'5px'}} onClick={handleButton}>Visit Me 2</button>
        
    </div>
  );
};

export default Friend;