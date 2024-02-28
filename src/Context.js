import React, { createContext, useContext, useState,useEffect } from'react'
import axios from "axios";
import { GetGroupList } from './config/api';

const Group = createContext()

const Context = ({children}) => {
    const [groupList, setGroupList] = useState([])


    const getGroupList = async () => {
        const { data } = await axios.get(GetGroupList());
    
        setGroupList(data);
      };

    useEffect(() => {
        getGroupList()
      }, []);

    return <Group.Provider value={{ groupList, setGroupList}}>{children}</Group.Provider>
}


export default Context;


export const ContextState = () => {
    return useContext(Group)
 }