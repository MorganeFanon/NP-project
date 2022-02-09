import React from 'react';
import './Feed.css';
import StoryReel from './StoryReel';
import MessageSender from './MessageSender';
import Post from './Post';


function Feed() {
    return (
        <div className="feed">
            <StoryReel />
            <MessageSender />
            <Post 
                profilePic="https://www.pexels.com/photo/woman-standing-near-yellow-petaled-flower-2050994/"
                message="Still in quarantine :( Any ideas of hobbies or movies to watch ? Thanks guys :D"
                timestamp="Monday 12"
                username="Jane Doe"
                image="https://www.bing.com/images/search?view=detailV2&ccid=InGvKvnH&id=8BF20B72DED57A7792BF2099626148FD74DD7534&thid=OIP.InGvKvnHlhsAKIoXiig4fwHaEZ&mediaurl=https%3a%2f%2fwww.taffeta.com%2fwp-content%2fuploads%2f2020%2f03%2fself-quarantine-1024x608.jpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.2271af2af9c7961b00288a178a28387f%3frik%3dNHXddP1IYWKZIA%26pid%3dImgRaw%26r%3d0&exph=608&expw=1024&q=quarantine&simid=608036823800767537&FORM=IRPRST&ck=5AE41AC9B6C766B950FA8E5E3980C9E4&selectedIndex=46&ajaxhist=0&ajaxserp=0"
                />
            <Post />
            <Post />
        </div>
    );
}

export default Feed;