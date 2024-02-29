import {Dispatch, SetStateAction  } from "react";
export interface Task {
    description: string;
    value: number;
    checked: boolean;
  }
  
 export interface Group {
    name: string;
    tasks: Task[];
  }

  export interface GroupContextProps {
    groupList: Group[];
    setGroupList: Dispatch<SetStateAction<never[]>>; // Adjust the type here
    handleGroupListUpdate: (name: string, tasks: Task[], value: number, checked: boolean) => void;
    progressBarValue: number;
  }

  export interface ListItemProps {
    description: string;
    selected: boolean;
    value: number;
    handleCheckboxClick: () => void;
  }