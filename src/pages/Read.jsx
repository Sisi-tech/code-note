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
        <div className='w-full h-full bg-black text-gray-100 pb-20'>
            <Head />
            <div className={`grid ${posts.length > 0 ? 'md:grid-cols-3' : 'flex justify-center items-center'} grid-cols-1 justify-items-center gap-4 p-10 h-full`}>
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
                    )) : (
                         <p className='md:text-3xl text-xl text-center h-screen'>
                            Just give me a second. It's loading... 
                        </p>
                    )
                }
            </div>
        </div>
    )
}

export default ReadPost;