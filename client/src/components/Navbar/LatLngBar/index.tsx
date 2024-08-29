import { useEffect, useState } from "react";
import { FaCompass } from "react-icons/fa6";
import useMapContext from "../../../hooks/useMapContext";

const LatLngBar = () => {
  const { map } = useMapContext();
  const [location, setLocation] = useState<L.LatLng | undefined>();
  const lat = location?.lat.toFixed(4);
  const lng = location?.lng.toFixed(4);

  useEffect(() => {
    if (!map) return undefined;

    setLocation(map.getCenter());

    map?.on("move", () => {
      setLocation(map.getCenter());
    });

    return () => {
      map.off();
    };
  }, [map]);

  return (
    <div className="flex items-center text-white font-bold text-sm flex items-center">
      <FaCompass color="#fff" size={20} />
      <span className="ml-3 w-10">
        {lat}
        <br />
        {lng}
      </span>
    </div>
  );
};

export default LatLngBar;
