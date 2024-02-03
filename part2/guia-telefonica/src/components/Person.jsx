import React from 'react';

const Person = ({ persons, number, deletePerson }) => {

    return (
        <div>
            <p>{persons}: {number}</p>
            <button onClick={deletePerson}>Delete</button>
        </div>
    )


}

export default Person;
