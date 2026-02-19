import {
  MapContainer,
  TileLayer,
  Marker,
  useMapEvents,
  useMap,
} from "react-leaflet";
import { useState, useEffect } from "react";
import "leaflet/dist/leaflet.css";
import { useLocation } from "../../context/location.jsx";

// Only city names (no coordinates hardcoded)
// const cityList = ["Lagos", "Abuja", "Port Harcourt", "Kano"];

function ChangeMapView({ center }) {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, 13);
    }
  }, [center, map]);
  return null;
}

export default function CheckoutAddress() {
  // const [city, setCity] = useState("Lagos");
  const [center, setCenter] = useState([6.5244, 3.3792]); // default
  const [position, setPosition] = useState(null);
  const [address, setAddress] = useState("");
  const { city } = useLocation();

  // 🔥 Fetch coordinates when city changes
  useEffect(() => {
    async function getCityCoords() {
      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/search?q=${city}&format=json&limit=1`,
        );
        const data = await res.json();

        if (data && data.length > 0) {
          const lat = parseFloat(data[0].lat);
          const lon = parseFloat(data[0].lon);
          setCenter([lat, lon]);
          setPosition(null); // reset marker
        }
      } catch (error) {
        console.error("Error fetching city coordinates:", error);
      }
    }

    getCityCoords();
  }, [city]);

  // 🔥 Reverse Geocode on map click
  async function reverseGeocode(lat, lng) {
    const res = await fetch(
      `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lng}`,
    );
    const data = await res.json();

    const houseNumber = data.address?.house_number || "";
    const road = data.address?.road || "";
    const suburb = data.address?.suburb || "";
    const cityName = data.address?.city || data.address?.town || "";

    const fullAddress = `${houseNumber} ${road}, ${suburb}, ${cityName}`;
    setAddress(fullAddress.trim());
  }

  function ClickHandler() {
    useMapEvents({
      click(e) {
        setPosition(e.latlng);
        reverseGeocode(e.latlng.lat, e.latlng.lng);
      },
    });
    return null;
  }

  return (
    <div className="address-card">
      <div className="address-header">
        <h3>📍 Delivery Address</h3>

        {/* Dropdown
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          {cityList.map((cityName) => (
            <option key={cityName} value={cityName}>
              {cityName}
            </option>
          ))}
        </select> */}
      </div>

      <div className="map-wrapper">
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={false}
          className="map-box"
        >
          <TileLayer
            attribution="&copy; OpenStreetMap contributors"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          <ChangeMapView center={center} />
          <ClickHandler />
          {position && <Marker position={position} />}
        </MapContainer>
      </div>

      <div className="address-info">
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Street number and name"
          className="manual-input"
        />

        {position && (
          <small>
            Lat: {position.lat.toFixed(5)} | Lng: {position.lng.toFixed(5)}
          </small>
        )}
      </div>
    </div>
  );
}
