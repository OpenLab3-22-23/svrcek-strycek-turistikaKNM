import { Link } from "react-router-dom"
import * as CgIcons from "react-icons/cg";
import supabase from "../supabase/supabaseClient";
import { useEffect } from "react";
import { useAuth } from "../auth/Auth";

let allreadySaved: String = "";

const HikeCard = ({ hike }) => {
    const { session } = useAuth();
    
    useEffect(() => {
        const fetchSaved = async () => {
          const { data, error } = await supabase.from("profiles").select('saved_hikes').eq("id", session.user.id)
          if (data) {
            allreadySaved = data[0].saved_hikes;
          }
        }
        fetchSaved()
      }, [])

    async function pushSaved() {
        if(!(allreadySaved.includes(hike.id))) {
            allreadySaved = allreadySaved + String(hike.id);
        } else {
            allreadySaved = allreadySaved.replace(hike.id,'');
        }
        console.log(allreadySaved);

        const {} = await supabase.from('profiles').update({ saved_hikes: allreadySaved }).eq("id", session.user.id)
    }
    return (
        <div className="hikes">
            <h3 className="hike-headher">{hike.name}</h3>
            <p className="hike-altitude">{hike.altitude} m.n.m</p>
            <div className="buttons">
                <Link to={'/' + hike.id} className="buttons-links">
                    <CgIcons.CgDetailsMore />
                </Link>
            </div>
            <div className="buttons-links">
                <CgIcons.CgBookmark onClick={() => pushSaved()}/>
            </div>
        </div>
    )
}

export default HikeCard