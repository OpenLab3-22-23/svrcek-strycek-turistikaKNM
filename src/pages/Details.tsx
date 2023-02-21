import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { useParams, useNavigate } from 'react-router-dom'
import supabase from '../supabase/supabaseClient'
import Mapa from '../components/Mapa'
import "./Details.css"

function Details() {
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
        setDescription(data.description)
        setTime(data.time)
      }

    }
    fetchHike();
  }, [id, navigate])

  return (
    <>
      <Navbar />
      <div className='big-flex'>
        <h2>{name}</h2>
        <p>{description}</p>
        <p>{time}</p>
        <Mapa id={id}/>
      </div>
    </>
  )
}

export default Details