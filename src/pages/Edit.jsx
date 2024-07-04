
import { supabase } from "../client";

const EditPost = async (id, newData) => {
    try {
        const { data, error } = await supabase 
        .from('code_note')
        .update(newData)
        .eq('id', id)
        .single();

        if(error) {
            console.error("Error editing post: ", error.message);
            return null;
        }
        if (data) {
            return data[0];
        } else {
            console.error("No data returned from updated operation");
            return null;
        }
    } catch (error) {
        console.error("There is an error while editing post", error);
        throw error;
    }
}

export default EditPost;