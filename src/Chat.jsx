import React, { useState,useEffect } from "react";
import {useParams} from "react-router-dom";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import db from "./firebase";
import Message from "./Message";
import Chat_Input from "./Chat_Input";

let Chat=()=>{
    const {roomID} =useParams()
    const [roomDetails,setRoomDetails]=useState(null);
    const [roomMessage, setRoomMessage]=useState([]);
    useEffect(()=>{
        if(roomID)
        {
            db.collection("rooms").doc(roomID).onSnapshot((snapshot)=>
                setRoomDetails(snapshot.data())
            )

        }
        db.collection("rooms").doc(roomID).collection("Messages").orderBy("timestamp","asc")
        .onSnapshot((snapshot)=>
        setRoomMessage(snapshot.docs.map((doc)=>doc.data()))
        );

    },[roomID])
    return(
        <div className="Chat">
        <div className="Chat_header">
            <div className="p1">
                <strong className="d-inline">#{roomDetails?.Name}</strong>
                <StarBorderIcon/>
            </div>
            <div className="p2">
                <InfoOutlinedIcon/>
                <p className="d-inline">Details</p>
            </div>
        </div>
        <div className="pl-3 Chat_screen">
            
               { roomMessage.map(({Username,imgurl,message,timestamp}) =>(
                    <Message Username={Username} imgurl={imgurl}
                    message={message} timestamp={timestamp}/>  
                ))}
            <Chat_Input channelName={roomDetails?.Name} channelId={roomID} />
        </div>
        </div>
    );
    
}

export default Chat;