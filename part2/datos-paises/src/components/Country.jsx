import React from 'react';

const Country = ({country, handleShow}) => {
    
    return (
        <div key={country.ccn3}>
            <p>{country}</p>
            <button onClick={handleShow}>Show</button>       
        </div>
    );
}

export default Country;
