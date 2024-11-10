import React, { useState, useEffect } from 'react';
import useFetch from '../data/useFetch';
import TableHeader from '../components/TableHeader';

const Lab5Page = () => {
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");
    
    const [tableData, setTableData] = useState([]);

    useEffect(() => {
        const data = posts.map((post) => ({
            user: users.find((user) => user.id === post.userId),
            post: post,
            comments: comments.filter((comment) => comment.postId === post.id),
        }));
        setTableData(data);
    }, [posts, users, comments]);

    const handleSort = (field, order) => {
        const sortedData = [...tableData];

        if (order === 'asc') {
            sortedData.sort((a, b) => a[field].localeCompare(b[field]));
        } else if (order === 'desc') {
            sortedData.sort((a, b) => b[field].localeCompare(a[field]));
        }

        setTableData(order === 'natural' ? tableData : sortedData);
    };

    return (
        <div className="table-container">
            <h1>Lab5: Data Fetching and Sorting Example</h1>
            <table >
                <thead>
                    <tr>
                        <TableHeader label="User" onSort={(order) => handleSort('user', order)}/>
                        <TableHeader label="Post title" onSort={(order) => handleSort('post', order)} />
                        <TableHeader label="Comments count" onSort={(order) => handleSort('comments', order)} />
                    </tr>
                </thead>
                <tbody>
                    {tableData.map(({ user, post, comments }) => (
                        <tr key={post.id}>
                            <td>{user ? user.name : "Unknown User"}</td>
                            <td>{post.title}</td>
                            <td>{comments.length}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lab5Page;
