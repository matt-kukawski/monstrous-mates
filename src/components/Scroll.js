import React from 'react';

export default (props) => {
  // console.log(props);
  return (
    <div style={{ overflowY: 'scroll', border: '1px solid black', height: '500px' }}>
      { props.children }
    </div>
  );
}
