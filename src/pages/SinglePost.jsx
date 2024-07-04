
const SinglePost = async (id) => {
    try {
        console.log("singlePost with id: ", id);
        const { data: code_note, error} = await supabase 
            .from('code_note')
            .select('id', id)
        if (error) {
            console.error("Error reading single post: ", error);
        } else {
            console.log("read single post successfully")
        }
    } catch (error) {
        console.error("Unexpected error:", error);
    }
}

export default SinglePost 