interface Coordinate {
  lat: number;
  lng: number;
}

interface Object {
  type: string;
  coordinates: Coordinate[];
}

interface Feature {
  type: string;
  geometry: Record<string, any>;
  properties: Record<string, any>;
}

interface GeoJSON {
  type: string;
  features: Feature[];
}

export type { Coordinate, GeoJSON, Object };

