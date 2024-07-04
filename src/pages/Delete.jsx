import { supabase } from '../client';

const DeletePost = async (id) => {
    try {
        console.log("Delete post with id: ", id)
        const { error } = await supabase
            .from('code_note')
            .delete()
            .eq('id', id);
        if (error) {
            console.error("Error deleting post: ", error);
        } else {
            console.log("Post deleted successfully");
            window.location = '/';
        }
    } catch (error) {
        console.error("Unexpected error:", error);
    }
};

export default DeletePost;