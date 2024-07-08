import React, { useState, useEffect } from 'react';
import { supabase } from "../client";

const EditPost = ({ post, onClose }) => {
    const [updateProblem, setUpdateProblem] = useState("");
    const [updateDescription, setUpdateDescription] = useState("");
    const [updateSolution, setUpdateSolution] = useState("");
    const [updateYoutube, setUpdateYoutube] = useState("");
    const [updateResource, setUpdateResource] = useState("");

    useEffect(() => {
        if (post) {
            setUpdateProblem(post.problem || "");
            setUpdateDescription(post.description || "");
            setUpdateSolution(post.solution || "");
            setUpdateYoutube(post.youtube || "");
            setUpdateResource(post.resource || "");
        }
    }, [post]);

    const handleProblemChange = (e) => setUpdateProblem(e.target.value);
    const handleDescriptionChange = (e) => setUpdateDescription(e.target.value);
    const handleSolutionChange = (e) => setUpdateSolution(e.target.value);
    const handleYoutubeChange = (e) => setUpdateYoutube(e.target.value);
    const handleResourceChange = (e) => setUpdateResource(e.target.value);

    const handleSubmit = async () => {
        try {
            const { data, error } = await supabase
                .from("code_note")
                .update({ 
                    problem: updateProblem, 
                    description: updateDescription,
                    solution: updateSolution,
                    youtube: updateYoutube,
                    resource: updateResource,
                })
                .eq('id', post.id);

            if (error) {
                throw error;
            }

            window.alert("Post updated successfully!");
            onClose();
            window.location = `/post/${post.id}`
        } catch (error) {
            console.error("Error updating post: ", error);
            window.alert("Error updating post: " + error.message);
        }
    }

    return (
        <div className="w-full h-auto pb-40 pt-0 m-0 bg-black text-xl font-sans font-light tracking-wide">
            <div className="flex flex-col gap-5 pt-10">
                <h2 className='text-2xl text-purple-800'>UPDATE POST</h2>
                <div className="flex flex-col gap-2">
                    <label className="text-xl text-white" htmlFor="problem">Problem</label>
                    <input 
                        className="md:w-[700px] w-[300px] p-4 rounded-md text-black"
                        id="problem" 
                        name="problem" 
                        type="text"
                        value={updateProblem}
                        onChange={handleProblemChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <div className="flex flex-col gap-0">
                        <label htmlFor="description" className="text-white">Description</label>
                        <p className="font-serif font-thin text-[12px]">Provide a description of the problem.</p>
                    </div>
                    <textarea 
                        className="md:w-[700px] w-[300px] p-4  rounded-md row-auto text-black"
                        id="description"
                        name="description"
                        type="text"
                        rows="4"
                        cols="100"
                        value={updateDescription}
                        onChange={handleDescriptionChange}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="solution" className="text-white">Solution</label>
                    <textarea 
                        className="md:w-[700px] w-[300px] p-4 rounded-md row-auto text-black"
                        id="solution"
                        name="solution"
                        type="text"
                        rows="12"
                        cols="100"
                        value={updateSolution}
                        onChange={handleSolutionChange} 
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
                    <label className="text-xl text-white" htmlFor="youtube">
                        Youtube
                    </label>
                    <input 
                        className="md:w-[700px] w-[300px] p-4 rounded-md text-black"
                        id="youtube"
                        name="youtube"
                        type="url"
                        value={updateYoutube}
                        onChange={handleYoutubeChange}
                        placeholder="Enter YouTube URL"
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <label className="text-xl text-white" htmlFor="resource">Resource/Document link</label>
                    <input 
                        className="md:w-[700px] w-[300px] p-4  rounded-md text-black"
                        id="resource"
                        name="resource"
                        type="url"
                        value={updateResource}
                        onChange={handleResourceChange}
                        placeholder="Enter Resource URL"
                    /> 
                </div>
            </div>
            <div className='flex gap-10 pt-10 justify-center'>
                <button className="md:w-[300px] w-[300px] bg-purple-800 p-3 rounded-full hover:bg-purple-900 shadow-sm shadow-gray-400" onClick={handleSubmit}>Save</button>
                <button className="md:w-[300px] w-[300px] bg-purple-800 p-3 rounded-full hover:bg-purple-900 shadow-sm shadow-gray-400" onClick={onClose}>Cancel</button>
            </div>
        </div>
    );
}

export default EditPost;
