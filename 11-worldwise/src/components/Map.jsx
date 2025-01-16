import { useNavigate } from "react-router-dom";
import styles from "./Map.module.css";
import { MapContainer, Marker, Popup, TileLayer, useMap, useMapEvents } from "react-leaflet";
import { useEffect, useState } from "react";
import { useCities } from "../contexts/CitiesContext";
import { useGeolocation } from "../hooks/useGeolocation";
import Button from "./Button";
import { useUrlPosition } from "../hooks/useUrlPosition";



export default function Map() {
  const { cities } = useCities();
  const [mapPosition, setMapPosition] = useState([10.5, 76.29])
  
  const { isLoading: isLoadingPosition, position: geolocationPosition, getPosition } = useGeolocation(mapPosition);

  const [mapLat, mapLng] = useUrlPosition();

  useEffect(function () {
    if (mapLat && mapLng) setMapPosition([mapLat, mapLng])
  }, [mapLat, mapLng])

  useEffect(() => {
    if (geolocationPosition && geolocationPosition.lat && geolocationPosition.lng) {
      setMapPosition([geolocationPosition.lat, geolocationPosition.lng]);
    } else {
      console.error('Invalid geolocation position:', geolocationPosition);
    }
  }, [geolocationPosition]);


  return (
    <div className={styles.mapContainer}>
      {!geolocationPosition && (
        <Button type='position' onClick={getPosition}>
          {isLoadingPosition ? "Detecting..." : "Use Your position"}
        </Button>
      )}
      <MapContainer className={styles.map}
        center={mapPosition}
        zoom={6} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {cities.map((city) => (
          <Marker
            position={[city.position.lat, city.position.lng]}
            key={city.id}>
            <Popup>
              <span>{city.emoji}</span>
              <span>{city.cityName}</span>
            </Popup>
          </Marker>
        ))}
        <ChangeCenter position={mapPosition} />
        <DetectClick />
      </MapContainer>
    </div>
  )
}


function ChangeCenter({ position }) {
  const map = useMap()
  map.setView(position)
  return null;
}

function DetectClick() {
  const navigate = useNavigate();

  useMapEvents({
    click(e) {
      navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`)
    }
  })
  return null
}