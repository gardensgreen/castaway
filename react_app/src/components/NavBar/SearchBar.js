import React from "react";
import styled from "styled-components";
import SearchIcon from "@material-ui/icons/Search";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import { useSearchLocationUpdate, useSearchUpdate } from "../../SearchContext";
import { useHistory } from "react-router-dom";

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
    width: 300px;
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

export default function SearchBar({ setForceRender }) {
    const history = useHistory();
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions,
    } = usePlacesAutocomplete({
        requestOptions: {
            /* Define search scope here */
        },
        debounce: 300,
    });

    const updateSearchTerm = useSearchUpdate();
    const updateSearchLocation = useSearchLocationUpdate();

    const handleInput = (e) => {
        // Update the keyword of the input element
        setValue(e.target.value);
    };

    const handleSelect = ({ description }) => () => {
        // When user selects a place, we can replace the keyword without request data from API
        // by setting the second parameter as "false"
        setValue(description, false);
        updateSearchTerm(description);
        clearSuggestions();
        history.push("/home");
        setForceRender((prevValue) => !prevValue);

        // Get latitude and longitude via utility functions
        getGeocode({ address: description })
            .then((results) => getLatLng(results[0]))
            .then(({ lat, lng }) => {
                updateSearchLocation({ lat, lng });
            })
            .catch((error) => {
                console.log("😱 Error: ", error);
            });
    };

    const renderSuggestions = () =>
        data.map((suggestion) => {
            const {
                id,
                structured_formatting: { main_text, secondary_text },
            } = suggestion;

            return (
                <li key={id} onClick={handleSelect(suggestion)}>
                    <strong>{main_text}</strong> <small>{secondary_text}</small>
                </li>
            );
        });

    return (
        <>
            <SearchBarContainer>
                <SearchInput
                    placeholder="Try 'Miami, FL, USA'"
                    value={value}
                    onChange={handleInput}
                    disabled={!ready}
                />
                <SearchButton>
                    <SearchIcon
                        fontSize="small"
                        style={{ color: "#FFF" }}
                    ></SearchIcon>
                </SearchButton>
            </SearchBarContainer>
            {status === "OK" && <ul>{renderSuggestions()}</ul>}
        </>
    );
}
