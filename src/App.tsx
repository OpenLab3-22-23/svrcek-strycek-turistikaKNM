import { Navigate } from "react-router-dom";
import "./App.css";
import { useAuth } from "./auth/Auth";
import Home from "./pages/Home";

function App() {
  const { session } = useAuth();

  return (
    <div>
      {session ? (
        <Home />
      ) : <Navigate to="/login" />}
    </div>
  );
}

export default App;
