import React from "react";
import { NavLink as NL } from "react-router-dom";
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

const NavBar = ({ authenticated, setAuthenticated }) => {
    return (
        <Nav>
            <Div>
                <NavLink to="/" exact={true} activeClassName="active">
                    <Logo></Logo>
                </NavLink>
                <SearchBar />
                <UserMenu
                    authenticated={authenticated}
                    setAuthenticated={setAuthenticated}
                />
            </Div>
        </Nav>
    );
};

export default NavBar;
