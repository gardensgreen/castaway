import React, { useEffect, useState } from "react";
import { NavLink as NL, useHistory } from "react-router-dom";
// import LogoutButton from "../auth/LogoutButton";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import Logo from "./Logo";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 40px;
    margin-bottom: 20px;
    width: 100vw;
    background-color: ${(props) =>
        props.name === "/" ? "transparent" : "#FAFAFA"};

    z-index: 5;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
`;

const NavLink = styled(NL)`
    text-decoration: none;
    color: inherit;
`;

const Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
`;

const NavBar = ({ authenticated, setAuthenticated, user }) => {
    const history = useHistory();
    const [forceRender, setForceRender] = useState(false);

    useEffect(() => {
        setForceRender((prev) => !prev);
    }, [history.location.pathname]);

    const handleLandingNav = () => {
        setForceRender(!forceRender);
    };
    return (
        <Nav name={window.location.pathname}>
            <Div>
                <NavLink
                    onClick={handleLandingNav}
                    to="/"
                    exact={true}
                    activeClassName="active"
                >
                    <Logo></Logo>
                </NavLink>
                <SearchBar setForceRender={setForceRender} />
                <UserMenu
                    user={user}
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                />
            </Div>
        </Nav>
    );
};

export default NavBar;
