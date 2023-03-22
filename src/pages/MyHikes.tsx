import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/Auth';
import HikeCard from '../components/HikeCard';
import Navbar from '../components/Navbar'
import supabase from '../supabase/supabaseClient';

function MyHikes() {
  const { session } = useAuth();

  const [fetchError, setFetchError] = useState("")
  const [savedHikes, setSavedHikes] = useState([])
  let savedArray: Array<Number> = []; 

  useEffect(() => {
    async function retrieveSavedHikes() {
      await fetchSaved()
      await fetchHikes()
    }
    retrieveSavedHikes()
  }, [])

  async function fetchSaved() {
      const { data, error } = await supabase.from("profiles").select('saved_hikes').eq("id", session.user.id)
      if (error) {
        setFetchError('Fetch Error')
        console.log(error)
      }
      if (data) {
        savedArray = data[0].saved_hikes;
        setFetchError("")
      }
    }

    async function fetchHikes() {
      const { data, error } = await supabase.from("Hikes").select().in('id', savedArray);
      if (error) {
        setFetchError('Fetch Error')
        setSavedHikes([])
        console.log(error)
      }
      if (data) {
        if (savedArray.length == 0) {
          setFetchError('You have no saved hikes!')
        } else {
          data.sort((a, b) => savedArray.indexOf(b.id) - savedArray.indexOf(a.id))
          setSavedHikes(data)
          setFetchError("")
        }
      }
    }

  return (
    <>
      <Navbar />
      {session ? (
        <>
        <h2>Saved hikes by: {session.user.id}</h2>
        <div className='big-flexbox'>
          {savedHikes && (
              <div className='small-flexbox'>
                {fetchError && (<p>{fetchError}</p>)}
                {savedHikes.map(hike => (
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