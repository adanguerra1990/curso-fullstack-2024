import Country from './Country';
import CountryDetails from './CountryDetails';
import WheatherDetails from './WheatherDetails';

const DisplayCountry = ({ searchCountrie, selectedCountry, onCountrySelect, weatherData }) => {
    const handleShow = (country) => {
        console.log('onClick', country)
        onCountrySelect(country)
    }

    if (searchCountrie.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    }

    if (searchCountrie.length === 1) {
        const country = searchCountrie[0]
        console.log('condi..', country)
        console.log('condi..w', weatherData)
        
        return (
            <div>
                <CountryDetails country={country} />
                <WheatherDetails weatherData={weatherData} />
            </div>
        )
    }

    return (
        <div>
            <CountryDetails country={selectedCountry} />
            <WheatherDetails weatherData={weatherData} />
            {searchCountrie.map(country => (
                <Country
                    key={country.ccn3}
                    country={country.name.common}
                    handleShow={() => handleShow(country)}                  
                />
            ))}
        </div>
    );
}

export default DisplayCountry;
