import React, { Component } from 'react'

import styles from './App.module.css';
import Landing from './components/landing/Landing';
import Charts from './components/chart/Charts';
import Country from './components/country/Country';
import { fetchData } from './api';

class App extends Component {
  state={
    data: {},
    country:''
  }

  async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data:fetchedData})
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);

    this.setState({ data, country: country });
  }


  render(){
    const{data , country}=this.state
  return (
    <div className={styles.container}>
      <h2 style={{fontFamily:"cursive",marginTop:"15px", textShadow:"1px 1px 2px black", color:"chocolate" }}>Covid 19 Tracker
      <i className="fa fa-map-marker ml-3" aria-hidden="true" /></h2>
     <Landing data={data}/>
     <Country handleCountryChange={this.handleCountryChange}/>
     <Charts data={data} country={country}/>
    </div>
  );
}
}

export default App;
