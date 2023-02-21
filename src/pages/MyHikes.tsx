import React from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/Auth';
import Navbar from '../components/Navbar'

function MyHikes() {
  const { session } = useAuth();
  return (
    <>
      <Navbar />
      {session ? (
        <h2>My hikes</h2>
      ) : <Navigate to="/login" />}
    </>
  )
}

export default MyHikes