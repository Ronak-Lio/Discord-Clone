import React from 'react'
import "./SidebarChannel.css"
import {useDispatch} from "react-redux";
import {setChannelInfo} from "./features/appSlice"


function SidebarChannel({id , channel , key}) {
    const dispatch = useDispatch();

    const setChannel = () => {
       dispatch(setChannelInfo(
           {
            channelName : channel,
            channelId : id
           }

       ))
    }
    return (
        <div className="sidebarChannel" onClick = {setChannel}>
             <h4>
                 <span className = "sidebarChannel_hash">
                     #
                 </span> {channel}
             </h4>
        </div>
    )
}

export default SidebarChannel
