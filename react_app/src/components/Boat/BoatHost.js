import React from "react";
import styled from "styled-components";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const HostContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 30px 100px;
`;

const Header = styled.span`
    font-size: 1rem;
    color: #999;
    font-weight: 700;
    margin-right: 20px;
    margin-top: 10px;
`;

const HostInfoContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const HostNameAndPictureContainer = styled.div`
    display: flex;
`;

const HostName = styled.span`
    font-size: 2rem;
    color: #222;
    font-weight: 700;
    margin-left: 12px;
`;

const HostDetails = styled.span`
    font-size: 1rem;
    color: #777;
    font-weight: 600;
    margin-top: 6px;
`;

export default function BoatHost({ host }) {
    const createdAt = new Date(host?.createdAt);
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    return (
        <HostContainer>
            <Header>THE HOST</Header>
            <HostInfoContainer>
                <HostNameAndPictureContainer>
                    <AccountCircleIcon
                        fontSize="large"
                        color="primary"
                    ></AccountCircleIcon>
                    <HostName>
                        {" "}
                        {host?.firstName + " " + host?.lastName}
                    </HostName>
                </HostNameAndPictureContainer>
                <HostDetails>
                    {host?.boats.length} Listings - Joined in{" "}
                    {monthNames[createdAt.getUTCMonth()]},{" "}
                    {createdAt.getFullYear()}
                </HostDetails>
            </HostInfoContainer>
        </HostContainer>
    );
}
