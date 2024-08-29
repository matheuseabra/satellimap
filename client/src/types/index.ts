interface Coordinate {
  lat: number;
  lng: number;
}

interface MapObject {
  type: string;
  coordinates: Coordinate[];
}

export type { Coordinate, MapObject };

