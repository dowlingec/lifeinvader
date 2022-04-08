const CreatePostModal = ({newPostModalVisible}) => {
   return (
        <div className={newPostModalVisible ? "create-post-modal" : "create-post-modal-hidden"}>
            <h3>Create post</h3>
            <textarea rows="5" cols="30"/>
            <button type="submit">Create post</button>
        </div>
   )
}

export default CreatePostModal