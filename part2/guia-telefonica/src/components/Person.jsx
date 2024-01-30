import React from 'react';

const Person = ({persons, number}) => {
    console.log('compo.Person', persons)
    return <p>{persons}: {number}</p>
}

export default Person;
