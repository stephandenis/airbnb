import Map from "react-map-gl";
import { useState } from "react";
import { getCenter } from "geolib";

function Mapa({ searchResults }) {
  // for the pop-up marker, passing the object
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the search result into latitude and longitude for geolib
  // { latitude: 52.516172, longitude: 13.124567}
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // Center of the searched results using geoLib
  const center = getCenter(coordinates);

  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <Map
      mapStyle="mapbox://styles/fullstackdeni/ckzn4jm3o000v14mnjbh8wpnq"
      mapboxAccessToken={process.env.mapbox_key}
      initialViewState={{ ...viewport }}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></Map>
  );
}

export default Mapa;
