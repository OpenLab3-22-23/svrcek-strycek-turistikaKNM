import * as CgIcons from "react-icons/cg";
import * as FaIcons from "react-icons/fa";
import { Link } from "react-router-dom";

export function HikeCard({
  toggleFav,
  hikeName,
  hikeAltitude,
  hikeId,
  isFav,
}: {
  toggleFav: (hikeId: number) => void;
  hikeName: string;
  hikeAltitude: string;
  hikeId: number;
  isFav: boolean;
}) {
  return (
    <div className="hikes">
      <h3 className="hike-headher">{hikeName}</h3>
      <div className="buttons">
          <Link to={"/" + hikeId} className="buttons-links">
            <CgIcons.CgDetailsMore className="more-icon"/>
          </Link>
        <div className="buttons-links">
          {isFav ? (
            <FaIcons.FaBookmark onClick={() => toggleFav(hikeId)} className="clicked-book book"/>
          ) : (
            <FaIcons.FaRegBookmark onClick={() => toggleFav(hikeId)} className="book"/>
          )}
        </div>
      </div>
    </div>
  );
}
