import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export function HikeCard({ toggleFav, hikeName, hikeAltitude, hikeId, isFav }: { toggleFav: (hikeId: number) => void, hikeName: string, hikeAltitude: string, hikeId: number, isFav: boolean }) {

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
                {isFav ? <FaIcons.FaBookmark onClick={() => toggleFav(hikeId)}/> : <FaIcons.FaRegBookmark onClick={() => toggleFav(hikeId)}/>}
            </div>
        </div>
    )
}