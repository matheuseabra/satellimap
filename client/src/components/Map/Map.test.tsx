import { render, screen, waitFor } from "@testing-library/react";
import Map, { imageId } from ".";
import api from "../../services/api";
import { MapObject } from "../../types";

jest.mock("../../services/api");

const mockMapImageUrl = "http://example.com/map-image.png";
const mockObjects: MapObject[] = [
    {
      type: "rectangle",
      coordinates: [
        { lat: 38.807859, lng: -9.074384 },
        { lat: 38.807859, lng: -9.074384 },
      ],
    },
    {
      type: "polyline",
      coordinates: [
        { lat: 38.807859, lng: -9.074384 },
        { lat: 38.807859, lng: -9.074384 },
      ],
    },
  ];
  

describe("Map Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it.only("renders loading state initially", () => {
    (api.get as jest.Mock).mockResolvedValueOnce({ data: { url: mockMapImageUrl } });
    render(<Map />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("fetches and renders map image and objects", async () => {
    (api.get as jest.Mock)
      .mockResolvedValueOnce({ data: { url: mockMapImageUrl } }) // Mock for fetchMapImageUrl
      .mockResolvedValueOnce({ data: mockObjects }); // Mock for getObjects

    render(<Map />);

    await waitFor(() => {
      expect(screen.queryByText("Loading...")).not.toBeInTheDocument();
    });

    // Check that the map image URL is used
    expect(api.get).toHaveBeenCalledWith("images");
    expect(api.get).toHaveBeenCalledWith(`images/${imageId}/objects`);
    expect(screen.getByAltText(/OpenStreetMap/i)).toBeInTheDocument();

    // Check that the objects are rendered
    mockObjects.forEach((object, index) => {
      expect(screen.getByTestId(`map-object-${index}`)).toBeInTheDocument();
    });
  });

  it("handles API errors gracefully", async () => {
    (api.get as jest.Mock).mockRejectedValueOnce(new Error("Failed to fetch"));

    render(<Map />);

    await waitFor(() => {
      expect(screen.getByText("Loading...")).toBeInTheDocument();
    });

    expect(api.get).toHaveBeenCalledWith("images");
    expect(api.get).toHaveBeenCalledWith(`images/${imageId}/objects`);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });
});
