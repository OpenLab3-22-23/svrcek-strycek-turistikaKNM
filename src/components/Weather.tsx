import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import supabase from '../supabase/supabaseClient';

export default function Weather( { id } ) {
    
    const navigate = useNavigate();

    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchGPS = async () => {
          const { data, error } = await supabase.from('Hikes').select('village').eq('id', id).single();
    
          if (error) {
            navigate('/', { replace: true });
          }
    
          if (data) {
            fetch(
                `https://api.openweathermap.org/data/2.5/forecast?q=${data.village}&units=metric&appid=4ed9898ef0d4415dd8423a2a74b26ef8`
              )
                .then((response) => {
                  if (!response.ok) {
                    alert("No weather found.");
                    throw new Error("No weather found.");
                  }
                  return response.json();
                })
                .then((data) => setData(data));
          }
        }
        fetchGPS();
    }, [navigate])
    
    return (
    <div className="container">
        {data && (
          <div className="today">
          <div className="now">
              <img src={"https://openweathermap.org/img/wn/" + data.list[0].weather[0].icon +".png"} alt="" className="iconweather"/>
            <div className="now_info">
              <h4 className="city">{data.city.name}</h4>
              <div className="temp">{Math.round(data.list[0].main.temp*2)/2 + "°C"}</div>
              <div className="windspeed">{Math.round(data.list[0].wind.speed*2)/2 + " km/h"}</div>
              <div className="typeOfWeather">{data.list[0].weather[0].description}</div>
            </div>
          </div>
  
          <div className="cover">
              <div className="box">
                  <h4 className="day_1" id="day">{data.list[7].dt_txt}</h4>
                  <img src={`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}.png`} alt="Ikona pocasia" className="icon_1" id="icon_days" />
                  <h4 className="temp_1" id="temp">{Math.round(data.list[7].main.temp*2)/2 + "°C"}</h4>
              </div>
              <div className="box">
                  <h4 className="day_2" id="day">{data.list[15].dt_txt}</h4>
                  <img src={`https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}.png`} alt="Ikona pocasia" className="icon_2" id="icon_days" />
                  <h4 className="temp_2" id="temp">{Math.round(data.list[15].main.temp*2)/2 + "°C"}</h4>
              </div>
              <div className="box">
                  <h4 className="day_3" id="day">{data.list[23].dt_txt}</h4>
                  <img src={`https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}.png`} alt="Ikona pocasia" className="icon_3" id="icon_days" />
                  <h4 className="temp_3" id="temp">{Math.round(data.list[23].main.temp*2)/2 + "°C"}</h4>
              </div>
              <div className="box">
                  <h4 className="day_4" id="day">{data.list[31].dt_txt}</h4>
                  <img src={`https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}.png`} alt="Ikona pocasia" className="icon_4" id="icon_days" />
                  <h4 className="temp_4" id="temp">{Math.round(data.list[31].main.temp*2)/2 + "°C"}</h4>
              </div>
          </div>
      </div>
        )}
      </div>
  )
}