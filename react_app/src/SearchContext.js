import React, { useContext, useState } from "react";

const SearchContext = React.createContext();
const SearchUpdateContext = React.createContext();
const SearchLocationContext = React.createContext();
const SearchLocationUpdateContext = React.createContext();

export function useSearch() {
    return useContext(SearchContext);
}
export function useSearchUpdate() {
    return useContext(SearchUpdateContext);
}
export function useSearchLocation() {
    return useContext(SearchLocationContext);
}

export function useSearchLocationUpdate() {
    return useContext(SearchLocationUpdateContext);
}

export function SearchProvider({ children }) {
    const [searchTerm, setSearchTerm] = useState("Miami, FL, USA");
    const [searchLocation, setSearchLocation] = useState({
        lat: 25.7481408,
        lng: -80.19366,
    });

    function updateSearchLocation(searchLocation) {
        setSearchLocation(searchLocation);
    }

    function updateSearch(searchTerm) {
        setSearchTerm(searchTerm);
    }

    return (
        <SearchContext.Provider value={searchTerm}>
            <SearchUpdateContext.Provider value={updateSearch}>
                <SearchLocationContext.Provider value={searchLocation}>
                    <SearchLocationUpdateContext.Provider
                        value={updateSearchLocation}
                    >
                        {children}
                    </SearchLocationUpdateContext.Provider>
                </SearchLocationContext.Provider>
            </SearchUpdateContext.Provider>
        </SearchContext.Provider>
    );
}
