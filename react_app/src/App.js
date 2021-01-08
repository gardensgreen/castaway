import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import { authenticate } from "./services/auth";
import LandingPage from "./components/LandingPage/LandingPage";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    typography: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: 14,
    },
});

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
            <ThemeProvider theme={theme}>
                <NavBar
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                />
                <Switch>
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
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
