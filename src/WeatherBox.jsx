import React from 'react';


const WeatherBox = ({weather,dateBuilder}) => {
    
    function stringToUpperCase(str) {
        if (!str) return str;
      
        return str[0].toUpperCase() + str.slice(1);
      }
      
    
    return (
        <div>
            <div className="location-box">
                <div className="location">{weather.name},{weather.sys.country}</div>
                <div className="date">{dateBuilder(new Date())}</div>
            </div>
            <div className="weather-box">
                <div className="temp">
                    {Math.round(weather.main.temp)}℃
                </div>
                <div className="weather">
                    {stringToUpperCase(weather.weather[0].description)}
                </div>
            </div>
        </div>
    );
};

export default WeatherBox;