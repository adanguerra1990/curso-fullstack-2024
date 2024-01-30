import React from 'react';
import Person from './Person';

const Persons = ({persons, searchPerson}) => {
    return (
        <div>
            {persons.filter(person => person.name.toLowerCase().includes(searchPerson.toLowerCase())).map(person => {
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
