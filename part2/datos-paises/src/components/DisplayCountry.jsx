import Country from './Country';
import CountryDetails from './CountryDetails';
import WheatherDetails from './WheatherDetails';

const DisplayCountry = ({ searchCountrie, selectedCountry, onCountrySelect, weatherData }) => {
    // Función que maneja el evento de mostrar detalles de un país cuando se hace click en él
    const handleShow = (country) => {
        console.log('onClick', country)
        onCountrySelect(country)
    }

    // Verificamos si hay demasiados resultados en la búsqueda
    if (searchCountrie.length > 10) {
        return (
            // Si hay más de  10 coincidencias, mostramos un mensaje
            <p>Too many matches, specify another filter</p>
        )
    }

    // Si solo hay un resultado, mostramos los detalles del país y los datos climáticos
    if (searchCountrie.length === 1) {
        const country = searchCountrie[0] // Obtenemos el único país del array
        console.log('condi..', country)
        console.log('condi..w', weatherData)
        
        return (
            <div>
                <CountryDetails country={country} />
                <WheatherDetails weatherData={weatherData} />
            </div>
        )
    }

    // En caso contrario, mostramos todos los países filtrados y permitimos seleccionar uno
    return (
        <div>
            <CountryDetails country={selectedCountry} />
            <WheatherDetails weatherData={weatherData} />
            {searchCountrie.map(country => (
                <Country
                    key={country.ccn3}
                    country={country.name.common}
                    handleShow={() => handleShow(country)} // Pasamos la función handleShow como callback al hacer click              
                />
            ))}
        </div>
    );
}

export default DisplayCountry;
