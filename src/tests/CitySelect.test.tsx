import { fireEvent, render, screen } from "@testing-library/react";
import { CitySelect } from "../components/CitySelect";

test("render correct city name from props", () => {
  render(<CitySelect city={"Dnipro"} setCity={(value: string) => {}} />);
  expect(screen.getByText("Dnipro")).toBeInTheDocument();
});

test("calls setCity if change event fired", async () => {
  const mockCallback = jest.fn();
  render(<CitySelect city={undefined} setCity={mockCallback} />);
  const select = screen.getByTestId("city-select");
  await fireEvent.change(select, { target: { value: "Ivano-Frankivsk" } });
  expect(mockCallback).toBeCalled();
});
