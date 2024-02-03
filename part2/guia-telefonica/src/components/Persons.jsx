import React from 'react';
import Person from './Person';

const Persons = ({filterPerson, deletePerson}) => {    
    return (
        <div>
            {filterPerson.map(person => {
                return (
                    <Person
                        key={person.id}
                        persons={person.name}
                        number={person.number}
                        deletePerson={() => deletePerson(person.id)}
                    />)
            })}
        </div>
    );
}

export default Persons;
