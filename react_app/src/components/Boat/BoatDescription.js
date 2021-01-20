import React from "react";
import styled from "styled-components";

const SummaryContainer = styled.div`
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

const SummaryTextContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const SummaryText = styled.span`
    font-size: 1rem;
    color: #222;
    font-weight: 700;
    margin-top: 6px;
    width: 500px;
`;
export default function BoatDescription({ summary }) {
    return (
        <SummaryContainer>
            <Header>SUMMARY</Header>
            <SummaryTextContainer>
                <SummaryText>{summary}</SummaryText>
            </SummaryTextContainer>
        </SummaryContainer>
    );
}
