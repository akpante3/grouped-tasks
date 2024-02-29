import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import DropDown from "../components/DropDown";
import { GroupContext } from "../context/AppContext";


describe("DropDown Component", () => {
  const mockProps = {
    name: "Test DropDown",
    tasks: [
      { description: "Task 1", value: 1, checked: false },
      { description: "Task 2", value: 2, checked: true },
    ],
  };
  const handleGroupListUpdate = jest.fn()

  it("renders DropDown correctly", () => {

   render(
      <GroupContext.Provider value={{ handleGroupListUpdate }}>
        <DropDown {...mockProps} />
      </GroupContext.Provider>
    );

    // Check if the name is rendered
    expect(screen.getByText("Show")).toBeInTheDocument();

    // Check if the header buttons are rendered
    expect(screen.getByTestId("description-button")).toBeInTheDocument();
    expect(screen.getByTestId("description-show-button")).toBeInTheDocument();
  });
});
