import React from 'react';

const Filter = ({ handleSearhPerson }) => {
    return (
        <div>
            Filter shown with<input onChange={handleSearhPerson} />
        </div>
    );
}

export default Filter;
