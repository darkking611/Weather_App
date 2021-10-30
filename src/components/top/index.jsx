import React from "react";
import './style.scss';
import WeatherUp from "./weather";
export default class TopComponent extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const {
            isLoading, cityName, temperature,
            weather_descriptions, weather_icons, observation_time
          } = this.props;
        return <div className="top-container">
            <div className="title">Weather Up</div>
            <WeatherUp 
            isLoading = {isLoading}
            location = {cityName}
            temperature = {temperature}
            weather_descriptions = {weather_descriptions}
            weather_icons = {weather_icons}
            observation_time = {observation_time}
            />
            <button className="btn btn-select-location">Select Location</button>
        </div>;
    }
}