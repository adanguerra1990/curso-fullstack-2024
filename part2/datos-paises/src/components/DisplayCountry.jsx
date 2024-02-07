import React from 'react';
import Country from './Country';

const DisplayCountry = ({ searchCountrie }) => {
    
    console.log('compoSearch', searchCountrie)    

    if (searchCountrie.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    if (searchCountrie.length === 1) {
        const country = searchCountrie[0]
        console.log('condi..', country)
        return (
            <div>
                <h1>{country.name.common}</h1>
                <img src={country.flags.png} alt='flag' />
                <p>Capital: {country.capital[0]}</p>
                <p>Area: {country.area} km²</p>
                <p>Idiomas: </p>
                <ul>
                    {Object.values(country.languages).map((language, index) => (
                        <li key={index}>{language}</li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <div>
            {searchCountrie.map(country => (
                <Country 
                    key={country.id}
                    country={country.name.common}
                />
                
            ))}
        </div>
    );
}

export default DisplayCountry;
