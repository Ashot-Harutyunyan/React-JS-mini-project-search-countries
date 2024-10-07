import React from 'react'

function Countries({ countries, currentCountry, searchCountries, input }) {
  return (
    <div className='countries'>
      {input ? (
        searchCountries.map(({ flags, population, region, capital, name, maps }, index) => (
          <div key={index} className='container'>
            <div className='container-img'>
              <img src={flags.svg} alt="flag" />
            </div>
            <h2>{name.common}</h2>
            <p>Population - {population}</p>
            <p>Region - {region}</p>
            <p>Capital - {capital}</p>
            <a href={maps.googleMaps} target='_blank' rel='noreferrer'>Google Maps</a> 
          </div>
        ))
      ) : countries.length ? (
        currentCountry.map(({ flags, population, region, capital, name, maps }, index) => (
          <div key={index} className='container'>
            <div className='container-img'>
              <img src={flags.svg} alt="flag" />
            </div>
            <h2>{name.common}</h2>
            <p>Population - {population}</p>
            <p>Region - {region}</p>
            <p>Capital - {capital}</p>
            <a href={maps.googleMaps} target='_blank' rel='noreferrer'>Google Maps</a> 
          </div>
        ))
      ) : (
        <h2 className='Loading'>Loading...</h2>
      )}
    </div>
  )
}

export default Countries