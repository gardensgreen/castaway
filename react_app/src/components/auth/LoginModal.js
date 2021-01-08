import { useState, useEffect } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
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
import { login } from "../../services/auth";

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
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
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
