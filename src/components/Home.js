
import {FaSistrix} from 'react-icons/fa'
function Home({map, findFunc, filterFunc}) {
    return(
        <>
        <div className="top">
          <div className='searchDiv'>
            <input onChange={findFunc} id='Search' type='search'></input>
            <label htmlFor='Search'><FaSistrix style={{position: 'absolute', left: '10px', top: '7px'}}/></label>
          </div>
          <select onChange={filterFunc} for='lang'>
            <option value='Default'>Default</option>
            <option value='Africa'>Africa</option>
            <option value='Americas'>America</option>
            <option value='Asia'>Asia</option>
            <option value='Europe'>Europe</option>
            <option value='Africa'>Oceaniw</option>
          </select>
        </div>
        <div className="country">
          {map}
        </div>
        </>
    )
}

export default Home