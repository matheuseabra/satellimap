import { useContext } from "react";
import { MapContext } from "../context/MapContext";

const useMapContext = () => {
  const mapInstance = useContext(MapContext);
  const map = mapInstance?.map;
  const setMap = mapInstance?.setMap;

  console.log({ map });

  return { map, setMap };
};

export default useMapContext;
