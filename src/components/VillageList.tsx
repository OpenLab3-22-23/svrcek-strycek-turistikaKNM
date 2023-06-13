import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import supabase from "../supabase/supabaseClient";

function VillageList() {
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    async function getVillages() {
      const { data, error } = await supabase
        .from("Villages")
        .select(
          `id, village_name, erb_url, Hikes(id, name, altitude, time, distance)`
        );
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
              <li key={village.village_name} className="list-none w-1/4">
                <div className="bg-[#060b26] rounded-2xl m-4 border-solid border-[#060b26] hover:border-white">
                  <Link
                    className="flex flex-col items-center visited:text-transparent no-underline"
                    to={`${village.id}/${village.village_name}`}
                    state={{ erbUrl: village.erb_url, hikes: village.Hikes }}
                  >
                    <p className="text-4xl font-semibold tracking-wide text-slate-50 mb-4 mt-6">
                      {village.village_name}
                    </p>
                    <div className="bg-slate-50 rounded-2xl">
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
            ))
          : null}
      </ul>
    </div>
  );
}

export default VillageList;
