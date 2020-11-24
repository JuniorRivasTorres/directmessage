import { Avatar } from "@material-ui/core";
import React from "react";
import "./Message.css";
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice";
import  { PhotoAlbumRounded } from "@material-ui/icons";

function Message({ id, contents: 
    { timestamp, displayName, message, email, photo, uid }

}) {
    const user = useSelector(selectUser)

    return (
        <div className={`message ${user.email === email && "mesage__sender"} : }`}>
            <Avatar className='message__photo' src={photo} />
            <p>{message}</p>
            <small>{new Date(timestamp?.toDate()).toLocaleString()}</small>
        </div>
    )
}

export default Message
