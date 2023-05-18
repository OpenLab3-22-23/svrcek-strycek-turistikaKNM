import { useEffect, useState } from "react";
import { useAuth } from "../auth/Auth";
import supabase from '../supabase/supabaseClient';
import { HikeCard } from '../components/HikeCard';

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
        await fetchSaved();
    }

    return (
        <>
            <div className='big-flexbox'>
                {favHikes && (
                    <div className='small-flexbox'>
                        {favHikes.map(hike => (
                            <HikeCard key={hike.id} hikeName={hike.name} hikeAltitude={hike.altitude} hikeId={hike.id} toggleFav={(hikeId) => RemoveFavHike(hikeId)} isFav={true}/>
                        ))}
                    </div>
                )}
            </div>
        </>
    )

}