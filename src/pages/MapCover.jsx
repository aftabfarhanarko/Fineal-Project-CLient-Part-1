import React, { use } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const promise = fetch("warehouses.json").then((res) => res.json());
const MapCover = () => {
  const position = [23.685, 90.3563]; //bangladeh positions
  const promis = use(promise);

  return (
    <div className=" min-h-screen ">
      <h1 className="text-3xl font-bold text-secondary my-15">
        We are available in 64 districts
      </h1>
      <div></div>

      {/* Map Continer */}
      <div className=" h-[800px] ">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px] "
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {promis.map((center) => (
            <Marker
              key={center.district}
              position={[center.latitude, center.longitude]}
            >
              <Popup>
                <strong>{center.district}</strong> <br />
                <strong>
                  {" "}
                  Services Area : {center.covered_area.join(", ")}
                </strong>{" "}
                <br></br>
                Status :{" "}
                <span className="text-md font-semibold  text-teal-900 animate-ping  transition-all">
                  {" "}
                  {center.status}
                </span>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default MapCover;
