import { makeStyles } from "@material-ui/core/styles";
import styled from "styled-components";

export const ModalBody = styled.div`
    position: absolute;
    width: 400px;
    background-color: #fafafa;
    padding: 15px;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -40%);

    border-radius: 12px;

    &:focus {
        outline: none;
    }
`;

export const ErrorContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px 0px;
`;

export const Error = styled.div`
    display: flex;
    margin: 5px 0px;
    align-items: center;
`;

export const ErrorMessage = styled.span`
    margin-left: 10px;
    color: #2196f3;
    font-size: 0.85rem;
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
        margin: theme.spacing(3, 0, 1),
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "none",
    },
    demo: {
        margin: theme.spacing(1, 0, 3),
        paddingTop: 10,
        paddingBottom: 10,
        textTransform: "none",
    },
}));
