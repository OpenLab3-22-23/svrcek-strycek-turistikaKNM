import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../supabase/supabaseClient";

function VillageList() {
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    async function getVillages() {
      const { data, error } = await supabase
        .from("Villages")
        .select(`id, village_name, erb_url, Hikes(id, name, altitude, time, distance)`);
      if (!error) {
        setVillages(data);
        console.log(data);
      } else {
        console.log(error);
      }
    }
    getVillages();
  }, []);

  return (
    <div>
      <ul className="flex flex-row flex-wrap p-0">
        {villages
          ? villages.map((village) => (
              <div className="list-none w-1/4">
                <li key={village.village_name}>
                  <div className="bg-[#060b26] rounded-lg m-4">
                    <Link
                      className="flex flex-col items-center visited:text-transparent"
                      to={`${village.id}/${village.village_name}`}
                      state={{ erbUrl: village.erb_url, hikes: village.Hikes }}
                    >
                      <p className="text-4xl font-semibold tracking-wide text-slate-50 mb-4 mt-6">
                        {village.village_name}
                      </p>
                      <div className="bg-slate-50 rounded-lg">
                        <img
                          className="m-6"
                          alt="Obrazok obce"
                          src={village.erb_url}
                        />
                      </div>
                      <p className="text-slate-50 text-xl">
                        Number of Hikes: {village.Hikes.length}
                      </p>
                    </Link>
                  </div>
                </li>
              </div>
            ))
          : null}
      </ul>
    </div>
  );
}

export default VillageList;
