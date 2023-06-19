import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import supabase from "../supabase/supabaseClient";
import Mapa from "../components/Mapa";
import { useAuth } from "../auth/Auth";
import Weather from "../components/Weather";

function Details() {
  const { session } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [altitude, setAltitude] = useState(0);
  const [distance, setDistance] = useState(0);
  const [description, setDescription] = useState("");
  const [time, setTime] = useState();
  const [GPSN, setGPSN] = useState();
  const [GPSE, setGPSE] = useState();
  const [vilige, setVillige] = useState();


  useEffect(() => {
    const fetchHike = async () => {
      const { data, error } = await supabase
        .from("Hikes")
        .select()
        .eq("id", id)
        .single();

      if (error) {
        navigate("/", { replace: true });
      }

      if (data) {
        setName(data.name);
        setAltitude(data.altitude);
        setDistance(data.distance);
        setDescription(data.description);
        setTime(data.time);
        setGPSN(data.GPSN.toFixed(4));
        setGPSE(data.GPSE.toFixed(4));
        
        const VillageWeather = await supabase
          .from("Villages")
          .select("village_name")
          .eq("id", data.village)
          .single();

        if (VillageWeather) {
          setVillige(VillageWeather.data.village_name);
        }
      }
    };
    fetchHike();
  }, [id, navigate]);

  return (
    <>
      <Navbar />
      {session ? (
        <div className="flex flex-col justify-center items-center my-8 mx-40 ">
          <h2 className="text-5xl">{name}</h2>
          <div className="w-full flex justify-between mt-8 -z-10">
            <div className="py-1 bg-blueGray-50">
              <div className="w-full px-4 mx-0">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white ">
                  <div className="rounded-t mb-0 px-4 py-3 border-0">
                    <div className="flex flex-wrap items-center">
                      <div className="relative w-full px-4 max-w-full flex-grow flex-1">
                        <h3 className="font-semibold text-blueGray-700 my-0 text-center text-3xl">
                          Informácie
                        </h3>
                      </div>
                    </div>
                  </div>

                  <div className="block w-full overflow-x-auto">
                    <table className="items-center w-full border-collapse text-blueGray-700  ">
                      <thead className="thead-light ">
                        <tr>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-1 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
                          <th className="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-1 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"></th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                            Dedina:
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                            {vilige}
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                            GPS:
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                            N {GPSN} - E 0{GPSE}
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                            Vzdialenosť:
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 ">
                            {distance} km
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                            Nadm. Výška:
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                            {altitude} m.n.m
                          </td>
                        </tr>
                        <tr>
                          <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left">
                            Čas:
                          </th>
                          <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4">
                            {time}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-6/12 flex flex-col justify-center bg-[#060b26] rounded-3xl text-white my-8 px-8">
              <h3 className="text-2xl mb-0">Popis:</h3>
              <p>{description}</p>
            </div>
          </div>
          <div className="w-full flex justify-between">
            <Weather id={id} />
            <Mapa id={id} />
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}

export default Details;
