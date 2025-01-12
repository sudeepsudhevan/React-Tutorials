import { useSearchParams } from "react-router-dom";
import styles from "./Map.module.css";

export default function Map() {
  const [searchParams, setSearchParams] = useSearchParams()

  const lat = searchParams.get("lat")
  const lng = searchParams.get("lng")

  return (
    <div className={styles.mapContainer}>
        <h1>Map</h1>
        <h1>Position: {lat}, {lng}</h1>
        <button onClick={() => setSearchParams({ lat: 76.727881642324164, lng: -19.140900099907554})}>
      kerala
    </button>
    </div>
  )
}
