import React from 'react';

export default ({searchfield, searchChange}) => {
  return (
    <div className='pa2'>
      <input
        className='pa3 ba b--dark-red bg-light-yellow t-red'
        type='search'
        placeholder='find monsters'
        onChange={searchChange}
      />
    </div>
  );
}
