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
import { login } from "../../services/auth";

export default function LoginModal({
    setAuthenticated,
    openModal,
    handleClose,
}) {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const onLogin = async (e) => {
        e.preventDefault();
        const user = await login(email, password);
        if (!user.errors) {
            setAuthenticated(true);
        } else {
            setErrors(user.errors);
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
