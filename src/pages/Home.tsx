import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import Supabase from '@supabase/supabase-js';
import { HikesDataGPS, supabase, getHikes } from '../supabase/supabaseClient';
import { Link } from "react-router-dom";

function Home() {

  const [data, setData] = useState([])

  useEffect(() => {
    async function getHikesData() {
      const {data, error} = await getHikes();
      setData(data);
    }
    // getHikesData();
  })

  return (
    <>
      <Navbar />
      <div className='big-flexbox'>
        <div className='small-flexbox'>
          {data.map((item) => {
            return (
              <>
                <Link to='/details' className='hikes'>
                  <h2>{item.name}</h2>
                  <p>{item.altitude} m.n.m</p> 
                </Link>
              </>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Home