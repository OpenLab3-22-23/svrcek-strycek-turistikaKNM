import React from "react";
import "./Skuska.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { supabase } from "./supabase/supabaseClient";
import { useEffect, useState } from "react";
import { useAuth } from "./auth/Auth";
import { useNavigate } from "react-router-dom";

export default function StarRating() {
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
 
 
  let afterValue;
  const [value, setValue] = useState(null);
/////////////

  async function UpdateRating() {
    console.log(value);
    const {error} = await supabase.from('profiles').update({ starsRaca: value }).eq('id', session?.user.id).select() //session.user.id
   
    
  }

  const [dajHviezdy, setDajHviezdy] = useState('nieo');
  useEffect(() => {
    const fetchValue = async () => {
      const { data } = await supabase.from('profiles').select('starsRaca') //.eq('id', session?.user.id)
      
  if(data) {
    console.log(data)
    setDajHviezdy(data)
  }

    }
    fetchValue();
  }, [])

  return (
    <div className="UpperBoxDiv">
      <Box className="BoxDiv" align="left" component="fieldset" mb={3} borderColor="transparent">
        <p className="Hodnotenie">Zadaj hodnotenie:</p>

        <Rating
          value={value}
          name="rating"
          onChange={(event, newValue) => {

            setValue(newValue);

          }}

        />
      </Box>
      <div>
        {currentUser} <Rating name="read-only" value={dajHviezdy[1].starsRaca} readOnly />
      </div>
      <div className="RatingToSupa">
        <Button variant="contained" color="success" onClick={UpdateRating}> Ulož svoje hodnotenie </Button>
      </div>
    </div>
  )
}