import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import { supabase } from '../supabase/supabaseClient';
import { HikeCard } from '../components/HikeCard';
import { useAuth } from '../auth/Auth';

function Home() {
  const { session } = useAuth();

  const [hikes, setHikes] = useState([]);
  const [favHikes, setFavHikes] = useState([]);

  const fetchHikes = async () => {
    const { data, error } = await supabase.from("Hikes").select();
    if (data) {
      setHikes(data)
    }
    const favHikes = await supabase.from("profiles").select('saved_hikes').eq("id", session.user.id)
    if(favHikes.data){
      setFavHikes(favHikes.data[0].saved_hikes);
      console.log(favHikes.data)
    }
  }

  useEffect(() => {
    fetchHikes()
  }, [])

  function toggleHike(hikeId: number) {

  }
 
  return (
    <>
      <Navbar />
      <div className='big-flexbox'>
          {hikes && (
              <div className='small-flexbox'>
                {hikes.map(hike => (
                  favHikes.find(favhike => favhike === hike.id)
                  ?
                  <HikeCard toggleFav={(hikeId) => toggleHike(hikeId)} isFav={true} key={hike.id} hikeName={hike.name} hikeAltitude={hike.altitude} hikeId={hike.id} />
                  :
                  <HikeCard toggleFav={(hikeId) => toggleHike(hikeId)} isFav={false} key={hike.id} hikeName={hike.name} hikeAltitude={hike.altitude} hikeId={hike.id} />
                  
                  ))}
              </div>
          )}
      </div>
    </>
  )
}

export default Home