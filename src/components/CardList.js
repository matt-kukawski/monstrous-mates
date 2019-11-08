import React, { Fragment } from 'react';
import Card from 'components/Card';

export default ({monsters}) => {
  const renderCards = monsters.map( monster => {
    return (
      <Card
        key={monster.id}
        name={monster.name}
        email={monster.email}
        id={monster.id}
      />
    );
  })

  return (
    <Fragment>
      {renderCards}
    </Fragment>
  );
}
