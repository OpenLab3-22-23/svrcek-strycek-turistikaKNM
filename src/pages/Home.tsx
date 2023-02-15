import React from 'react'
import Navbar from '../components/Navbar'
import "./Home.css"
import Supabase from '@supabase/supabase-js';
import { HikesDataGPS, supabase } from '../supabase/supabaseClient';

function Home() {

  HikesDataGPS()

  return (
    <>
      <Navbar />
      <div className='big-flexbox'>
        <div className='small-flexbox'>
          <div>
            <p></p>
          </div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>8</div>
        </div>
      </div>
    </>
  )
}

export default Home