import React from 'react';

export default ({ name, email, id }) => {
  return (
    <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'>
      <img alt='card-img' src={`https://robohash.org/${id}?size=200x200&set=set2`} /> 
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
};

