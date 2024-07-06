import { useState } from 'react';
import { faTrash, faEdit, faBook } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import DeletePost from '../pages/Delete';
import EditPost from '../pages/Edit';


const Card = (props) => {

    const handleDelete = async () => {
        await DeletePost(props.id)
        // Optionally, refresh the posts list or update the UI after deletion
    };

    const handleEdit = async () => {
        try {
            const newData = {
                problem: '',
                image: '',
                description: '',
                youtube: '',
                resource: '',
                solution: '',
            };
            const updatedData = await EditPost(props.id, newData);
            console.log("Update data:", updatedData);
        } catch (error) {
            console.error("Error editing post:", error);
        }
    }

    return (
        <div 
            className="border border-gray-400 rounded-lg md:w-[500px] w-[460px] h-auto m-4 p-10 text-black"
            style={{ 
                backgroundImage: `url(${props.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-xl font-bold'>{props.problem}</h1>
                <div className="flex items-center gap-3 text-md">
                    <Link to={`/post/${props.id}`} className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <button onClick={handleDelete} className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faTrash} />
                    </button>
                </div>
            </div>
            <div className='flex space-x-3'>
                {props.youtube && (
                    <a href={props.youtube}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                )}
                {props.resource && (
                    <a href={props.resource}>
                        <FontAwesomeIcon icon={faBook} />
                    </a>
                )}
            </div>
            <p>{props.description}</p>
            <p>Solution:</p>
            <p>{props.solution}</p>
            <p className='pt-4'>Created at: {props.time}</p>
        </div>
    )
};

export default Card;
