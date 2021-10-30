import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

import "./sass/app.scss";
import TopComponent from './components/top/index';
import BottomComponent from './components/bottom/index';

import axios from "axios";

var WEATHER_KEY = "1215c4d9019c4d17a3f162142212910";

class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      cityName: "New York",
      isLoading: false
    };
  }
  

  componentDidMount(){
    const{ cityName, isLoading} = this.state;
    const URL = 'http://api.weatherapi.com/v1/current.json?key=1215c4d9019c4d17a3f162142212910&q=Bhubaneswar&aqi=no';
    var promise = axios.get(URL);
     var response = promise.then((response)=>response.data);
  
    console.log(response);
     
  
  }
  render(){
    const {
      isLoading, cityName, temperature,
      weather_descriptions, weather_icons, observation_time
    } = this.state;
    return <div className ="app-container">
      <div className="main-container">
        {isLoading && <h3>Loading Weather...</h3>}
        {!isLoading && (
          <div className = "top-section" >
          <TopComponent
            isLoading = {isLoading}
            location = {cityName}
            temperature = {temperature}
            weather_descriptions = {weather_descriptions}
            weather_icons = {weather_icons}
            observation_time = {observation_time}
          />
          </div>
        )}
        
        <div className = "bottom-section"><BottomComponent /></div>
      </div>
    </div>;
  }
}

export default App;
