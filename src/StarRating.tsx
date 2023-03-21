import React from "react";
import "./Skuska.css";
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import { supabase } from "./supabase/supabaseClient";

export default function StarRating(props) {
    const [value, setValue] = React.useState(null);

    async function UpdateRating()
    {
    const { data } = await supabase
  .from('profiles')
  .update({ SKIrating: value })
  .eq('id', 1) //session.user.id
    }

    return (
      <div>
        <Box align="left"  component="fieldset" mb={3} borderColor="transparent">
        <p className="Hodnotenie">Zadaj hodnotenie:</p>
          <Rating
            value={value}
            name="rating"
            onChange={(event, newValue) => {
              setValue(newValue);
              console.log(newValue);

            }}
            onClick={props.handleInputChange
     //         () => UpdateRating()
            }
            
          />
        </Box>
               <div>
                    MENO <span></span> <Rating name="read-only" value={value} readOnly />

              </div>
      </div>
      
      
    )
    
    /*const { data , error } = await supabase
     .from('profiles')
     .update('description')*/
     
  }