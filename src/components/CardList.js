import React, { Fragment } from 'react';
import Card from 'components/Card';

export default ({robots}) => {
  const renderCards = robots.map( robot => {
    return (
      <Card
        key={robot.id}
        name={robot.name}
        email={robot.email}
        id={robot.id}
      />
    );
  })

  return (
    <Fragment>
      {renderCards}
    </Fragment>
  );
}
