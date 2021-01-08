import { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import {
    ModalBody,
    useStyles,
    ModalContainer,
    ModalForm,
    ModalHeader,
} from "./AuthStyles";
import { signup } from "../../services/auth";

export default function SignupModal({
    setAuthenticated,
    openModal,
    handleClose,
}) {
    const [errorMessage, setErrorMessage] = useState("");
    const [email, setEmail] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [password, setPassword] = useState("");

    const onSignUp = async (e) => {
        e.preventDefault();
        if (password === repeatPassword) {
            const user = await signup(email, password);
            if (!user.errors) {
                setAuthenticated(true);
            } else {
                setErrorMessage(user.errors[0]);
            }
        } else {
            setErrorMessage("Passwords must match");
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
                            Sign Up
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
