import React, { useState } from "react";
import "../styles/DropDown.scss";
import ListItem from "./ListItem";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import BookingIcon from "../icons/BookingIcon";
import { Task } from "../types/types";
import { ContextState } from "../context/AppContext"
// todo document with doscify

function DropDown({ name, tasks }: { name: string; tasks: Task[] }) {
  const [showDescriptions, setShowDescriptions] = useState(false);
  const { handleGroupListUpdate } = ContextState();

  const handleTaskUpdate = (
    description: string,
    checked: boolean,
    value: number
  ) => {
    const updateTasks = tasks.map((task) => {
      if (task.description === description) {
        task.checked = checked;
      }
      return task;
    });

    console.log(updateTasks, "this task");

    handleGroupListUpdate(name, updateTasks, value, checked);
  };
  return (
    <div className="drop-down">
      <div className="drop-down__header">
        <div className="drop-down__header-group">
          <BookingIcon />
          <div className="drop-down__header-group-name">{name}</div>
        </div>
        <div
          className="drop-down__header-right"
          onClick={() => setShowDescriptions(!showDescriptions)}
          data-testid="description-button"
        >
          {showDescriptions ? (
            <div
              className="drop-down__header-button"
              data-testid="description-hide-button"
            >
              <span>Hide</span> <ArrowUp />
            </div>
          ) : (
            <div
              className="drop-down__header-button"
              data-testid="description-show-button"
            >
              <span>Show</span> <ArrowDown />
            </div>
          )}
        </div>
      </div>
      {showDescriptions ? (
        <div className="drop-down__descriptions">
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>
                <ListItem
                  description={task.description}
                  selected={task.checked}
                  value={task.value}
                  handleCheckboxClick={() =>
                    handleTaskUpdate(
                      task.description,
                      !task.checked,
                      task.value
                    )
                  }
                />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default DropDown;
