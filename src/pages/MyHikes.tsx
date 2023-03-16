import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/Auth';
import HikeCard from '../components/HikeCard';
import Navbar from '../components/Navbar'
import supabase from '../supabase/supabaseClient';

function MyHikes() {
  const { session } = useAuth();

  const [fetchError, setFetchError] = useState("")
  const [hikes, setHikes] = useState([])

  useEffect(() => {
    const fetchHikes = async () => {
      const { data, error } = await supabase.from("Hikes").select().eq("id", "1");
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
      {session ? (
        <>
        <h2>Saved hikes by: {session.user.id}</h2>
        <div className='big-flexbox'>
          {hikes && (
              <div className='small-flexbox'>
                {fetchError && (<p>{fetchError}</p>)}
                {hikes.map(hike => (
                  <HikeCard key={hike.id} hike={hike} />
                ))}
              </div>
          )}
        </div>
        </>
      ) : <Navigate to="/login" />}
    </>
  )
}

export default MyHikes