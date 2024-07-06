import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { supabase } from '../client';
import Card from '../component/Card';
import getTimeDifference from '../component/GetTime';
import Head from '../component/Head';

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const postId = parseInt(id, 10);
                if (isNaN(postId)) {
                    throw new Error('Invalid post ID');
                }
                console.log("singlePost with id: ", postId);
                const { data, error } = await supabase
                    .from('code_note')
                    .select('*')
                    .eq('id', postId)
                    .single();
                if (error) {
                    console.error("Error reading single post: ", error);
                } else {
                    console.log("Read single post successfully")
                    setPost(data)
                }
                } catch (error) {
                    console.error("Unexpected error: ", error);
                }
            }
        if (id) {
            fetchPost();
        }
    }, [id]);
    
    return (
        <div className='w-full h-screen bg-black text-white'>
            <Head />
            <div>
                {
                    post ? 
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
                    : <p>Loading...</p>
                }
            </div>
        </div>
    )
}

export default SinglePost 