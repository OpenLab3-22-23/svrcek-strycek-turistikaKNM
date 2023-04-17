import React, { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'
import { useAuth } from '../auth/Auth';
import { MyFavHikes } from '../components/MyFavHikes';
import Navbar from '../components/Navbar'

function MyHikes() {
  const { session } = useAuth();

  return (
    <>
      <Navbar />
      {session ? (
        <MyFavHikes/>
      ) : <Navigate to="/login" />}
    </>
  )
}

export default MyHikes