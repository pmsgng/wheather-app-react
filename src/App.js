import React, { useState } from 'react';
import WeatherBox from './WeatherBox';
import ErrorWeather from './ErrorWeather';

const api = {
  key: '83c53addba9a911adc72132a8321e587',
  base: 'https://api.openweathermap.org/data/2.5/'
}

function App() {
  const [query,setQuery] = useState('');
  const [weather,setWeather] = useState({})

  const search = (e) => {
    if(e.key === 'Enter')
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(result => {
      setWeather(result)
      setQuery('')
      console.log(result)
    })
    
  }


  const dateBuilder = (d) => {
    let months = ['Январь','Февраль','Март','Апрель','Май','Июнь','Июль','Август','Сентябрь','Октябрь','Ноябрь','Декабрь'];
    let days = ['Понедельник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье']

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`
  }

  const renderWeather = () => {

    if(typeof weather.main !== 'undefined') {
      return <WeatherBox dateBuilder={dateBuilder} weather={weather} />
    } else if(weather.cod === '404') {
      return <ErrorWeather />
    } else {
      return ''
    }
  }

  return (
    <div className={(typeof weather.main != 'undefined') ? ((weather.main.temp > 5) ? 'app warm' : 'app'): 'app'}>
      <main>
        <div className="search-box">
          <input 
            type="text"
            placeholder='Найти...'
            className='search-bar'
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyDown={search}
          />
        </div>
        {renderWeather()}
      </main>
    </div>
  );
}

export default App;
