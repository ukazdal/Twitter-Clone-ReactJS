import React, { useState } from 'react';
import './TweetBox.css';
import { Avatar, Button } from '@material-ui/core';
import db from './firebase';

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");
    
    const sendTweet = e => {
        e.preventDefault();
        
        db.collection('posts').add({
            displayName: 'Ufuk Kazdal',
            username: 'ukazdal',
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 
            "https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png"
        });
        
            setTweetMessage("");
            setTweetImage("");

    }


    return <div className="tweetBox">
        <form>
            <div className="tweetBox__input">
            <Avatar src="https://toppng.com/uploads/preview/cool-avatar-transparent-image-cool-boy-avatar-11562893383qsirclznyw.png" />
            <input 
            onChange={(e) => setTweetMessage(e.target.value)}
            value={tweetMessage} 
            placeholder="What's happening?" 
            type="text" 
            />
            </div>
            <input 
            value={tweetImage}
            onChange={(e) => setTweetImage (e.target.value)}
            className="tweetBox__imageInput"
            placeholder="Optional: Enter image URL" 
            type="text"
             />

            <Button onClick={sendTweet} type="submit" className="tweetBox__tweetButton">Tweet</Button>
        </form>
    </div>;
}

export default TweetBox
