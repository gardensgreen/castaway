import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./services/auth";
import Hero from "./components/LandingPage/Hero";
import LandingPage from "./components/LandingPage/LandingPage";

function App() {
    const [authenticated, setAuthenticated] = useState(false);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        (async () => {
            const user = await authenticate();
            if (!user.errors) {
                setAuthenticated(true);
            }
            setLoaded(true);
        })();
    }, []);

    if (!loaded) {
        return null;
    }

    return (
        <BrowserRouter>
            <NavBar setAuthenticated={setAuthenticated} />
            <Switch>
                <Route path="/login" exact={true}>
                    <LoginForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    ></LoginForm>
                </Route>
                <Route path="/signup" exact={true}>
                    <SignUpForm
                        authenticated={authenticated}
                        setAuthenticated={setAuthenticated}
                    />
                </Route>
                <Route path="/" exact={true} authenticated={authenticated}>
                    <LandingPage></LandingPage>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
