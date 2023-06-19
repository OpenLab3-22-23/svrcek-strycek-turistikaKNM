import { Navigate } from 'react-router-dom';
import { useAuth } from '../auth/Auth';
import Navbar from '../components/Navbar';
import VillageList from '../components/VillageList';

function Villages() {
  const { session } = useAuth();
  return (
    <>
      <Navbar />
      {session ? (
        <VillageList />
      ) : <Navigate to="/login" />}
    </>
  )
}

export default Villages