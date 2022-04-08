import { useState } from 'react';

const Post = ({ post }) => {
    const [likes, setLikes] = useState(0)
    
    return (
        <div className="post">
            <img className="post-image"src={post.image}></img>
            <p>Post by {post.username} • {likes} likes</p>
            <button onClick={() => { setLikes(likes + 1)}}><i class="fa-solid fa-heart" style={{}}></i></button>
            <p className='post-content'>{post.content}</p>
        </div>
    )
}

export default Post;