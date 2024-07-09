import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { faTrash, faEdit, faBook } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import DeletePost from '../pages/Delete';
import EditPost from '../pages/Edit';

const Card = (props) => {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = async () => {
        try {
            await DeletePost(props.id);
        } catch (error) {
            console.error("Error deleting post:", error);
        }
    };
    const handleEdit = () => {
        console.log("Edit icon clicked")
        setShowEdit(true);
    }
    const handleClose = () => {
        setShowEdit(false);
    }

    return (
        <div>
            <Link to={`/post/${props.id}`} >
                <div 
                    className={`border border-gray-400 rounded-lg md:w-[500px] w-[460px] h-[520px] m-4 p-10 text-black ${props.className}`}
                    style={{ 
                        backgroundImage: `url(${props.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                >
                    <div className="flex justify-between items-center mb-4">
                        <h1 className='text-xl font-bold'>{props.problem}</h1>
                        <div className="flex items-center gap-3 text-md">
                            <button onClick={handleEdit} className="flex items-center justify-center">
                                <FontAwesomeIcon icon={faEdit} />
                            </button>
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
            </Link>
            {showEdit && <EditPost post={props} onClose={handleClose} />}
        </div>
    );
};

export default Card;
