import { render, screen, cleanup } from "@testing-library/react";

import  { GroupContext } from "../context/AppContext";

afterEach(cleanup);

describe("AppContext Component", () => {
    const mockProps = {
        name: "Test DropDown",
        tasks: [
          { description: "Task 1", value: 1, checked: false },
          { description: "Task 2", value: 2, checked: true },
        ],
      };
  it("renders AppContext Provider correctly", () => {
    render(
      <GroupContext.Provider value={{mockProps}}>
        <div data-testid="group-list">"hello"</div>
      </GroupContext.Provider>
    );

    expect(screen.getByTestId("group-list")).toBeInTheDocument();

  });

});
