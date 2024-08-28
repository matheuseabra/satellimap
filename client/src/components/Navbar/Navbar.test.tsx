import { render, screen } from "@testing-library/react";
import NavBar from "./index";

jest.mock("../../assets/logo.png", () => "mocked-logo.png");

jest.mock("./LatLngBar", () => <div data-testid="latlng-bar">LatLngBar</div>);

describe("NavBar Component", () => {
  test("renders without crashing", () => {
    render(<NavBar />);
  });

  test("renders the logo with correct src and alt attributes", () => {
    render(<NavBar />);
    const logoImg = screen.getByAltText("SatelliMap Logo");
    expect(logoImg).toBeInTheDocument();
    expect(logoImg).toHaveAttribute("src", "mocked-logo.png");
  });

  test("renders the SatelliMap text", () => {
    render(<NavBar />);
    const textElement = screen.getByText("SatelliMap");
    expect(textElement).toBeInTheDocument();
  });

  test("renders the LatLngBar component", () => {
    render(<NavBar />);
    const latLngBar = screen.getByTestId("latlng-bar");
    expect(latLngBar).toBeInTheDocument();
  });
});