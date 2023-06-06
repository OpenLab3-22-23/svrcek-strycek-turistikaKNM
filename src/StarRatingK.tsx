import React from "react";
import "./Skuska.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { Button } from "@mui/material";
import { supabase } from "./supabase/supabaseClient";
import { useEffect, useState } from "react";
import { useAuth } from "./auth/Auth";
import { useNavigate } from "react-router-dom";

export default function StarRatingK() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState('MenoUzivatela');
  const [fetchedAllRatings, setFetchedAllRatings] = useState([0]);
  const [avgRating, setAvgRating] = useState(0);

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
      const { data, error } = await supabase.from('profiles').select('starsKasarne');
      

      if (error) {
        navigate('/', { replace: true });
      }

      if (data) {
      
   //console.log(data);


    
 
}
      
    }
    fetchRatings();
  }, [navigate]) ;
  //console.log(fetchedAllRatings);
 
  async function getAvg() {
    // fetch BE for avg ratings
    const { data, error } = await supabase.from('profiles').select('starsKasarne');
    console.log(data, "allOBJ")
    const allRatings = data.map(item => item.starsKasarne).filter(starsKasarne => Number.isInteger(starsKasarne));
    console.log(allRatings, "allMapped")
    // calculate AVG rating (number)
    let total = allRatings.reduce((acc, c) => acc + c, 0);
    let totok = total / allRatings.length;
    
    // set new avg rating
    setAvgRating(Math.round(totok));
    console.log(totok, "Average")
  }
  
  


  
  


 
/////////////
const [value, setValue] = useState(null);

  async function UpdateRating() {
   // console.log("updated to:" + value);
    const {data, error} = await supabase.from('profiles').update({ starsKasarne: value }).eq('id', session?.user.id).select() //session.user.id
    
     if(data){
       setDajHviezdy(data[0].starsKasarne) 
       console.log("loggedUserUpdated:"+data[0].starsKasarne)
       setFetchedAllRatings(fetchedAllRatings);
      }
      getAvg()
    
  }

  const [dajHviezdy, setDajHviezdy] = useState(null);
  useEffect(() => {
    const fetchValue = async () => {
      const { data } = await supabase.from('profiles').select('starsKasarne').eq('id', session?.user.id)
      
  if(data) {
    console.log("FirstFetchLoggedUser"+data)
    setDajHviezdy(data[0].starsKasarne)

  }

    }
    fetchValue();
  }, [])

///////////////
useEffect(() => {
  

}, [])

  useEffect(() => {
    getAvg();
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
        Priemerné hodnotenie <Rating name="read-only" value={avgRating} readOnly />
      </div>
      <div className="RatingToSupa">
        <Button variant="contained" color="success" onClick={UpdateRating}> Ulož svoje hodnotenie </Button>
      </div>
    </div>
    
  )
}