import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { MemoryRouter } from "react-router-dom";
import "@testing-library/jest-dom";


test("test if the reserve a table button leads to the reservations page/component", () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

  const headingWrapper = screen.getByTestId("HeadingWrapper");
  const headerContentGrid = screen.getByTestId("HeaderContentGrid");
  expect(headingWrapper).toContainElement(headerContentGrid);

  const toggleBtn = screen.getByTestId("reserveTableButton");
  expect(toggleBtn).toBeInTheDocument();
  expect(headerContentGrid).toContainElement(toggleBtn);

  fireEvent.click(toggleBtn);

  const newElement = screen.getByTestId("TableReservationGrid");
  expect(newElement).toBeInTheDocument();
  expect(headingWrapper).toContainElement(newElement);
});
