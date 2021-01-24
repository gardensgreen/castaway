import { useState, useEffect } from "react";
import { Modal, Button, Container } from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";

import MomentUtils from "@date-io/moment";
import moment from "moment";
import InfoIcon from "@material-ui/icons/Info";
import { reserveBoat } from "../../services/boats";
import styled from "styled-components";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import {
    ModalBody,
    useStyles,
    ModalContainer,
    ModalForm,
    ModalHeader,
    ErrorContainer,
    Error,
    ErrorMessage,
} from "../auth/AuthStyles";
import { useHistory } from "react-router-dom";

const PriceContainer = styled.div`
    font-weight: 700;
    margin-top: 10px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #3;
`;

const PriceSpan = styled.span`
    color: #3f51b5;
    margin-left: 12px;
`;

export default function ReservationModal({
    boatName,
    boatId,
    openModal,
    handleClose,
    boatPrice,
}) {
    const history = useHistory();
    const [errors, setErrors] = useState({});
    const [startDate, setStartDate] = useState(null);
    const [startDateValidationError, setStartDateValidationError] = useState(
        null
    );
    const [endDate, setEndDate] = useState(null);
    const [endDateValidationError, setEndDateValidationError] = useState(null);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        setStartDate(null);
        setEndDate(null);
        setTotal(null);
        setStartDateValidationError(false);
        setEndDateValidationError(false);
        setErrors({});
    }, [openModal]);

    useEffect(() => {
        if (startDate && endDate) {
            let start = moment(startDate, "MM/DD/YYY");
            let end = moment(endDate, "MM/DD/YYYY");

            setTotal(
                (end.diff(start, "days") +
                    (end.diff(start, "days") === 0 ? 1 : 0)) *
                    boatPrice
            );
        }
    }, [startDate, endDate, boatPrice]);

    const onReserve = async (e) => {
        e.preventDefault();

        let start = moment(startDate, "MM/DD/YYY");
        let end = moment(endDate, "MM/DD/YYYY");

        if (start.diff(moment(), "days") < 0) {
            setErrors({
                fields: ["start_date"],
                messages: ["Start date must be a future date."],
            });
            setStartDateValidationError(true);
        } else if (end.diff(start, "days") < 0) {
            setErrors({
                fields: ["end_date"],
                messages: ["End date must be after start date"],
            });
            setEndDateValidationError(true);
        } else {
            const reservation = await reserveBoat(
                boatId,
                startDate.format("YYYY-MM-DD"),
                endDate.format("YYYY-MM-DD"),
                total
            );
            if (!reservation.errors) {
                //TODO: What to do when reservation is successful
                notify(reservation.boat.name);
                handleClose();
            } else {
                setErrors(reservation.errors);
                if (reservation.errors?.fields.includes("start_date")) {
                    setStartDateValidationError(true);
                } else {
                    setStartDateValidationError(false);
                }
                if (reservation.errors?.fields.includes("end_date")) {
                    setEndDateValidationError(true);
                } else {
                    setEndDateValidationError(false);
                }
            }
        }
    };

    const updateStartDate = (e) => {
        setStartDate(e);
    };
    const updateEndDate = (e) => {
        setEndDate(e);
    };
    const notify = (boatName) => {
        toast.info(`You've successfully reserved the ${boatName}`);
    };

    const classes = useStyles();

    const body = (
        <ModalBody>
            <Container component="main" maxWidth="xs">
                <ModalContainer>
                    <ModalHeader>Reserve {boatName}</ModalHeader>
                    <ModalForm onSubmit={onReserve}>
                        <MuiPickersUtilsProvider utils={MomentUtils}>
                            {!startDateValidationError ? (
                                <KeyboardDatePicker
                                    disableToolbar
                                    inputVariant="outlined"
                                    format="MM/DD/yyyy"
                                    required
                                    fullWidth
                                    margin="normal"
                                    label="Start Date"
                                    value={startDate}
                                    onChange={updateStartDate}
                                    autoFocus
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                />
                            ) : (
                                <KeyboardDatePicker
                                    disableToolbar
                                    autoFocus
                                    variant="outline"
                                    inputVariant="outlined"
                                    format="MM/DD/yyyy"
                                    margin="normal"
                                    fullWidth
                                    label="Start Date"
                                    value={startDate}
                                    onChange={updateStartDate}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                    error
                                />
                            )}
                            {!endDateValidationError ? (
                                <KeyboardDatePicker
                                    disableToolbar
                                    inputVariant="outlined"
                                    format="MM/DD/yyyy"
                                    required
                                    fullWidth
                                    margin="normal"
                                    label="End Date"
                                    value={endDate}
                                    onChange={updateEndDate}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                />
                            ) : (
                                <KeyboardDatePicker
                                    disableToolbar
                                    variant="outline"
                                    inputVariant="outlined"
                                    fullWidth
                                    format="MM/DD/yyyy"
                                    margin="normal"
                                    label="End Date"
                                    value={endDate}
                                    onChange={updateEndDate}
                                    KeyboardButtonProps={{
                                        "aria-label": "change date",
                                    }}
                                    error
                                />
                            )}
                        </MuiPickersUtilsProvider>
                        {total ? (
                            <PriceContainer>
                                Sub-Total: <PriceSpan> ${total}</PriceSpan>
                            </PriceContainer>
                        ) : null}
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                        >
                            Reserve Now
                        </Button>
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
                    </ModalForm>
                </ModalContainer>
            </Container>
        </ModalBody>
    );

    return (
        <Modal
            open={openModal}
            onClose={handleClose}
            aria-labelledby="simple-modal-title"
            aria-describedby="simple-modal-description
            "
        >
            {body}
        </Modal>
    );
}
