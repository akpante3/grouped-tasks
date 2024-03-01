import React from "react";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import ListItem from "../components/ListItem";

afterEach(cleanup);

describe("ListItem Component", () => {
  const mockProps = {
    description: "Test Description",
    selected: false,
    value: 42,
    handleCheckboxClick: jest.fn(),
  };

  it("renders ListItem correctly", () => {
    render(<ListItem {...mockProps} />);
    expect(screen.getByText("Test Description")).toBeInTheDocument();
    expect(screen.getByTestId("list-items-icon")).toBeInTheDocument();
  });

  it("handles checkbox click", () => {
    render(<ListItem {...mockProps} />);

    fireEvent.click(screen.getByTestId("list-items-icon"));

    expect(mockProps.handleCheckboxClick).toHaveBeenCalled();

  });
});
