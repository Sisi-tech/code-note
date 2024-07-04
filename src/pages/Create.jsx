import Head from "../component/Head";
import { supabase } from "../client.jsx";
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CreatePost = () => {

    return (
        <div className="w-full h-auto pb-40 pt-0 m-0 bg-black text-white text-xl font-sans font-light tracking-wide">
            <Head />
            <form className="flex flex-col justify-center items-center gap-10 pt-16">
                <div className="flex flex-col gap-5">
                    <div className="flex flex-col gap-2">
                        <label className="text-xl">Name</label>
                        <input className="md:w-[700px] w-[300px] p-4 text-black rounded-md"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl">Image</label>
                        <input className="md:w-[700px] w-[300px] p-4 text-black rounded-md"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <div className="flex flex-col gap-0">
                        <label>Description</label>
                        <p className="font-serif font-thin text-[12px]">Provide a description of the problem.</p>
                        </div>
                        <textarea className="md:w-[700px] w-[300px] p-4 text-black rounded-md row-auto"></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl text-purple-800">Resources</h1>
                        <label className="text-xl">
                            <FontAwesomeIcon icon={faYoutube} className="pr-3"/>
                            Youtube
                        </label>
                        <input className="md:w-[700px] w-[300px] p-4 text-black rounded-md"></input>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label className="text-xl">Document</label>
                        <input className="md:w-[700px] w-[300px] p-4 text-black rounded-md"></input>
                    </div>
                </div>
                <button className="md:w-[700px] w-[300px] bg-purple-800 p-3 rounded-full hover:bg-purple-900 shadow-sm shadow-gray-400">SUBMIT</button>
            </form>
        </div>
    )
}

export default CreatePost; 