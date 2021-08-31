import React, { useState, useEffect } from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import GifIcon from "@material-ui/icons/Gif";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import Message from "./Message";
import { selectUser } from "./features/userSlice";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { useSelector } from "react-redux";
import db from "./firebase";
import firebase from "firebase";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (channelId) {
      db.collection("channels")
        .doc(channelId)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  } , [channelId]);

  const sendMessage = (e) => {
   e.preventDefault();
   db.collection("channels").doc(channelId).collection("messages").add({
       timestamp: firebase.firestore.FieldValue.serverTimestamp(),
       message : input,
       user : user,
   });
   setInput("")
  }
  return (
    <div className="chat">
      <ChatHeader channelName={channelName} />
      <div className="chat_messages">
        {messages.map((message) => (
          <Message 
           timestamp={message.timestamp}
           user = {message.user}
           message = {message.message}
          />
        ))}
      </div>
      <div className="chat_input">
        <AddCircleIcon fontSize="large" />
        <form action="">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            disabled={!channelId}
            placeholder={`Message #${channelName}`}
          />
          <button
            disabled={!channelId}
            type="submit"
            className="chat_inputButton"
            onClick={sendMessage}
          >
            Send Message
          </button>
        </form>
        <div className="chat_inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
