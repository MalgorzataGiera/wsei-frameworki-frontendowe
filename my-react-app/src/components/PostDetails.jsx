import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetails = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(err => console.error("Error fetching post data", err));

        fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
            .then(response => response.json())
            .then(data => setComments(data))
            .catch(err => console.error("Error fetching comments", err));
    }, [id]);

    if (!post || comments.length === 0) return <div>Loading...</div>;

    return (
        <div>
            <h1>{post.title}</h1>
            <p>{post.body}</p>
            <h3>Comments:</h3>
            <ul>
                {comments.map((comment) => (
                    <li key={comment.id}>
                        <span className="comment-email">{comment.email}</span>
                        <div className="comment-body">
                            <span className="comment-name">{comment.name}</span>: {comment.body}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostDetails;
