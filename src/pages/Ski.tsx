import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/Auth';
import Navbar from '../components/Navbar'

function Ski() {
  const { session } = useAuth();
  return (
    <>
      <Navbar />
      {session ? (
        <h2>Ski</h2>
      ) : <Navigate to="/login" />}
    </>
  )
}

export default Ski