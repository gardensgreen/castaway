import { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Container from "@material-ui/core/Container";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";

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
import { login } from "../../services/auth";
import { FormControl, InputLabel, OutlinedInput } from "@material-ui/core";

export default function LoginModal({
    setAuthenticated,
    openModal,
    handleClose,
}) {
    const [errors, setErrors] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [emailValidationError, setEmailValidationError] = useState(false);
    const [passwordValidationError, setPasswordValidationError] = useState(
        false
    );

    useEffect(() => {
        setEmail("");
        setPassword("");
        setShowPassword(false);
        setEmailValidationError(false);
        setPasswordValidationError(false);
        setErrors({});
    }, [openModal]);

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        if (!user.errors) {
            setAuthenticated(true);
            handleClose();
            window.location.reload();
        } else {
            setErrors(user.errors);
            if (user.errors.fields && user.errors.fields.includes("email")) {
                setEmailValidationError(true);
            } else {
                setEmailValidationError(false);
            }
            if (user.errors.fields && user.errors.fields.includes("password")) {
                setPasswordValidationError(true);
            } else {
                setPasswordValidationError(false);
            }
        }
    };

    const handleDemoLogin = async (e) => {
        const user = await login("demo@aa.com", "password");
        if (!user.errors) {
            setAuthenticated(true);
            handleClose();
            window.location.reload();
        } else {
            setErrors(user.errors);
            if (user.errors.fields && user.errors.fields.includes("email")) {
                setEmailValidationError(true);
            } else {
                setEmailValidationError(false);
            }
            if (user.errors.fields && user.errors.fields.includes("password")) {
                setPasswordValidationError(true);
            } else {
                setPasswordValidationError(false);
            }
        }
    };

    const updateEmail = (e) => {
        setEmail(e.target.value);
    };

    const updatePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const classes = useStyles();

    const body = (
        <ModalBody>
            <Container component="main" maxWidth="xs">
                <ModalContainer>
                    <ModalHeader>Sign in</ModalHeader>
                    <ModalForm onSubmit={onLogin}>
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
                            <FormControl
                                fullWidth
                                margin="normal"
                                variant="outlined"
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    required
                                    name="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    color="primary"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={updatePassword}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
                        ) : (
                            <FormControl
                                fullWidth
                                margin="normal"
                                variant="outlined"
                                error
                            >
                                <InputLabel htmlFor="outlined-adornment-password">
                                    Password
                                </InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    required
                                    name="password"
                                    label="Password"
                                    type={showPassword ? "text" : "password"}
                                    color="primary"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={updatePassword}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={
                                                    handleClickShowPassword
                                                }
                                                onMouseDown={
                                                    handleMouseDownPassword
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <Visibility />
                                                ) : (
                                                    <VisibilityOff />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                />
                            </FormControl>
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
                        <FormControlLabel
                            control={
                                <Checkbox value="remember" color="primary" />
                            }
                            label="Remember me"
                        />

                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Login
                        </Button>
                        <Button
                            onClick={handleDemoLogin}
                            fullWidth
                            variant="contained"
                            color="secondary"
                            className={classes.demo}
                        >
                            Demo Login
                        </Button>
                    </ModalForm>
                </ModalContainer>
            </Container>
            <LoginModal />
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
