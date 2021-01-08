import { useState, useRef } from "react";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import { logout } from "../../services/auth";

const UserMenuContainer = styled.div`
    display: flex;
    border: 2px solid #e8e8e8;
    border-radius: 30px;
    padding: 10px;
    align-items: center;
    background-color: #fff;
    cursor: pointer;
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
    margin-top: 65px;
    padding: 10px;
`;

const UserMenuPopUpItem = styled(MenuItem)`
    margin-right: 300px;
`;

export default function UserMenu({ authenticated, setAuthenticated }) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);
    const open = Boolean(anchorEl);

    const handleClick = (e) => {
        setAnchorEl(e.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleCloseLoginModal = () => {
        setOpenLoginModal(false);
    };

    const handleCloseSignupModal = () => {
        setOpenSignupModal(false);
    };

    const onLogout = async (e) => {
        await logout();
        setAuthenticated(false);
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
                {!authenticated ? (
                    <>
                        <UserMenuPopUpItem
                            onClick={(e) => setOpenLoginModal(true)}
                        >
                            Login
                        </UserMenuPopUpItem>
                        <LoginModal
                            setAuthenticated={setAuthenticated}
                            openModal={openLoginModal}
                            handleClose={handleCloseLoginModal}
                        />
                        <UserMenuPopUpItem
                            onClick={(e) => setOpenSignupModal(true)}
                        >
                            Sign Up
                        </UserMenuPopUpItem>{" "}
                        <SignupModal
                            setAuthenticated={setAuthenticated}
                            openModal={openSignupModal}
                            handleClose={handleCloseSignupModal}
                        />
                    </>
                ) : (
                    <UserMenuPopUpItem onClick={onLogout}>
                        Logout
                    </UserMenuPopUpItem>
                )}
            </UserMenuPopUp>
        </div>
    );
}
