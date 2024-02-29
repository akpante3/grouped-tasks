import React, { createContext, useContext, useState, useEffect  } from "react";
import axios from "axios";
import { GetGroupList } from "../config/api";


export const GroupContext = createContext()

const AppContext = ({ children }) => {
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
    console.log(checkedValues, '----')
    setCheckedTaskValues(checkedValues);
  };

  const checkProgressBarPercentage = (value) => {
    let sum = value * (100 / totalTaskvalue);
    return sum;
  };

  const progressBarPercentage = () => {
    const percentage = checkedTaskValues.reduce((acc, el) => {
      return (acc += checkProgressBarPercentage(el));
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
      ? progressBarValue + checkProgressBarPercentage(value)
      : progressBarValue - checkProgressBarPercentage(value);

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

export default AppContext;

export const ContextState = () => {
  return useContext(GroupContext);
};
