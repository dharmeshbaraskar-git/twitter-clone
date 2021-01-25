import { Avatar, Button } from '@material-ui/core';
import React, { useState } from 'react';
import db from './firebase';
import './TweetBox.css'

function TweetBox() {
    const [tweetMessage, setTweetMessage] = useState('');
    const [tweetImage, settweetImage] = useState('');
    const sendTweet = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            displaName: "Dharmesh Baraskar",
            username: "dharmesh",
            varified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: 'https://scontent.fblr1-6.fna.fbcdn.net/v/t1.0-1/p200x200/97810976_3212073345471950_3261763623902511104_n.jpg?_nc_cat=109&ccb=2&_nc_sid=7206a8&_nc_ohc=R3E-3JAl1v4AX9lncJl&_nc_ht=scontent.fblr1-6.fna&tp=6&oh=2b648a6657d413680bdab2b93508564b&oe=6034CE8B'

        });
        settweetImage("");
        setTweetMessage("");
    }
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox_input">
                    <Avatar src="" />
                    <input value={tweetMessage}
                        onChange={(e) => setTweetMessage(e.target.value)}
                        type="text" placeholder="What's happning?" />

                </div>
                <input value={tweetImage}
                    onChange={(e) => settweetImage(e.target.value)}
                    className="tweetBox_imageInput" type="text" placeholder="Optional : Enter image URL" />

                <Button onClick={sendTweet} type="submit" className="tweetBox_tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;