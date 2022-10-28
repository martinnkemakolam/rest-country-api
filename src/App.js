import React from 'react';
import Country from './components/Country';
import './index.css'
import react from 'react';
import Header from './components/Header';
import CountryDetail from './components/CountryDetail';
import Home from './components/Home';
class App extends React.Component{
  constructor(){
    super()
    this.inputRef = react.createRef()
  }
  state ={
    mode: true,
    arrayOfCountrie: [],
    filterByRegion: [],
    filterBol: false,
    toggleClass: false,
    ready: false,
    slideClassState: 'slide',
    slideJson: null
  }
  componentDidMount(){
    fetch('https://restcountries.com/v3.1/all')
    .then((res)=>{
      if (res.status === 200) {
        return res.json()
      }else{
        alert('check your signal')
      }
    })
    .then((res)=>{
      this.setState({
        arrayOfCountrie: res,
      })
    })
  }
  jsonMapper=(mapPath)=>{
    let currencies = 'No specific currency'
    if (typeof(mapPath) == 'object') {
      currencies = Object.values(mapPath).map((value, id)=>{
        if (id === 0) {
          if (typeof(value) == 'object' ) {
            return this.jsonMapper(value)
          }else{
            return value
          }
        }
      })
   
    }
    return currencies.toString()
  }
  filter=(e)=>{
    if (e.target.value === 'Default') {
      this.setState({
        filterBol: false
      })
      
      return
    }
    let filterdRegion = this.state.arrayOfCountrie.filter(country => e.target.value === country.region)
    this.setState({
      filterByRegion: filterdRegion,
      filterBol: true
    })
  }
  modeChg=()=>{
    this.setState({
      mode: !this.state.mode
    })
  }
  find=(e)=>{
    if (e.target.value === '') {
      this.setState({
        filterBol: true
      })
    }
    let reg = new RegExp(`^${e.target.value}`, 'gi') 
    let newFilter = this.state.arrayOfCountrie.filter((index)=>{
      if (reg.test(index.name.common)) {
        return index
      }
    })
    this.setState({
      filterByRegion: newFilter,
      filterBol: true
    })
  }

  render(){
    if (this.state.mode) {
    document.getElementsByTagName('body')[0].classList.add('dark')
    document.getElementsByTagName('body')[0].classList.remove('light')
    }else{
      document.getElementsByTagName('body')[0].classList.remove('dark')
      document.getElementsByTagName('body')[0].classList.add('light')
    }
    let slideClass = this.state.slideClassState
    let toggleClass=(current, arg)=>{
      this.setState({
        ready: true,
        slideJson: current,
        slideClassState: arg
      })
    }
    console.log(slideClass)
    let mapper = this.state.filterBol ? this.state.filterByRegion : this.state.arrayOfCountrie
    let map =  mapper.map((country, id)=>{
        return <Country key={id} countryName={country.name.official} imgSrc={country.flags.png} countryCapital={country.capital} countryRegion={country.region} countryPopulation={country.population} currentJson={country} mode={this.state.mode} onClick={toggleClass}/>
    })

    return (
      <>
      <Header mode={this.state.mode} onclick={this.modeChg}/>
      <Home map={map} filterFunc={this.filter} findFunc={this.find} mode={this.state.mode}/>
      { this.state.ready ? <CountryDetail country={this.state.slideJson} className={slideClass} onClick={toggleClass} countryArray={this.state.arrayOfCountrie}/> : null}
      </>
    )
  }
}

export default App;
