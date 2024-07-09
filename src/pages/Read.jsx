import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import getTimeDifference from '../component/GetTime.jsx';
import Content from '../component/Content.jsx';
import Head from '../component/Head.jsx';
import Card from '../component/Card';

const ReadPost = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const { data, error } = await supabase.from("code_note").select('*');
                if (error) {
                    console.error("Error fetching data: ", error);
                } else {
                    setPosts(data);
                }
            } catch (err) {
                console.log('There is an error: ', err);
            }
        }
        fetchPosts();
    }, []);

    return (
        <div className='w-full h-full bg-black text-gray-100 pb-20'>
            <Head />
            <div className={`grid ${posts.length > 0 ? 'md:grid-cols-3 lg:grid-cols-3 grid-cols-1 justify-items-center gap-4 p-10 h-full' : 'flex justify-center items-center h-full'}`}>
                {posts && posts.length > 0 ? (
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
                    ))
                ) : (
                    <Content />  
                )}
            </div>
        </div>
    )
}

export default ReadPost;
