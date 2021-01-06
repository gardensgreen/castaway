import React from "react";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 2px solid #e8e8e8;
    border-radius: 30px;
    padding: 5px;
    padding-left: 10px;
    width: 300px;
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

const SearchButton = styled.button`
    border: 1px solid transparent;
    border-radius: 100%;
    padding: 5px;
    margin: 5px;
    background-color: #3f51b5;

    &:focus {
        outline: none;
    }
`;

export default function SearchBar() {
    return (
        <SearchBarContainer>
            <SearchInput placeholder="Search for anything..." />
            <SearchButton>
                <SearchIcon
                    fontSize="small"
                    style={{ color: "#FFF" }}
                ></SearchIcon>
            </SearchButton>
        </SearchBarContainer>
    );
}
