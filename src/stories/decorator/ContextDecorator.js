import { GroupContext } from "../../context/AppContext";
import { useParameter } from "@storybook/addons";
import { useState } from "react";

export default function ContextDecorator(Story, context) {

    const initialState =  {
        groupList: [],
        setGroupList: () => {},
        handleGroupListUpdate: () => {},
        progressBarValue: 0,
    }

    const [state, setState] = useState({...initialState})

    return (
        <div>
            <GroupContext.Provider value={state}>
                <Story/>
            </GroupContext.Provider>
        </div>
    )
}