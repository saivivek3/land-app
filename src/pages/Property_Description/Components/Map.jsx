// src/components/SimpleMap.js
import "leaflet/dist/leaflet.css";
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

const Map = () => {
  // Coordinates for Malbarone location (Example: Melbourne, Australia)
  const position = [17.2314, 78.429];

  return (
    <div className="mt-8 md:mx-20 mx-4">
      {/* Map container */}
      <div className="border-2 border-gray-300 rounded-md">
        <MapContainer
          center={position}
          zoom={12}
          className="w-full h-[300px] sm:h-[400px] md:h-[500px]"
        >
          {/* TileLayer for map background */}
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {/* Marker on the map */}
          <Marker
            position={position}
            icon={
              new L.Icon({
                iconUrl: require("leaflet/dist/images/marker-icon.png"),
                iconSize: [30, 45], // Adjusted size for better visibility
                iconAnchor: [15, 45],
              })
            }
          >
            <Popup>
              {/* Highlighted Malbarone name */}
              <strong style={{ color: "yellow", fontSize: "18px" }}>
                Malbarone
              </strong>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;
