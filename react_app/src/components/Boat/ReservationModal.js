import { useState, useEffect } from "react";
import { Modal, Button, Container } from "@material-ui/core";
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from "@material-ui/pickers";

import { reserveBoat } from "../../services/boats";

export default function ReservationModal({ boatId, openModal, handleClose }) {
    const [errors, setErrors] = useState({});
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [total, setTotal] = useState(null);

    useEffect(() => {
        setStartDate(null);
        setEndDate(null);
        setTotal(null);
        setErrors({});
    }, [openModal]);

    const onReserve = async (e) => {};

    return <div></div>;
}
