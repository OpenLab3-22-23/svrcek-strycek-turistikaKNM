import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import { supabase } from '../supabase/supabaseClient';
import { HikeCard } from '../components/MyFavHikes';
import { useAuth } from '../auth/Auth';

function Home() {
  const { session } = useAuth();

  const [fetchError, setFetchError] = useState("");
  const [hikes, setHikes] = useState([]);
  const [favHikes, setFavHikes] = useState([]);

  useEffect(() => {
    const fetchHikes = async () => {
      const { data, error } = await supabase.from("Hikes").select();
      if (error) {
        setFetchError('Fetch Error')
        setHikes([])
        console.log(error)
      }
      if (data) {
        setHikes(data)
        setFetchError("")
        console.log(data)
      }
    }
    const fetchFavHikes = async () => {
      const { data, error } = await supabase.from("profiles").select('saved_hikes').eq("id", session.user.id)
      if(data){
        setFavHikes(data);
        console.log(data)
      }
    }
    fetchFavHikes()
    fetchHikes()
  }, [])

  function toggleFavHike(id) {

  }


  return (
    <>
      <Navbar />
      <div className='big-flexbox'>
          {hikes && (
              <div className='small-flexbox'>
                {fetchError && (<p>{fetchError}</p>)}
                {hikes.map(hike => (
                  favHikes.find(favhike => favhike === hike.id)
                  ?
                  <HikeCard toggleFav={toggleFavHike(hike.id)} isFav={true} key={hike.id} hikeName={hike.name} hikeAltitude={hike.altitude} hikeId={hike.id} removeHike={() => RemoveFavHike(hike.id)}/>
                  :
                  <HikeCard toggleFav={toggleFavHike(hike.id)} isFav={false} key={hike.id} hikeName={hike.name} hikeAltitude={hike.altitude} hikeId={hike.id} removeHike={() => RemoveFavHike(hike.id)}/>
                  ))}
              </div>
          )}
      </div>
    </>
  )
}

export default Home