import React from "react";
import GoogleMapReact from "google-map-react";
import styled from "styled-components";

const Map = styled.div`
    width: 80%;
    height: 400px;
    padding: 0px;

    border: 1px solid transparent;
`;

const MapComponentContainer = styled.div`
    display: flex;
    align-items: flex-start;
    padding: 30px 100px;
`;

const Header = styled.span`
    font-size: 1rem;
    color: #999;
    font-weight: 700;
    margin-right: 20px;
    margin-top: 20px;
`;

const MapContainer = styled.div`
    width: 100%;
    height: 400px;
    padding: 0px;
    display: flex;

    border: 1px solid transparent;

    margin-bott0m: 100px;
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
export default function BoatMap({ boat }) {
    return (
        <MapComponentContainer>
            <Header>LOCATION</Header>
            <MapContainer>
                <Map>
                    {boat && boat.latitude && (
                        <GoogleMapReact
                            bootstrapURLKeys={{
                                key: "AIzaSyAHVXofYnPcMNN-Xh3mCJXPc7CE_OU_Zqc",
                            }}
                            defaultCenter={{
                                lat: parseFloat(
                                    boat.latitude.toString().slice(0, 12)
                                ),
                                lng: parseFloat(
                                    boat.longitude.toString().slice(0, 12)
                                ),
                            }}
                            defaultZoom={13}
                        >
                            <PinContainer
                                lat={boat && boat.latitude}
                                lng={boat && boat.longitude}
                            ></PinContainer>
                        </GoogleMapReact>
                    )}
                </Map>
            </MapContainer>
        </MapComponentContainer>
    );
}
