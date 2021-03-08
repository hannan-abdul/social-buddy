import React, { useEffect, useState } from 'react';
import Posts from '../Posts/Posts';

const Home = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const url = `https://jsonplaceholder.typicode.com/posts`;
        fetch (url)
        .then (res => res.json())
        .then (data => setPosts(data))
    },[])
    return (
        <div>
            <h2>This is Home</h2>
            <h3>I have got {posts.length} posts</h3>
            {
                posts.map(post => <Posts post={post}></Posts>)
            }
        </div>
    );
};

export default Home;