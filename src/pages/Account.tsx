import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/Auth';
import Navbar from '../components/Navbar'
import supabase from '../supabase/supabaseClient';

export default function Account() {

  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('nieo');

  useEffect(() => {
    const fetchGPS = async () => {
      const { data, error } = await supabase.from('profiles').select().eq('id', session.user.id);

      if (error) {
        navigate('/', { replace: true });
      }

      if (data) {
        console.log(data[0].username);
        setCurrentUser(data[0].username);
      }

    }
    fetchGPS();
  }, [navigate])

  const { session } = useAuth();
  return (
    <>
    <Navbar />
    {session ? (
      <>
        <h2>{currentUser}</h2>
        <h3>123</h3>
      </>
    ) : <Navigate to="/login" />}
  </>
  )
}