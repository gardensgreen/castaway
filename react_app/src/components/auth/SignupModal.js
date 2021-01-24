import { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import Container from "@material-ui/core/Container";
import InfoIcon from "@material-ui/icons/Info";
import {
    ModalBody,
    useStyles,
    ModalContainer,
    ModalForm,
    ModalHeader,
    ErrorContainer,
    Error,
    ErrorMessage,
} from "./AuthStyles";
import { signup } from "../../services/auth";

export default function SignupModal({
    setAuthenticated,
    openModal,
    handleClose,
}) {
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [password, setPassword] = useState("");
    const [emailValidationError, setEmailValidationError] = useState(false);
    const [passwordValidationError, setPasswordValidationError] = useState(
        false
    );
    const [
        repeatPasswordValidationError,
        setRepeatPasswordValidationError,
    ] = useState(false);

    useEffect(() => {
        setEmail("");
        setPassword("");
        setRepeatPassword("");
        setEmailValidationError(false);
        setPasswordValidationError(false);
        setErrors({});
    }, [openModal]);

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const user = await signup(email, password);
            if (!user.errors) {
                setAuthenticated(true);
                handleClose();
                window.location.reload();
            } else {
                setErrors(user.errors);
                if (
                    user.errors.fields &&
                    user.errors.fields.includes("email")
                ) {
                    setEmailValidationError(true);
                } else {
                    setEmailValidationError(false);
                }
                if (
                    user.errors.fields &&
                    user.errors.fields.includes("password")
                ) {
                    setPasswordValidationError(true);
                } else {
                    setPasswordValidationError(false);
                }
            }
        } else {
            setRepeatPasswordValidationError(true);
            setErrors({ messages: ["Passwords must match"] });
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const updateRepeatPassword = (e) => {
        setRepeatPassword(e.target.value);
    };

    const classes = useStyles();

    const body = (
        <ModalBody>
            <Container component="main" maxWidth="xs">
                <ModalContainer>
                    <ModalHeader>Sign up</ModalHeader>
                    <ModalForm onSubmit={onSignUp}>
                        {!emailValidationError ? (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                color="primary"
                                autoFocus
                                value={email}
                                onChange={updateEmail}
                            />
                        ) : (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                color="primary"
                                autoFocus
                                value={email}
                                onChange={updateEmail}
                                error
                            />
                        )}
                        {!passwordValidationError ? (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                color="primary"
                                autoComplete="current-password"
                                value={password}
                                onChange={updatePassword}
                            />
                        ) : (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                color="primary"
                                autoComplete="current-password"
                                value={password}
                                onChange={updatePassword}
                                error
                            />
                        )}
                        {!repeatPasswordValidationError ? (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="repeat_password"
                                label="Confirm Password"
                                type="password"
                                id="password"
                                color="primary"
                                autoComplete="current-password"
                                onChange={updateRepeatPassword}
                                value={repeatPassword}
                            />
                        ) : (
                            <TextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                name="repeat_password"
                                label="Confirm Password"
                                type="password"
                                id="password"
                                color="primary"
                                autoComplete="current-password"
                                onChange={updateRepeatPassword}
                                value={repeatPassword}
                                error
                            />
                        )}

                        {errors.messages && errors.messages.length !== 0 ? (
                            <ErrorContainer>
                                {errors.messages.map((err, idx) => (
                                    <Error key={idx}>
                                        <InfoIcon
                                            fontSize="small"
                                            color="secondary"
                                        />
                                        <ErrorMessage>{err}</ErrorMessage>
                                    </Error>
                                ))}
                            </ErrorContainer>
                        ) : null}

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Sign Up
                        </Button>
                    </ModalForm>
                </ModalContainer>
            </Container>
            <SignupModal />
        </ModalBody>
    );

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description"
        >
            {body}
        </Modal>
    );
}
