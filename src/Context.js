import React, { createContext, useContext, useState, useEffect  } from "react";
import axios from "axios";
import { GetGroupList } from "./config/api";


const GroupContext = createContext()

const Context = ({ children }) => {
  const [groupList, setGroupList] = useState([]);
  const [totalTaskvalue, setTotalTaskValue] = useState(0);
  const [checkedTaskValues, setCheckedTaskValues] =  useState([]);
  const [progressBarValue, setProgressBarValue] = useState(0);

  const calculateTotalTaskValue = () => {
    let checkedValues = [];
    let total = 0;
    groupList.forEach((group) => {
      group.tasks.forEach((task) => {
        if (task.checked) {
          checkedValues.push(task.value);
        }
        total += task.value;
      });
    });
    
    setTotalTaskValue(total);
    setCheckedTaskValues(checkedValues);
  };

  const checkprogressBarPercentage = (value) => {
    let sum = value * (100 / totalTaskvalue);
    return sum;
  };

  const progressBarPercentage = () => {
    const percentage = checkedTaskValues.reduce((acc, el) => {
      return (acc += checkprogressBarPercentage(el));
    }, 0);

    setProgressBarValue(Math.round(percentage));
  };

  const getGroupList = async () => {
    const { data } = await axios.get(GetGroupList());

    setGroupList(data);
  };

  const handleGroupListUpdate = (name, tasks, value, checked) => {
    const listUpdate = groupList.map((group) => {
      if (group.name === name) {
        group.tasks = tasks;
      }
      return group;
    });

    let progressCheck = checked
      ? progressBarValue + checkprogressBarPercentage(value)
      : progressBarValue - checkprogressBarPercentage(value);

    let updateProgress = progressCheck < 1 ? 0 : Math.round(progressCheck);

    setProgressBarValue(updateProgress > 100 ? 100 : updateProgress);
    setGroupList(listUpdate);
  };

  useEffect(() => {
    getGroupList();
  }, []);

  useEffect(() => {
    calculateTotalTaskValue();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [groupList]);

  useEffect(() => {
    if (totalTaskvalue > 0) {
      progressBarPercentage();
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [totalTaskvalue]);

  return (
    <GroupContext.Provider
      value={{
        groupList,
        setGroupList,
        handleGroupListUpdate,
        progressBarValue,
      }}
    >
      {children}
    </GroupContext.Provider>
  );
};

export default Context;

export const ContextState = () => {
  return useContext(GroupContext);
};
