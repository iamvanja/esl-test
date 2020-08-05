import React from 'react';

const Person = (props) => {
  return (
    <div>{JSON.stringify(props, null, 2)}</div>
  );
}

export default Person;
