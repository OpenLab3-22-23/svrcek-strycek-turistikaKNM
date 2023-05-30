import { useEffect, useState } from "react";
import { useAuth } from "../auth/Auth";
import { HikeCard } from "../components/HikeCard";
import Navbar from "../components/Navbar";
import { supabase } from "../supabase/supabaseClient";
import "./Home.css";

function Home() {
  const { session } = useAuth();

  const [hikes, setHikes] = useState([]);
  const [favHikes, setFavHikes] = useState([]);

  const fetchHikes = async () => {
    const { data, error } = await supabase.from("Hikes").select();
    if (data) {
      setHikes(data);
    }
  };

  async function fetchFavHikes() {
    const favHikes = await supabase
      .from("profiles")
      .select("saved_hikes")
      .eq("id", session.user.id);

    if (favHikes.data) {
      setFavHikes(favHikes.data[0].saved_hikes);
      console.log(favHikes.data[0]);
    }
  }

  useEffect(() => {
    fetchHikes();
    fetchFavHikes();
  }, []);

  async function toggleHike(hikeId: number) {
    const { data, error } = await supabase
      .from("profiles")
      .update({ saved_hikes: [...favHikes, hikeId] })
      .eq("id", session.user.id).select();
    if (data) {
      setFavHikes(data[0].saved_hikes);
      console.log(data);
    } else if (error) {
      console.log(error);
    }
  }

  return (
    <>
      <Navbar />
      <div className="big-flexbox">
        {hikes && (
          <div className="small-flexbox">
            {hikes.map((hike) =>
              favHikes ? (
                favHikes.find((favhike) => favhike === hike.id) ? (
                  <HikeCard
                    toggleFav={(hikeId) => toggleHike(hikeId)}
                    isFav={true}
                    key={hike.id}
                    hikeName={hike.name}
                    hikeAltitude={hike.altitude}
                    hikeId={hike.id}
                  />
                ) : (
                  <HikeCard
                    toggleFav={(hikeId) => toggleHike(hikeId)}
                    isFav={false}
                    key={hike.id}
                    hikeName={hike.name}
                    hikeAltitude={hike.altitude}
                    hikeId={hike.id}
                  />
                )
              ) : (
                <HikeCard
                  toggleFav={(hikeId) => toggleHike(hikeId)}
                  isFav={false}
                  key={hike.id}
                  hikeName={hike.name}
                  hikeAltitude={hike.altitude}
                  hikeId={hike.id}
                />
              )
            )}
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
