// import { Link } from "react-router-dom"
// import * as CgIcons from "react-icons/cg";
// import * as FaIcons from "react-icons/fa";
// import supabase from "../supabase/supabaseClient";
// import { useEffect, useState } from "react";
// import { useAuth } from "../auth/Auth";

// let savedArray: Array<Number> = [];

// const HikeCard = ({ hike }) => {
//     const { session } = useAuth();
    
//     useEffect(() => {
//         const fetchSaved = async () => {
//           const { data, error } = await supabase.from("profiles").select('saved_hikes').eq("id", session.user.id)
//           if (data) {
//             savedArray = data[0].saved_hikes;
//           }
//         }
//         fetchSaved()
//       }, [])

//     async function pushSaved() {
//         if(!(savedArray.includes(hike.id))) {
//             savedArray.push(hike.id);
//         } else {
//             savedArray = savedArray.filter(e => e !== hike.id);
//         }

//         const {} = await supabase.from('profiles').update({ saved_hikes: savedArray }).eq("id", session.user.id)
//     }

//     return (
//         <div className="hikes">
//             <h3 className="hike-headher">{hike.name}</h3>
//             <p className="hike-altitude">{hike.altitude} m.n.m</p>
//             <div className="buttons">
//                 <Link to={'/' + hike.id} className="buttons-links">
//                     <CgIcons.CgDetailsMore />
//                 </Link>
//             </div>
//             <div className="buttons-links">
//                 {/* <CgIcons.CgBookmark onClick={() => pushSaved()}/> */}
//                 {/* <b>{test ? 'FaIcons.FaBookmark' : 'FaIcons.FaRegBookmark'}</b> */}
//                 <FaIcons.FaRegBookmark onClick={() => pushSaved()}/>
//             </div>
//         </div>
//     )
// }

// export default HikeCard