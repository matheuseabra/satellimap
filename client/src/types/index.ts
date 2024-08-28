interface Coordinate {
  lat: number;
  lng: number;
}

interface Object1 {
  type: string;
  coordinates: Coordinate[];
}

export type { Coordinate, Object1 };

