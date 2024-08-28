import { useEffect, useState } from "react";
import useMapContext from "../../../hooks/useMapContext";

const LatLngBar = () => {
    const { map } = useMapContext()
    const [location, setLocation] = useState<L.LatLng | undefined>()
    const lat = location?.lat.toFixed(4)
    const lng = location?.lng.toFixed(4)
  
    useEffect(() => {
      if (!map) return undefined
  
      setLocation(map.getCenter())
  
      map?.on('move', () => {
        setLocation(map.getCenter())
      })
  
      return () => {
        map.off()
      }
    }, [map])
  
    return (
    <div className="flex gap-2 text-lg font-black leading-none text-white md:text-2xl md:leading-none">
      <div className="text-white flex items-center">
        {lat}
        <br />
        {lng}
      </div>
    </div>
  )
  };

export default LatLngBar;