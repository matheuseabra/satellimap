import { LatLngBoundsLiteral } from "leaflet";
import { useEffect, useState } from "react";
import { MapContainer, Polyline, Rectangle, TileLayer } from "react-leaflet";
import MapContextProvider from "../../context/MapContext";
import api from "../../services/api";
import { Object1 } from "../../types";
import DrawLayer from "../DrawLayer";

export const imageId = "fdf52849-1b8e-42ed-8401-065036943aa0";

const mapConfig = {
  lat: 38.807859,
  lng: -9.074384,
  zoom: 7,
  zoomControl: false,
};

const objectStyle = { color: "#3388FF" };

const Map = () => {
  const [objects, setObjects] = useState<Object1[]>([]);
  const [mapImageUrl, setMapImageUrl] = useState("");

  const fetchMapImageUrl = async () => {
    try {
      const { data } = await api.get('images');
      setMapImageUrl(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getObjects = async () => {
    try {
      const { data } = await api.get(`images/${imageId}/objects`);
      setObjects(data);
      return data;
    } catch (error) {
      console.error(error);
    }
  };

  const renderShape = (object: Object1, index: number) => {
    if (object.type === "rectangle") {
      return (
        <Rectangle
          key={index}
          bounds={object.coordinates as unknown as LatLngBoundsLiteral}
          pathOptions={objectStyle}
        />
      );
    } else if (object.type === "polyline") {
      return (
        <Polyline
          key={index}
          positions={object.coordinates as unknown as LatLngBoundsLiteral}
          pathOptions={objectStyle}
        />
      );
    }
  };

  useEffect(() => {
    fetchMapImageUrl();
    getObjects();
  }, []);

  return (
    <div id="map-wrapper">
      <MapContextProvider>
        {mapImageUrl ? (
          <MapContainer
            center={[mapConfig.lat, mapConfig.lng]}
            zoom={mapConfig.zoom}
            zoomControl={mapConfig.zoomControl}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer url={mapImageUrl} />
            <DrawLayer />
            {objects.map((object, index) => renderShape(object, index))}
          </MapContainer>
        ) : (
          "Loading..."
        )}
      </MapContextProvider>
    </div>
  );
};

export default Map;
