import React from "react";
import "./Skuska.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { supabase } from "./supabase/supabaseClient";
import { useEffect, useState } from "react";

export default function StarRating() {
  let afterValue;
  const [value, setValue] = useState(null);

  async function UpdateRating() {
    console.log(value);
    const {error} = await supabase.from('ski_Ratingy').update({ stars: value }).eq('location_id', 1).select() //session.user.id
    
  }
  return (
    <div>
      <Box align="left" component="fieldset" mb={3} borderColor="transparent">
        <p className="Hodnotenie">Zadaj hodnotenie:</p>
        <Rating
          value={value}
          name="rating"
          onChange={(event, newValue) => {

            setValue(newValue);

          }}

        />
       <button onClick={UpdateRating}  > </button>
      </Box>
      <div>
        MENO <span></span> <Rating name="read-only" value={value} readOnly />

      </div>
    </div>
  )
}