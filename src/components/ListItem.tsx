import React, { useState } from "react";
import "../styles/DropDown.scss";
import CheckboxIcon from "../icons/CheckboxIcon";
import EmptyCheckboxIcon from "../icons/EmptyCheckboxIcon";
import "../styles/ListItems.scss";
import { ListItemProps } from "../types/types";

function ListItem({
  description,
  selected,
  value,
  handleCheckboxClick,
}: ListItemProps) {
  const [isSelected, setisSelected] = useState(selected);

  const handleSelctedClick = (arg: boolean) => {
    setisSelected(arg);
    handleCheckboxClick();
  };
  return (
    <div className="list-items">
      <div
        className="list-items__icon"
        onClick={() => handleSelctedClick(!isSelected)}
        data-testid="list-items-icon"
      >
        {isSelected ? <CheckboxIcon /> : <EmptyCheckboxIcon />}
      </div>
      <div className="list-items__task-name">{description}</div>
    </div>
  );
}

export default ListItem;
