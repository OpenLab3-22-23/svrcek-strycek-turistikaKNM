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
  const [currentUser, setCurrentUser] = useState('MenoUzivatela');
  const [fetchedAllRatings, setFetchedAllRatings] = useState([0]);

  useEffect(() => {
    const fetchCurrent = async () => {
      const { data, error } = await supabase.from('profiles').select().eq('id', session.user.id);
      

      if (error) {
        navigate('/', { replace: true });
      }

      if (data) {
        //console.log(data[0].username);
        setCurrentUser(data[0].username);
      }

    }
    fetchCurrent();
  }, [navigate])

  const { session } = useAuth();
 
  useEffect(() => {
    const fetchRatings = async () => {
      const { data, error } = await supabase.from('profiles').select('starsRaca');
      

      if (error) {
        navigate('/', { replace: true });
      }

      if (data) {
      
   console.log("allRating fetch:"+data);

   const allRatings = data.map(item => item.starsRaca).filter(starsRaca => Number.isInteger(starsRaca));
    setFetchedAllRatings(allRatings);
    
 
}
      
    }
    fetchRatings();
  }, [navigate]) ;
  //console.log(fetchedAllRatings);
 
  function getAvg(fetchedAllRatings) {
    let total = fetchedAllRatings.reduce((acc, c) => acc + c, 0);
    let totok = total / fetchedAllRatings.length;
    return Math.round(totok);
  }
  
  let average = getAvg(fetchedAllRatings);


  console.log("priemer=" + average); 
  
  


 
/////////////
const [value, setValue] = useState(null);

  async function UpdateRating() {
    console.log("updated to:" + value);
    const {error} = await supabase.from('profiles').update({ starsRaca: value }).eq('id', session?.user.id).select() //session.user.id
   
    
  }

  const [dajHviezdy, setDajHviezdy] = useState(null);
  useEffect(() => {
    const fetchValue = async () => {
      const { data } = await supabase.from('profiles').select('starsRaca').eq('id', session?.user.id)
      
  if(data) {
    console.log("current:"+data)
    setDajHviezdy(data[0].starsRaca)
  }

    }
    fetchValue();
  }, [])

///////////////
  const [dajCudzieHviezdy, setDajCudzieHviezdy] = useState(null);
  useEffect(() => {
    const fetchValue = async () => {
      const { data } = await supabase.from('profiles').select('starsRaca').neq('id', session?.user.id)
      
  if(data) {
    console.log("cudzieRatingy:"+data)
    setDajCudzieHviezdy(data[0].starsRaca)
  }

    }
    fetchValue();
  }, [])
/////////////////////////



  return (
    <div className="UpperBoxDiv">
      <Box className="BoxDiv" align="left" component="fieldset" mb={3} borderColor="transparent">
        <p className="Hodnotenie">Zadaj svoje hodnotenie:</p>

        <Rating
          value={value}
          name="rating"
          onChange={(event, newValue) => {

            setValue(newValue);

          }}

        />
      </Box>
      <div>
        {currentUser} <Rating name="read-only" value={dajHviezdy} readOnly />
        <br></br>
        Priemerné hodnotenie <Rating name="read-only" value={average} readOnly />
      </div>
      <div className="RatingToSupa">
        <Button variant="contained" color="success" onClick={UpdateRating}> Ulož svoje hodnotenie </Button>
      </div>
    </div>
  )
}