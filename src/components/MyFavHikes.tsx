import { useEffect, useState } from "react";
import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";
import { useAuth } from "../auth/Auth";
import supabase from '../supabase/supabaseClient';

function HikeCard({ removeHike, hikeName, hikeAltitude, hikeId }: { removeHike: (hikeId: number) => void, hikeName: string, hikeAltitude: string, hikeId: number }) {

    return (
        <div className="hikes">
            <h3 className="hike-headher">{hikeName}</h3>
            <p className="hike-altitude">{hikeAltitude} m.n.m</p>
            <div className="buttons">
                <Link to={'/' + hikeId} className="buttons-links">
                    <CgIcons.CgDetailsMore />
                </Link>
            </div>
            <div className="buttons-links">
                {/* <CgIcons.CgBookmark onClick={() => pushSaved()}/> */}
                {/* <b>{test ? 'FaIcons.FaBookmark' : 'FaIcons.FaRegBookmark'}</b> */}
                <FaIcons.FaRegBookmark onClick={() => removeHike(hikeId)} />
            </div>
        </div>
    )
}

export function MyFavHikes() {
    const { session } = useAuth();

    const [favHikes, setFavHikes] = useState(null)
    const [savedArray, setSavedArray] = useState([])

    async function fetchSaved() {
        const { data, error } = await supabase.from("profiles").select('saved_hikes').eq("id", session.user.id)
        if (data) {
            setSavedArray(data[0].saved_hikes);

            const myHikes = await supabase.from("Hikes").select().in('id', data[0].saved_hikes);
            if (myHikes.data) {
                setFavHikes(myHikes.data)
            }
            if (myHikes.error) {
                console.log("failed fetching hikes")
            }
        }
        if (error) {
            console.log('failed fetching favourite')
        }
    }

    useEffect(() => {
        async function retrieveSavedHikes() {
            await fetchSaved();
        }
        retrieveSavedHikes()
    }, [])

    async function RemoveFavHike(hikeId:number) {
        const filteredHikes = savedArray.filter(hike => hike != hikeId);
        const {error} = await supabase.from('profiles').update({ saved_hikes: filteredHikes }).eq("id", session.user.id)
        if (error) {
            console.log("Couldnt remove hike")
            return
        }
        let updatedHikes = favHikes;
        // vymaz z updated hikes hike z hike id
        const result = updatedHikes.filter(hike => hike.id != hikeId);
        setFavHikes(result);
        setSavedArray(filteredHikes);
    }

    return (
        <>
            <div className='big-flexbox'>
                {favHikes && (
                    <div className='small-flexbox'>
                        {favHikes.map(hike => (
                            <HikeCard key={hike.id} hikeName={hike.name} hikeAltitude={hike.altitude} hikeId={hike.id} removeHike={() => RemoveFavHike(hike.id)}/>
                        ))}
                    </div>
                )}
            </div>
        </>
    )

}