import React, { useEffect, useState } from 'react'

const Weathercard = ({tempInfo}) => {
    const [weatherMoodInfo,setWeatherMoodInfo]=useState('');
    const {
        temp,
        pressure,
        humidity,
        weathermood,
        country,
        sunset,
        name,
        speed
    }=tempInfo;

    useEffect(()=>{
        if(weathermood){
            switch(weathermood){
                case "Clouds":
                    setWeatherMoodInfo("wi-day-cloudy");
                    break;
                case "Clear":
                    setWeatherMoodInfo("wi-day-sunny");
                    break;
                case "Mist":
                    setWeatherMoodInfo("wi-dust");
                    break;
                case "Rain":
                    setWeatherMoodInfo("wi-day-rain");
                    break;
                case "Haze":
                    setWeatherMoodInfo("wi-day-haze");
                    break;
                default:
                    setWeatherMoodInfo("wi-day-sunny");
                    break;
            }
        }
    },[weathermood]);

    // converting sec into time
    let sec=sunset;
    let date=new Date(sec*1000);
    let sunsetTime=`${date.getHours()}:${date.getMinutes()}`;
  return (
    <>
      <article className='widget'>
        <div className='weatherIcon'>
           <i className={`wi ${weatherMoodInfo}`}></i>
        </div>
        <div className='weatherInfo'>
          <div className='temperature'>
            <span>{temp}&deg;</span>
          </div>
          <div className='description'>
            <div className='weatherCondition'>{weathermood}</div>
            <div className='place'>{name},{country}</div>
          </div>
        </div>
        <div className='date'>{new Date().toLocaleString()}</div>

        {/* 4 column section */}
        <div className='extra-temp'>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className='extra-info-leftside'>
                {sunsetTime} <br/>
                sunset
              </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className='extra-info-leftside'>
                {humidity} <br/>
                Humidity
              </p>
            </div>
          </div>
          <div className='temp-info-minmax'>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className='extra-info-leftside'>
                {pressure} <br/>
                pressure
              </p>
            </div>
            <div className='two-sided-section'>
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className='extra-info-leftside'>
                {speed} <br/>
                speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Weathercard;
