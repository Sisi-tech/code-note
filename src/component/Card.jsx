import { useState } from 'react'
import { faTrash, faEdit, faBook } from '@fortawesome/free-solid-svg-icons';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';


const Card = (props) => {

    return (
        <div 
            className="border border-gray-400 rounded-lg md:w-[500px] w-[460px] h-[300px] m-4 p-20 text-white"
            style={{ backgroundImage: `url(${props.image})` }}
        >
            <div className="flex justify-between items-center mb-4">
                <h1 className='text-xl font-bold'>{props.title}</h1>
                <div className="flex items-center gap-3 text-md">
                    <Link to={`/edit/${props.id}`} className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faEdit} />
                    </Link>
                    <Link to={`/delete/${props.id}`} className="flex items-center justify-center">
                        <FontAwesomeIcon icon={faTrash} />
                    </Link>
                </div>
            </div>
            <div className='flex space-x-3'>
                {props.youtube && (
                    <a href={props.youtube}>
                        <FontAwesomeIcon icon={faYoutube} />
                    </a>
                )}
                <a href={props.doc}>
                    <FontAwesomeIcon icon={faBook} />
                </a>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}

export default Card; 