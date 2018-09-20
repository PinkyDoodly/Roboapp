import React from 'react';
import '../components/Card.css';

const Card = ({name, email, id}) => {
  return (
    <div className="card grow growhover">
      <img alt='robots' src ={`https://robohash.org/${id}?size=200x200`}/>
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>

  );
}

export default Card;
