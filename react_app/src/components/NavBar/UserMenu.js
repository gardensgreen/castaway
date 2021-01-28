import { useState } from "react";
import styled from "styled-components";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import LoginModal from "../auth/LoginModal";
import SignupModal from "../auth/SignupModal";
import { makeStyles } from "@material-ui/core/styles";
import { logout } from "../../services/auth";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles({
    // root: {
    //     width: 300,
    // },
    label: {
        textTransform: "capitalize",
    },
});

// const UserMenuContainer = styled.div`
//     display: flex;
//     border: 2px solid transparent;
//     border-radius: 10px;
//     padding: 10px;
//     align-items: center;
//     background-color: #fff;
//     cursor: pointer;
//     width: 100px;
//     justify-content: space-around;
//     &:hover {
//         box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
//             0px 1px 1px -2px rgba(0, 0, 0, 0.12),
//             0px 1px 3px 0px rgba(0, 0, 0, 0.2);
//     }

//     &:focus {
//         box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
//             0px 1px 1px -2px rgba(0, 0, 0, 0.12),
//             0px 1px 3px 0px rgba(0, 0, 0, 0.2);
//     }
// `;

// const UserMenuPopUp = styled(Menu)`
//     margin-top: 65px;
//     padding: 10px;
// `;

// const UserMenuPopUpItem = styled(MenuItem)`
//     margin-right: 300px;
// `;

const UserMenuPopUp = styled(Menu)`
    margin-top: 65px;
    padding: 10px;
`;

const UserMenuPopUpItem = styled(MenuItem)`
    margin-right: 300px;
`;
const UserMenuContainer = styled.div`
    display: flex;
`;

const NavLink = styled.span`
    color #3f51b5;
    font-size: 1.2rem;
    font-weight: 400;
    margin-right: 30px;
    cursor: pointer;
`;

const UserMenuContainerAuth = styled.div`
    display: flex;
    border: 2px solid transparent;
    border-radius: 10px;
    padding: 10px;
    align-items: center;
    background-color: #fff;
    cursor: pointer;

    box-shadow: 0px 0px 0px 3px rgba(63, 81, 181, 0.5);
`;

export default function UserMenu({ authenticated, setAuthenticated, user }) {
    const history = useHistory();
    const [anchorEl, setAnchorEl] = useState(null);
    const [openLoginModal, setOpenLoginModal] = useState(false);
    const [openSignupModal, setOpenSignupModal] = useState(false);
    const open = Boolean(anchorEl);
    const classes = useStyles();

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
        setOpenLoginModal(false);
        setOpenSignupModal(false);
        setAnchorEl(null);
    };

    return (
        <>
            {!authenticated ? (
                <UserMenuContainer>
                    {" "}
                    <NavLink onClick={(e) => setOpenLoginModal(true)}>
                        Login
                    </NavLink>
                    <LoginModal
                        setAuthenticated={setAuthenticated}
                        openModal={openLoginModal}
                        handleClose={handleCloseLoginModal}
                    />
                    <NavLink onClick={(e) => setOpenSignupModal(true)}>
                        Signup
                    </NavLink>
                    <SignupModal
                        setAuthenticated={setAuthenticated}
                        openModal={openSignupModal}
                        handleClose={handleCloseSignupModal}
                    />{" "}
                </UserMenuContainer>
            ) : (
                <UserMenuContainerAuth
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
                    ></AccountCircleIcon>{" "}
                </UserMenuContainerAuth>
            )}

            {/* <UserMenuContainer
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
                classes={{ root: classes.root }}
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
                        </UserMenuPopUpItem>
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
            </UserMenuPopUp> */}

            <UserMenuPopUp
                classes={{ root: classes.root }}
                id="fade-menu"
                anchorEl={anchorEl}
                keepMounted
                open={open}
                onClose={handleClose}
                TransitionComponent={Fade}
            >
                <UserMenuPopUpItem
                    onClick={(e) =>
                        history.push(`/users/${user.id}/reservations`)
                    }
                >
                    Trips
                </UserMenuPopUpItem>
                <UserMenuPopUpItem
                    onClick={(e) => history.push(`/users/${user.id}/likes`)}
                >
                    Likes
                </UserMenuPopUpItem>
                <UserMenuPopUpItem onClick={onLogout}>Logout</UserMenuPopUpItem>
            </UserMenuPopUp>
        </>
    );
}
