import React from 'react';
import Person from './Person';

const Persons = ({filterPerson}) => {
    return (
        <div>
            {filterPerson.map(person => {
                return (
                    <Person
                        key={person.id}
                        persons={person.name}
                        number={person.number}
                    />)
            })}
        </div>
    );
}

export default Persons;
