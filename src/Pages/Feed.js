import React, { useEffect, useState } from 'react';
import './Feed.css';
import StoryReel from '../components/StoryReel';
import MessageSender from '../components/MessageSender';
import Post from '../components/Post';
import { db }  from '../firebase';
import Dashboard from '../components/Dashboard';




function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").onSnapshot((snapshot) =>
        setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
        );
    }, []);
   
    return (
        
        
        <div className="feed">
        <Dashboard />
        <StoryReel />
        <MessageSender />
   
      
            
           
            

         {posts.map((post) => ( 
         <Post 
            key={post.id}
            profilePic={post.profilePic}
            message={post.message}
            timestamp={post.timestamp}
            username={post.username}
            image={post.image}
                />
            ))} 
        </div>
    );
}

export default Feed;