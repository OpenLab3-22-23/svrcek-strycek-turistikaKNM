import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/Auth';
import Navbar from '../components/Navbar'

function Account() {
  const { session } = useAuth();
  return (
    <>
    <Navbar />
    {session ? (
      <h2>Account</h2>
      /* <h2>{session.user.id}</h2> */
    ) : <Navigate to="/login" />}
  </>
  )
}

export default Account