import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const ModalBody = styled.div`
    position: absolute;
    width: 600px;
    background-color: #fafafa;
    padding: 15px;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 12px;

    &:focus {
        outline: none;
    }
`;

export const ModalHeader = styled.span`
    font-weight: 600;
    font-size: 1em;
`;

export const ModalContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ModalForm = styled.form`
    width: 100%;
    margin-top: 10px;
`;

export const useStyles = makeStyles((theme) => ({
    submit: {
        margin: theme.spacing(3, 0, 2),
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "lowercase",
    },
}));
