function CountryDetail({country, className, onClick, countryArray}) {
  console.log(country)
    let linkButton = typeof(country.borders) === 'object' ? country.borders.map((value, id)=>{
      let newCountry = countryArray.filter((ele)=> ele.cca3 === value)
        return(
            <button key={id} onClick={()=>{onClick(newCountry[0], 'slide active')}}>{value}</button>
        )
    }) : 'No boarder country' 
    let jsonMapper=(mapPath)=>{
        let currencies = 'No specific currency'
        if (typeof(mapPath) == 'object') {
          currencies = Object.values(mapPath).map((value, id)=>{
            if (id === 0) {
              if (typeof(value) == 'object' ) {
                return jsonMapper(value)
              }else{
                return value
              }
            }
          })
        }
        return currencies.toString()
      }
    return(
        <div className={className}>
        <button onClick={()=>{onClick(country, 'slide')}}>Back</button>
            <div className="countryPersonalInfo">
                <img src={country.flags.png} alt={country.name.official}></img>
                <div className="leftOrBottom">
                    <h2>{country.name.official}</h2>
                    <div className="countryInfo">
                        <div className="left">
                            <p>Native Name: <span>{jsonMapper(country.name.nativeName)}</span></p>
                            <p>Population: <span>{country.population}</span></p>
                            <p>Region: <span>{country.region}</span></p>
                            <p>Subregion: <span>{country.subregion}</span></p>
                            <p>capital: <span>{country.capital}</span></p>
                        </div>
                        <div className="right">
                            <p>Top Level Domain: <span>{country.tld}</span></p>
                            <p>Currencies: <span>{jsonMapper(country.currencies)}</span></p>
                            <p>Languages: <span>{jsonMapper(country.languages)}</span></p>
                        </div>
                    </div>
                    <div>
                       <p>Border Countries: {linkButton}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default CountryDetail