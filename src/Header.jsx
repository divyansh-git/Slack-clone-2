import React from "react";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import HelpOutlineIcon from '@material-ui/icons/HelpOutline';
import { useStateValue } from "./StateProvider";

let Header=()=>{
    const [{ user }] = useStateValue();
    return(
        <div className="Header">
        <div className="Header_left">
        <AccessTimeIcon style={{fill: "white"}}/>
        </div>
        <div className="Header_search">
            <input placeholder="&#x1F50D; Search for anything "></input>
        </div>
        <div className="Header_Right">
        <HelpOutlineIcon style={{fill: "white"}}/>
        <img style={{width:"30px",height:"30px"}} src={user.photoURL}></img>
        </div>
        </div>
    )
}
export default  Header ;