import React from "react";
import { render, fireEvent, screen, cleanup } from "@testing-library/react";
import DropDown from "../components/DropDown";
import { GroupContext } from "../context/AppContext";

afterEach(cleanup);

describe("DropDown Component", () => {
  const mockProps = {
    name: "Test DropDown",
    tasks: [
      { description: "Task 1", value: 1, checked: false },
      { description: "Task 2", value: 2, checked: true },
    ],
  };
  const handleGroupListUpdate = jest.fn();

  it("renders DropDown correctly", () => {
    render(
      <GroupContext.Provider value={{ handleGroupListUpdate }}>
        <DropDown {...mockProps} />
      </GroupContext.Provider>
    );

    // Check if the name is rendered
    expect(screen.getByText("Show")).toBeInTheDocument();

    // Check if the header buttons are rendered
    expect(screen.getByTestId("drop-down-button")).toBeInTheDocument();
    expect(screen.getByTestId("drop-down-show-button")).toBeInTheDocument();
  });

  it("toggles descriptions on click", () => {
    render(
      <GroupContext.Provider value={{ handleGroupListUpdate }}>
        <DropDown {...mockProps} />
      </GroupContext.Provider>
    );

    fireEvent.click(screen.getByTestId("drop-down-button"));

    expect(screen.getByTestId("drop-down-hide-button")).toBeInTheDocument();

    fireEvent.click(screen.getByTestId("drop-down-button"));

    expect(screen.queryByTestId("drop-down-hide-button")).toBeNull();
  });
});
