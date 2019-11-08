import React from 'react';

export default ({ name, email, id }) => {
  // https://robohash.org/${id}?200x200
  return (
    <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='card-img' src={`https://api.adorable.io/avatars/200/${id}.png`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

