import React from 'react';

const Person = ({
  firstName,
  lastName,
  id,
  email
}) => {
  return (
    <div className="person-item">
      {id}: {firstName} {lastName} {''}
      <div>{email}</div>
    </div>
  );
}

export default Person;
