import React from 'react';
import "./TweetBox.css";
import {Avatar, Button} from "@material-ui/core";


function TweetBox() {
  return (
    <div className="tweetBox">
     <form>
         <div className="tweetBox__input">

         <input placeholder="What's happening?" type="text" />
            <Avatar src= "abc.jpg" type="text" />
         </div>
         <Button className="tweetBox__tweetButton">Tweet</Button>

     </form>
      
    </div>
  );
}

export default TweetBox;
