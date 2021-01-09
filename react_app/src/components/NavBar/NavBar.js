import React from "react";
import { NavLink as NL } from "react-router-dom";
// import LogoutButton from "../auth/LogoutButton";
import styled from "styled-components";
import InvertColorsIcon from "@material-ui/icons/InvertColors";
import SearchBar from "./SearchBar";
import UserMenu from "./UserMenu";
import Logo from "./Logo";

const Nav = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 40px 50px;
`;

const NavLink = styled(NL)`
    text-decoration: none;
    color: inherit;
`;

const NavBar = ({ authenticated, setAuthenticated }) => {
    return (
        <Nav>
            <NavLink to="/" exact={true} activeClassName="active">
                <Logo></Logo>
            </NavLink>
            <SearchBar />
            <UserMenu
                authenticated={authenticated}
                setAuthenticated={setAuthenticated}
            />
        </Nav>
    );
};

export default NavBar;
