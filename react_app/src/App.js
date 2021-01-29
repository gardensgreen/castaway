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
import Trips from "./components/Trips/Trips";
import Likes from "./components/Likes/Likes";
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
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        (async () => {
            const user = await authenticate();
            if (!user.errors) {
                setAuthenticated(true);
                setUser(user);
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
                                user={user}
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                            <LandingPage
                                setAuthenticated={setAuthenticated}
                            ></LandingPage>
                        </Route>
                        <Route path="/home" exact={true}>
                            <NavBar
                                user={user}
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                            <Home user={user} />
                        </Route>
                        <Route path="/boats/:id">
                            <NavBar
                                user={user}
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                            <Boat
                                user={user}
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                        </Route>

                        <Route path="/users/:userId/reservations" exact={true}>
                            <NavBar
                                user={user}
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                            <Trips />
                        </Route>
                        <Route path="/users/:userId/likes">
                            <NavBar
                                user={user}
                                authenticated={authenticated}
                                setAuthenticated={setAuthenticated}
                            />
                            <Likes />
                        </Route>
                    </Switch>
                </SearchProvider>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
