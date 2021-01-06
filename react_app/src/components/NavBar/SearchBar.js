import React from "react";
import styled from "styled-components";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";

const SearchBarContainer = styled.div`
    display: flex;
    border: 1px solid #e8e8e8;
    border-radius: 30px;
    padding: 5px 20px;

    &:hover {
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 1px 1px -2px rgba(0, 0, 0, 0.12),
            0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    }
`;
const SearchInput = styled.input`
    padding-left: 8px;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;

    &:focus {
        outline: none;
    }

    &:focus ${SearchBarContainer} {
        box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.14),
            0px 1px 1px -2px rgba(0, 0, 0, 0.12),
            0px 1px 3px 0px rgba(0, 0, 0, 0.2);
    }
`;

export default function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchInput placeholder="Search for anything..." />
            <IconButton color="primary">
                <SearchIcon></SearchIcon>
            </IconButton>
        </SearchBarContainer>
    );
}
