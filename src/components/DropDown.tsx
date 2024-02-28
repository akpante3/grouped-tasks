import React, { useState } from "react";
import "../styles/DropDown.scss";
import ListItem from "./ListItem";
import ArrowDown from "../icons/ArrowDown";
import ArrowUp from "../icons/ArrowUp";
import BookingIcon from "../icons/BookingIcon";
import { DropDownDetail } from "../types/types"; 

function DropDown({ dropDownDetail }: { dropDownDetail: DropDownDetail }) {
  const [showDescriptions, setShowDescriptions] = useState(false);
  return (
    <div className="drop-down">
      <div className="drop-down__header">
        <div className="drop-down__header-group"><BookingIcon /><span>{dropDownDetail.name}</span></div>
        <div
          className="drop-down__header-right"
          onClick={() => setShowDescriptions(!showDescriptions)}
        >
          {showDescriptions ? (
            <div className="drop-down__header-button">
              <span>Hide</span> <ArrowUp />
            </div>
          ) : (
            <div className="drop-down__header-button">
              <span>Show</span> <ArrowDown />
            </div>
          )}
        </div>
      </div>
      {showDescriptions ? (
        <div className="drop-down__descriptions">
          <ul>
            <li>
              <ListItem />
            </li>
            <li>
              <ListItem />
            </li>
            <li>
              <ListItem />
            </li>
          </ul>
        </div>
      ) : null}
    </div>
  );
}

export default DropDown;
