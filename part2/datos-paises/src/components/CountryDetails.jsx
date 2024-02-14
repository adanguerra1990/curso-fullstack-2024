import React from 'react';

const CountryDetails = ({ country }) => {
    if (!country) return  null
    return (
        <div key={country.ccn3}>
            <h1>{country.name.common}</h1>
            <img src={country.flags.png} alt={country.flags.alt} />
            <p>Capital: {country.capital[0]}</p>
            <p>Area: {country.area} km²</p>
            <p>Idiomas: </p>
            <ul>
                {Object.values(country.languages).map((language, index) => (
                    <li key={index}>{language}</li>
                ))}
            </ul>
        </div>

    );
}

export default CountryDetails;
