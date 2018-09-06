import React, { Component } from 'react';
import './App.css';
import LogoAndName from './components/LogoAndName';
import SearchBar from './components/SearchBar';

class App extends Component {
  constructor(){
    super();
    fetch("http://api.kmhfltest.health.go.ke/api/facilities/facilities/",{headers:{
      header:{
        "Authorization":'Basic '
      }
    }})

  }
  render() {
    return (
      <div className="App">
     
      <LogoAndName/>
      
      <SearchBar/>
      </div>
    );
  }
}

export default App;
