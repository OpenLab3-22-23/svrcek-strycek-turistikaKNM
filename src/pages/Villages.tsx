import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/Auth';
import Navbar from '../components/Navbar'

function Villages() {
  const { session } = useAuth();
  return (
    <>
      <Navbar />
      {session ? (
        <h2>Villiges</h2>
      ) : <Navigate to="/login" />}
    </>
  )
}

export default Villages