import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import supabase from '../supabase/supabaseClient';

function VillageList() {
  const [villages, setVillages] = useState([]);

  useEffect(() => {
    async function getVillages() {
      const { data, error } = await supabase
        .from('Villages')
        .select(`id, village_name, erb_url, Hikes(id, name)`);
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
      <ul className='flex flex-row'>
        {villages
          ? villages.map((village) => (
              <li key={village.village_name} className='list-none m-4'>
                <div>
                  <p className='text-4xl'>{village.village_name}</p>
                  <p>{village.Hikes.length}</p>
                  <img alt='Obrazok obce' src={village.erb_url} />
                  <Link
                    to={`${village.id}/${village.village_name}`}
                    state={{ erbUrl: village.erb_url, hikes: village.Hikes }}
                  >
                    KLIIIIIIK
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
