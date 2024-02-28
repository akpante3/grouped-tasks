import React, { useState } from "react";
import "../styles/DropDown.scss";
import CheckboxIcon from "../icons/CheckboxIcon";
import EmptyCheckboxIcon from "../icons/EmptyCheckboxIcon";
import "../styles/ListItems.scss";

function ListItem() {
  const [isSelected, setisSelected] = useState(false);
  return (
    <div className="list-items">
      <div className="list-items__icon" onClick={() => setisSelected(!isSelected)}>
        {isSelected ? (
          <CheckboxIcon />
        ) : (
          <EmptyCheckboxIcon />
        )}
      </div>
      <div className="list-items__task-name"> Task 1 </div>
    </div>
  );
}

export default ListItem;
