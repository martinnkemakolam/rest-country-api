function Country({imgSrc, countryName, countryPopulation, countryRegion, countryCapital, onClick, currentJson}) {
    return(
        <div className="countryDetails" onClick={()=> onClick(currentJson, 'slide active')}>
        <img alt='country' src={imgSrc} className="country"></img>
        <div className="detail">
          <h2>{countryName}</h2>
          <span>Population: {countryPopulation}</span>
          <span>Region: {countryRegion}</span>
          <span>Capital: {countryCapital}</span>
        </div>
      </div>
    )
}

export default Country