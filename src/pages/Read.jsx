import Head from '../component/Head.jsx';
import { supabase } from '../client.jsx';
import Card from '../component/Card';
import React, { useState, useEffect } from 'react';
import getTimeDifference from '../component/GetTime.jsx';

const ReadPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase.from("code_note").select('*');
                if (error) {
                    console.error("Error fetching data: ", error);
                } else {
                    console.log("Data fetched Successfully:", data);
                    setPosts(data);
                }
            } catch (err) {
                console.log('There is an error: ', err);
            }
        }
        fetchPosts();
    }, [])

    return (
        <div className='w-full h-screen bg-black text-gray-100'>
            <Head />
            <div className='flex flex-col'>
                {
                    posts && posts.length > 0 ?
                    posts.map((post) => (
                        <Card 
                            key={post.id}
                            id={post.id}
                            time={getTimeDifference(post.created_at)}
                            image={post.image}
                            problem={post.problem}
                            description={post.description}
                            youtube={post.youtube}
                            resource={post.resource}
                            solution={post.solution}
                        />
                    )) : <p>No posts available</p>
                }
            </div>
        </div>
    )
}

export default ReadPost;