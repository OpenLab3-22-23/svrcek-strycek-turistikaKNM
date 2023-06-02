import { useLocation, useParams } from 'react-router-dom';

export default function VillageWithHikes() {
  const { id, villagename } = useParams();
  const { state } = useLocation();

  return (
    <div>
      <img src={state.erbUrl} alt='erb dediny' />
      <p>{villagename}</p>
      <ul>
        {state.hikes.map((hike) => (
          <p>{hike.name}</p>
        ))}
      </ul>
    </div>
  );
}
