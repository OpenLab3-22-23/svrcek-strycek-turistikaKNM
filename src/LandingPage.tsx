import openlab from "./assets/openlab.svg";
import { useAuth } from "./auth/Auth";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

export default function LandingPage(): JSX.Element {

    const {signOut} = useAuth()

    function handleLogOut(): void {
        signOut();
    }

    return (
        <>
            <img src={openlab} alt="Logo OpenLab" className="w-80"/>
            <button onClick={handleLogOut}>Odhlásiť sa</button>
            <Router>
                <Navbar />
                <Switch>
                    <Route path='/' />
                </Switch>
            </Router>
        </>
    )
}