import React, { useState, useEffect } from 'react';
import { supabase } from '../client';
import Card from '../component/Card';
import getTimeDifference from '../component/GetTime';
import Head from '../component/Head';

const SinglePost = (props) => {
    const [post, setPost] = useState([])

    useEffect(() => {
        const fetchPost = async (id) => {
            try {
                console.log("singlePost with id: ", id);
                const { data: code_note, error } = await supabase
                    .from('code_note')
                    .select('id', id)
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
        fetchPost();
    }, [])
    
    return (
        <div>
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
                    : <p>`There is date with id: ${post.id}`</p>
                }
            </div>
        </div>
    )
}

export default SinglePost 