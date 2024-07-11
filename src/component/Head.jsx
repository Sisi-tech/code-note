import background from '../assets/sky.jpg'
import { Link } from "react-router-dom";

function Head() {
    return (
        <div 
            className="flex flex-col items-center justify-center w-100% h-[360px] text-white gap-10 border-b-2 border-gray-500"
            style={{ 
                backgroundImage: `url(${background})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center 40%' 
            }}
        >
            <Link to="/">
                <h1 className='md:text-5xl text-2xl font-bold'>
                    ALGORITHMIC PROBLEMS CHALLENGE
                </h1>
            </Link>
            <div className='flex md:gap-8 gap-2 md:text-2xl text-xl'>
                <Link to="/post">
                    <button 
                        className='mx-2 px-4 py-2 rounded-lg shadow-sm shadow-gray-500 bg-purple-800 hover:bg-gray-100 hover:text-black'
                    >
                        VIEW ALL PROBLEMS
                    </button>
                </Link>
                <Link to="/create">
                    <button 
                        className='mx-2 px-4 py-2 rounded-lg shadow-sm shadow-gray-500 bg-purple-800 hover:bg-gray-100 hover:text-black'
                    >
                        ADD A PROBLEM
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Head 