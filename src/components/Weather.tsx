import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import supabase from "../supabase/supabaseClient";

export default function Weather({ id }) {
  const navigate = useNavigate();

  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchGPS = async () => {
      const { data, error } = await supabase
        .from("Hikes")
        .select("village")
        .eq("id", id)
        .single();
      console.log(data);
      if (error) {
        navigate("/", { replace: true });
      }
      if (data) {
        const VillageWeather = await supabase
          .from("Villages")
          .select("village_name")
          .eq("id", data.village)
          .single();

        if (VillageWeather) {
          console.log(VillageWeather.data.village_name);
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${VillageWeather.data.village_name}&units=metric&appid=4ed9898ef0d4415dd8423a2a74b26ef8`
          )
            .then((response) => {
              if (!response.ok) {
                console.log("error fetching weather")
              }
              return response.json();
            })
            .then((data) => setData(data));
        }
      }
    };
    fetchGPS();
  }, [navigate]);

  function stringCutter(str) {
    str = str.substring(0, str.indexOf(" "));
    return str;
  }

  return (
    <>
      {data && (
        <div className="allWeather">
          <h4 className="weather">Počasie</h4>

          <div className="today">
            <div className="lines">
              <h4 className="city">{data.city.name}</h4>
              <div className="line">
                {Math.round(data.list[0].wind.speed * 2) / 2 + " km/h"}
              </div>
              <div className="line">{data.list[0].weather[0].description}</div>
            </div>
            <div className="image">
              <img
                src={
                  "https://openweathermap.org/img/wn/" +
                  data.list[0].weather[0].icon +
                  ".png"
                }
                alt=""
              />
            </div>
            <div className="temp">
              <div>{Math.round(data.list[0].main.temp * 2) / 2 + "°C"}</div>
            </div>
          </div>
          <div className="box">
            <h4>{stringCutter(data.list[7].dt_txt)}</h4>
            <img
              src={`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}.png`}
              alt="Ikona pocasia"
              className="icon_1"
              id="icon_days"
            />
            <h4 className="temp_1" id="temp">
              {Math.round(data.list[7].main.temp * 2) / 2 + "°C"}
            </h4>
          </div>
          <div className="box">
            <h4>{stringCutter(data.list[15].dt_txt)}</h4>
            <img
              src={`https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}.png`}
              alt="Ikona pocasia"
              className="icon_2"
              id="icon_days"
            />
            <h4 className="temp_2" id="temp">
              {Math.round(data.list[15].main.temp * 2) / 2 + "°C"}
            </h4>
          </div>
          <div className="box">
            <h4>{stringCutter(data.list[23].dt_txt)}</h4>
            <img
              src={`https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}.png`}
              alt="Ikona pocasia"
              className="icon_3"
              id="icon_days"
            />
            <h4 className="temp_3" id="temp">
              {Math.round(data.list[23].main.temp * 2) / 2 + "°C"}
            </h4>
          </div>
          <div className="box" id="lastBox">
            <h4>{stringCutter(data.list[31].dt_txt)}</h4>
            <img
              src={`https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}.png`}
              alt="Ikona pocasia"
              className="icon_4"
              id="icon_days"
            />
            <h4 className="temp_4" id="temp">
              {Math.round(data.list[31].main.temp * 2) / 2 + "°C"}
            </h4>
          </div>
        </div>
      )}
    </>
  );
}
