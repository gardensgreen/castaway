import React from "react";
import styled from "styled-components";

import SearchIcon from "@material-ui/icons/Search";

const SearchBarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    border: 1px solid transparent;
    border-radius: 10px;
    padding: 5px;
    padding-left: 10px;
    width: 500px;
    box-shadow: 0px 0px 0px 3px rgba(63, 81, 181, 0.5);
    background-color: #fff;
`;
const SearchInput = styled.input`
    padding-left: 8px;
    background: transparent;
    border: 1px solid transparent;
    cursor: pointer;
    display: flex;
    border-radius: 10px;
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
    border-radius: 10px;
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
