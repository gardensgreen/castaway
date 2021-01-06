import { useState } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const UserMenuContainer = styled.div`
    display: flex;
    border: 2px solid #e8e8e8;
    border-radius: 30px;
    padding: 10px;
    align-items: center;
    &:hover {
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 1px 1px -2px rgba(0, 0, 0, 0.12),
            0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    }

    &:focus {
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 1px 1px -2px rgba(0, 0, 0, 0.12),
            0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    }
`;

const UserMenuPopUp = styled(Menu)`
    margin-top: 50px;
    padding: 10px;
`;

const UserMenuPopUpItem = styled(MenuItem)`
    width: 300px;
`;

export default function UserMenu() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <UserMenuContainer
                aria-controls="fade-menu"
                aria-haspopup="true"
                onClick={handleClick}
            >
                <MenuIcon
                    color="primary"
                    style={{ marginRight: "5px" }}
                ></MenuIcon>
                <AccountCircleIcon
                    fontSize="large"
                    color="primary"
                ></AccountCircleIcon>
            </UserMenuContainer>
            <UserMenuPopUp
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <UserMenuPopUpItem onClick={handleClose}>
                    Login
                </UserMenuPopUpItem>
                <UserMenuPopUpItem onClick={handleClose}>
                    Signup
                </UserMenuPopUpItem>
            </UserMenuPopUp>
        </div>
    );
}
