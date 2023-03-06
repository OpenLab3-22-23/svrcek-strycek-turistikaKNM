import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import supabase from '../supabase/supabaseClient'
import Mapa from '../components/Mapa'
import "./Details.css"
import { useAuth } from '../auth/Auth'
import Weather from '../components/Weather'

function Details() {
  const { session } = useAuth();
  const { id } = useParams();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [altitude, setAltitude] = useState(0);
  const [description, setDescription] = useState('');
  const [time, setTime] = useState();

  useEffect(() => {
    const fetchHike = async () => {
      const { data, error } = await supabase.from('Hikes').select().eq('id', id).single();

      if (error) {
        navigate('/', { replace: true });
      }

      if (data) {
        setName(data.name);
        setAltitude(data.altitude);
        setDescription(data.description);
        setTime(data.time);
      }

    }
    fetchHike();
  }, [id, navigate])

  return (
    <>
      <Navbar />
      {session ? (
        <div className='big-flex'>
          <h2>{name}</h2>
          <p>{description}</p>
          <p>{time}</p>
          <Mapa id={id}/>
          <Weather id={id}/>
        </div>
      ) : <Navigate to="/login" />}
    </>
  )
}

export default Details