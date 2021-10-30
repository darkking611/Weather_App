import React from "react";
import './style.scss';
import SunImg from '../../resources/images/sunny.png';
export default class WeatherUp extends React.Component{
    constructor(props){
        super(props);   
    }

    render(){
        const {isLoading, cityName, temperature, weather_descriptions, weather_icons, observation_time} = this.props;
        return <div className = "weather-container">
            <div className="header">{cityName}</div>
            <div className="inner-container">
                <div className = "image"><img src={weather_icons} /></div>
                <div className="current-weather">{temperature}°C</div>
            </div>
            <div className="footer">{weather_descriptions}</div>
        </div>
    }
}