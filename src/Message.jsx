import React from "react";

function Message({Username,imgurl,timestamp,message}){
    return(
        <div className="message">
        <img style={{borderRadius:"10px",width:"30px",height:"30px"}} src={imgurl}/>
        <strong style={{fontSize:"16px"}} className="pl-4">{Username}</strong>
        <p style={{color:"Grey",fontSize:"16px"}} className="d-inline pl-2">{new Date(timestamp?.toDate()).toUTCString()}</p>
        <p style={{paddingLeft:"45px"}} >{message}</p>
        </div>
    )
}
export default Message;