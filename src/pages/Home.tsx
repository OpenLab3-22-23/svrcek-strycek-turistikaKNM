import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import { supabase } from '../supabase/supabaseClient';
import { HikeCard } from '../components/MyFavHikes';

function Home() {

  const [fetchError, setFetchError] = useState("")
  const [hikes, setHikes] = useState([])

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
      }
    }
    fetchHikes()
  }, [])

  return (
    <>
      <Navbar />
      <div className='big-flexbox'>
          {hikes && (
              <div className='small-flexbox'>
                {fetchError && (<p>{fetchError}</p>)}
                {hikes.map(hike => (
                   <HikeCard key={hike.id} hikeName={hike.name} hikeAltitude={hike.altitude} hikeId={hike.id} removeHike={() => RemoveFavHike(hike.id)}/>
                ))}
              </div>
          )}
      </div>
    </>
  )
}

export default Home