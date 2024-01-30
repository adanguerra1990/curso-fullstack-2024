import React from 'react';

const Person = ({persons}) => {
    console.log('compo.Person', persons)
    return <p>{persons}</p>
}

export default Person;
