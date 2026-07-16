"use client";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

export default function Map({ position }: { position: number[] }) {
    const [lat, lon] = position;
    console.log(lat, lon)
    return (<div className="w-full h-120 rounded-[20px] overflow-hidden border-2">
        <MapContainer center={[lat, lon]}
        zoom={20}
            style={{ width: "100%", height: "100%" }}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Circle center={[lat,lon]} radius={200}/>
        </MapContainer>
    </div>)
}