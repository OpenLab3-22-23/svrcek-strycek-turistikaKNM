import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import Supabase from '@supabase/supabase-js';
import { HikesDataGPS, supabase, getHikes } from '../supabase/supabaseClient';

function Home() {

  // useEffect(() => {
  //   async function getData() {
  //     const {data, error} = await HikesDataGPS();
  //     console.log(data)
  //   }

  //   getData();
  // },[])

  const [name, setName] = useState([])

  useEffect(() => {
    async function getHikesData(){
      const {data, error} = await getHikes();
      setName(data)
      console.log(data)
    }

    getHikesData();
  },[])

  return (
    <>
      <Navbar />
      <div className='big-flexbox'>
        <div className='small-flexbox'>
           {name.map((item) => {
                return (
                  <div>
                      <p>{item.Name}</p>
                  </div>
                )
            })}
        </div>
      </div>
    </>
  )
}

export default Home