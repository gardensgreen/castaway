import React, { useState, useEffect } from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useSearchLocation } from "../../SearchContext";

const MapContainer = styled.div`
    width: 40%;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    border: 1px solid transparent;
    border-radius: 4px;
    right: 0;
    top: 20;
    z-index: 1;
    position: fixed;
`;

const PinContainer = styled.div`
    background-color: #3f51b5;
    width: 15px;
    height: 15px;
    border-radius: 100%;
    border: 3px solid #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
`;

export default function Map({ boats }) {
    const searchLocation = useSearchLocation();

    const [defaultCenter, setDefaultCenter] = useState(searchLocation);

    useEffect(() => {
        setDefaultCenter(searchLocation);
    }, [searchLocation]);

    const history = useHistory();
    return (
        <MapContainer>
            <GoogleMapReact
                bootstrapURLKeys={{
                    key: "AIzaSyAHVXofYnPcMNN-Xh3mCJXPc7CE_OU_Zqc",
                }}
                center={defaultCenter}
                defaultZoom={13}
            >
                {boats &&
                    boats.map((boat) => (
                        <PinContainer
                            onClick={(e) => history.push(`/boats/${boat.id}`)}
                            key={boat.id}
                            lat={boat.latitude}
                            lng={boat.longitude}
                        ></PinContainer>
                    ))}
            </GoogleMapReact>
        </MapContainer>
    );
}
