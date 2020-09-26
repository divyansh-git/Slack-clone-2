import React,{useState,useEffect} from "react";
import CreateIcon from '@material-ui/icons/Create';
import ChatIcon from '@material-ui/icons/Chat';
import InboxIcon from '@material-ui/icons/Inbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import AppsIcon from '@material-ui/icons/Apps';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import db from "./firebase";
import { useHistory } from "react-router-dom";
import { useStateValue } from "./StateProvider";


let Sidebar_option=({Icon,Content,id,addChannelOption})=>{
    const history = useHistory();
    const selectChannel = () => {
        if (id) {
          history.push(`/${id}`);
        } else {
          history.push(Content);
        }
      };
    
      const addChannel = () => {
        const channelName = prompt("Please enter the channel name");
        if (channelName) {
          db.collection("rooms").add({
            Name: channelName,
          });
        }
      };
    
    return(
        <div onClick={addChannelOption ? addChannel : selectChannel}>
        
            {Icon?
            (
                <div className="d-flex pl-2 pt-3">
                <Icon></Icon>
                <h3 style={{cursor:"pointer",display:"inline",paddingLeft:"20px",fontSize:"16px",fontWeight:"100"}}> {Content}</h3>      
                </div>
            ):
            (
                <h3 style={{cursor:"pointer",paddingTop:"5px",paddingLeft:"40px",fontSize:"16px",fontWeight:"100"}}># {Content}</h3>
            )
            }
        </div>
    );
}

let Sidebar=()=>{
    const [channels,setChannels]=useState([]);
    const [{ user }] = useStateValue();
    
    useEffect(()=>{
        db.collection("rooms").onSnapshot(snapshot=>{
            setChannels(snapshot.docs.map(doc=>({
                id:  doc.id,
                Name: doc.data().Name

            })))
        })
    },[])
    return (
        <div className="Sidebar">
            <div className="channel_name">
                 <strong>{user?.displayName}</strong>
                <CreateIcon/>
            </div>
            <div className="channel_options">
                <Sidebar_option Icon={ChatIcon} Content="Threads" />
                <Sidebar_option Icon={InboxIcon} Content="Mentions" />
                <Sidebar_option Icon={DraftsIcon} Content="Saved Items" />
                <Sidebar_option Icon={BookmarkBorderIcon} Content="Channel Browser" />
                <Sidebar_option Icon={PeopleAltIcon} Content="People and Groups" />
                <Sidebar_option Icon={AppsIcon} Content="Apps" />
                <Sidebar_option Icon={FileCopyIcon} Content="File Browser" />
            </div>
            <div className="channel_threads">
            <Sidebar_option Icon={AddOutlinedIcon} addChannelOption Content="Add Channel" />
           {channels.map((channel)=>(
              <Sidebar_option id={channel.id} Content={channel.Name}></Sidebar_option>
           ))}
            </div>
        </div>
    )
}
export default Sidebar;