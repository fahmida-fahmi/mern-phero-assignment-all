import React, { useEffect, useState } from 'react';
import './Container.css'
import Post from '../post/Post';
import Bookmark from '../Bookmark/Bookmark';
import { addReadTime } from '../Utilities/click';

const Container = () => {
    const [posts, setPosts] = useState([])
    const [readTime, setReadTime] = useState(0)

    useEffect(()=>{
        fetch('data.json')
        .then(res => res.json())
        .then(data => setPosts(data))
    },[])
    
    return (
        <div  className='content'>

            <div  className='content-post'>
                {posts.map(post => <Post
                post ={post}
                key={post.id}
                ></Post>)}
            </div>
            <div className='content-bookmark'>
                    <Bookmark></Bookmark>
            </div>
        </div>
    );
};

export default Container;