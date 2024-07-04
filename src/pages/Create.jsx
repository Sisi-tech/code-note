import Head from "../component/Head";
import { supabase } from "../client.jsx";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const CreatePost = () => {
    const [post, setPost] = useState({
        problem: "", 
        image: "", 
        description: "", 
        youtube: "", 
        resource: "",
        solution: "", 
    })

    const createPost = async (e) => {
        e.preventDefault();
        if (post.problem.trim().length == 0) {
            alert("please enter the problem");
            return;
        }
        console.log("Post data:", post);
        try {
            const { data, error } = await supabase.from("code_note").insert([
                {
                problem: post.problem, 
                image: post.image, 
                description: post.description, 
                youtube: post.youtube, 
                resource: post.resource,
                solution: post.solution, 
            }
        ]).select()
            if (error) {
                console.error("Error inserting data: ", error)
                alert("Error inserting data: " + error.message);
            } else {
                console.log("Data inserted successfully: ", data);
                window.location = "/";
            }
        } catch (error) {
            console.error("Unexpected error:", error);
            alert("Unexpected error: " + error.message);
        }
    }

    const handleChange = (e) => {
        const { name, value} = e.target;
        setPost((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            if (reader.result) {
                setPost((prev) => ({
                    ...prev,
                    image: reader.result
                }));
            } else {
                console.error("Reader result is empty");
            }
        };
        reader.onerror = () => {
            console.error("Error reading file: " , reader.error)
        };
        if (file) {
            reader.readAsDataURL(file);
        } else {
            console.error("no file selected")
        }
    }

    const handleInput = (e) => {
        const textarea = e.target;
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + 'px';
    }

    return (
        <div className="w-full h-auto pb-40 pt-0 m-0 bg-black text-white text-xl font-sans font-light tracking-wide">
            <Head />
            <form className="flex flex-col justify-center items-center gap-10 pt-16">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-xl" htmlFor="problem">Problem</label>
                        <input 
                            className="md:w-[700px] w-[300px] p-4 text-black rounded-md" 
                            id="problem" 
                            name="problem" 
                            type="text"
                            value={post.problem}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl" htmlFor="backgroundImage">Background Image</label>
                        <input 
                            className="md:w-[700px] w-[300px] p-4 text-black rounded-md" 
                            id="backgroundImage"
                            name="backgroundImage"
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                        /> 
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-0">
                            <label htmlFor="description">Description</label>
                            <p className="font-serif font-thin text-[12px]">Provide a description of the problem.</p>
                        </div>
                        <textarea 
                            className="md:w-[700px] w-[300px] p-4 text-black rounded-md row-auto" 
                            id="description"
                            name="description"
                            type="text"
                            rows="4"
                            cols="100"
                            value={post.description}
                            onChange={handleChange}    
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="solution">Solution</label>
                        <textarea 
                            className="md:w-[700px] w-[300px] p-4 text-black rounded-md row-auto" 
                            id="solution"
                            name="solution"
                            type="text"
                            rows="12"
                            cols="100"
                            value={post.solution}
                            onChange={handleChange} 
                            onInput={handleInput}  
                            style={{
                                whiteSpace: 'pre-wrap',
                                overflow: 'anywhere',
                                wordWrap: 'break-word',
                                display: 'block',
                            }} 
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl text-purple-800">Resources</h1>
                        <label className="text-xl" htmlFor="youtube">
                            <FontAwesomeIcon icon={faYoutube} className="pr-3"/>
                            Youtube
                        </label>
                        <input 
                            className="md:w-[700px] w-[300px] p-4 text-black rounded-md" 
                            id="youtube"
                            name="youtube"
                            type="url"
                            value={post.youtube}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl" htmlFor="resource">Resource/Document link</label>
                        <input 
                            className="md:w-[700px] w-[300px] p-4 text-black rounded-md" 
                            id="resource"
                            name="resource"
                            type="url"
                            value={post.resource}
                            onChange={handleChange}
                        /> 
                    </div>
                </div>
                <button 
                    className="md:w-[700px] w-[300px] bg-purple-800 p-3 rounded-full hover:bg-purple-900 shadow-sm shadow-gray-400"
                    type="button"
                    onClick={createPost}
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default CreatePost; 