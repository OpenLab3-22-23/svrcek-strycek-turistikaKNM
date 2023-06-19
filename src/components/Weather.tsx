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
          // console.log(VillageWeather.data.village_name);
          fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${VillageWeather.data.village_name}&units=metric&appid=4ed9898ef0d4415dd8423a2a74b26ef8`
          )
            .then((response) => {
              if (!response.ok) {
                console.log("error fetching weather");
              }
              return response.json();
            })
            .then((data) => setData(data));
        }
      }
    };
    fetchGPS();
  }, [navigate]);

  function DayCalculator(date) {
    var day = new Date(date);
    switch (day.getDay()) {
      case 0:
        day = "Ne";
        break;
      case 1:
        day = "Po";
        break;
      case 2:
        day = "Ut";
        break;
      case 3:
        day = "St";
        break;
      case 4:
        day = "Št";
        break;
      case 5:
        day = "Pi";
        break;
      case 6:
        day = "So";
    }
    return day;
  }

  return (
    <>
      {data && (
        <div className="mx-0 max-w-md p-8 mx-auto rounded-lg bg-[#060b26] dark:text-gray-100">
          <div className="flex justify-between space-x-8">
            <div className="flex flex-col items-center">
              <img
                className="w-24 h-24"
                src={
                  "https://openweathermap.org/img/wn/" +
                  data.list[0].weather[0].icon +
                  ".png"
                }
                alt=""
              />
              <h1 className="text-3xl font-semibold">{data.city.name}</h1>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-8xl">
                {Math.round(data.list[0].main.temp) + "°C"}
              </span>
              <span className="font-bold text-xl mt-7">
                {data.list[0].weather[0].main}
              </span>
            </div>
          </div>
          <div className="flex justify-between mt-8 space-x-4 dark:text-gray-400">
            <div className="flex flex-col items-center space-y-1">
              <span className="uppercase">
                {DayCalculator(data.list[7].dt_txt)}
              </span>
              <img
                src={`https://openweathermap.org/img/wn/${data.list[7].weather[0].icon}.png`}
                alt="Ikona pocasia"
                className="icon_1"
                id="icon_days"
              />
              <span>{Math.round(data.list[7].main.temp) + "°C"}</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="uppercase">
                {DayCalculator(data.list[15].dt_txt)}
              </span>
              <img
                src={`https://openweathermap.org/img/wn/${data.list[15].weather[0].icon}.png`}
                alt="Ikona pocasia"
                className="icon_2"
                id="icon_days"
              />
              <span>{Math.round(data.list[15].main.temp) + "°C"}</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="uppercase">
                {DayCalculator(data.list[23].dt_txt)}
              </span>
              <img
                src={`https://openweathermap.org/img/wn/${data.list[23].weather[0].icon}.png`}
                alt="Ikona pocasia"
                className="icon_2"
                id="icon_days"
              />
              <span>{Math.round(data.list[23].main.temp) + "°C"}</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="uppercase">
                {DayCalculator(data.list[31].dt_txt)}
              </span>
              <img
                src={`https://openweathermap.org/img/wn/${data.list[31].weather[0].icon}.png`}
                alt="Ikona pocasia"
                className="icon_2"
                id="icon_days"
              />
              <span>{Math.round(data.list[31].main.temp) + "°C"}</span>
            </div>
            <div className="flex flex-col items-center space-y-1">
              <span className="uppercase">
                {DayCalculator(data.list[39].dt_txt)}
              </span>
              <img
                src={`https://openweathermap.org/img/wn/${data.list[39].weather[0].icon}.png`}
                alt="Ikona pocasia"
                className="icon_2"
                id="icon_days"
              />
              <span>{Math.round(data.list[39].main.temp) + "°C"}</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
