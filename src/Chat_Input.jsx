import React,{useState, useEffect} from "react";
import { useStateValue } from "./StateProvider";
import firebase from "firebase";
import db from "./firebase";

let Chat_Input=({channelName,channelId})=>{
    console.log(channelName);
    const [input, setInput] = useState("");
    const [{ user }] = useStateValue();
 const send=(e)=>{
    e.preventDefault();
    if (channelId) {
      db.collection("rooms").doc(channelId).collection("Messages").add({
        message: input,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        Username: user.displayName,
        imgurl: user.photoURL
      });
    }

    setInput("");


    }
    return(
        <div className="Chat_Input">
        <form>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder={`Send a message to #${channelName}`}
        />
        <button  onClick={send} type="submit">SEND</button>
        </form>
        </div>
    );
}
export default Chat_Input;