import { Link } from "react-router-dom"
import * as CgIcons from "react-icons/cg";

const HikeCard = ({ hike }) => {
    return (
        <div className="hikes">
            <h3 className="hike-headher">{hike.name}</h3>
            <p className="hike-altitude">{hike.altitude} m.n.m</p>
            <div className="buttons">
                <Link to={'/' + hike.id} className="buttons-links">
                    <CgIcons.CgDetailsMore />
                </Link>
            </div>
        </div>
    )
}

export default HikeCard