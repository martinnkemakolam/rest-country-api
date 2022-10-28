import { useState, useEffect, useRef} from "react"
function Country({imgSrc, countryName, countryPopulation, countryRegion, countryCapital, onClick, currentJson, mode}) {
  let [className, classNameObs] = useState(false)
  let ref = useRef(null)
  useEffect(()=>{
    let observer = new IntersectionObserver((entries)=>{
      entries.forEach((item)=>{
        classNameObs(item.isIntersecting)
      })
    },{
      root: null,
      threshold: 0.5,
      rootMargin: '-20px'
    })
    observer.observe(ref.current)
  }, [ref])
    return(
        <div ref={ref} className={ className ?'countryDetails' : 'countryDetails scale'} onClick={()=> onClick(currentJson, 'slide active')}>
        <img alt='country' src={imgSrc} className="country"></img>
        <div className={ mode?"detail dark": 'detail light'}>
          <h2>{countryName}</h2>
          <span>Population: {countryPopulation}</span>
          <span>Region: {countryRegion}</span>
          <span>Capital: {countryCapital}</span>
          {console.log('render')}
        </div>
      </div>
    )
}

export default Country