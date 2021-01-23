import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import blue from "@material-ui/core/colors/blue";
import indigo from "@material-ui/core/colors/indigo";

import NavBar from "./components/NavBar/NavBar";
import { authenticate } from "./services/auth";
import LandingPage from "./components/LandingPage/LandingPage";
import Boat from "./components/Boat/Boat";
import Home from "./components/Home/Home";
import { SearchProvider } from "./SearchContext";
const theme = createMuiTheme({
    typography: {
        fontFamily: "Montserrat, sans-serif",
        fontSize: 14,
    },
    palette: {
        primary: {
            main: indigo[500],
        },
        secondary: {
            main: blue[500],
        },
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
                <SearchProvider>
                    <Switch>
                        <Route
                            path="/"
                            exact={true}
                            authenticated={authenticated}
                        >
                            <NavBar
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                            <LandingPage
                                setAuthenticated={setAuthenticated}
                            ></LandingPage>
                        </Route>
                        <Route path="/home" exact={true}>
                            <NavBar
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                            <Home />
                        </Route>
                        <Route path="/boats/:id">
                            <NavBar
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                            <Boat
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                        </Route>
                    </Switch>
                </SearchProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
