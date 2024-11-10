import React, { useReducer, useEffect } from 'react';
import useFetch from '../data/useFetch';
import TableHeader from '../components/TableHeader';
import TableDataReducer from '../data/TableDataReducer';
import { Link } from 'react-router-dom';
import Accordion from '../components/Accordion';

const Lab5Page = () => {
    const [posts] = useFetch("https://jsonplaceholder.typicode.com/posts");
    const [users] = useFetch("https://jsonplaceholder.typicode.com/users");
    const [comments] = useFetch("https://jsonplaceholder.typicode.com/comments");

    const initialData = posts.map((p) => ({
        user: users.find((u) => u.id === p.userId),
        post: p,
        comments: comments.filter((c) => c.postId === p.id),
    }));

    const [tableData, dispatch] = useReducer(TableDataReducer, initialData);

    const truncateTitle = (title) => {
        const words = title.split(' ');
        if (words.length <= 3) {
            return title;
        } else {
            return words.slice(0, 3).join(' ') + '...';
        }
    };

    useEffect(() => {
        const data = posts.map((post) => ({
            user: users.find((user) => user.id === post.userId),
            post: post,
            comments: comments.filter((comment) => comment.postId === post.id),
        }));
        dispatch({ type: 'SET_INITIAL_DATA', initialData: data });
    }, [posts, users, comments]);

    const handleSortUser = (order) => {
        if (order !== 'natural') {
            dispatch({ type: 'SORT_BY_USER', order });
        } else {
            dispatch({ type: 'SET_INITIAL_DATA', initialData });
        }
    };

    const handleSortTitle = (order) => {
        if (order !== 'natural') {
            dispatch({ type: 'SORT_BY_TITLE', order });
        } else {
            dispatch({ type: 'SET_INITIAL_DATA', initialData });
        }
    };

    const handleSortComments = (order) => {
        if (order !== 'natural') {
        dispatch({ type: 'SORT_BY_COMMENTS', order });
        } else {
            dispatch({ type: 'SET_INITIAL_DATA', initialData });
        }
    };

    return (
        <div className="table-container">
            <h1>Lab5: Data Fetching and Sorting Example</h1>
            <table >
                <thead>
                    <tr>
                        <TableHeader label="User" onSort={handleSortUser} />
                        <TableHeader label="Post title" onSort={handleSortTitle} />
                        <TableHeader label="Comments count" onSort={handleSortComments} />
                    </tr>
                </thead>
                <tbody>
                    {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.user ? <Link to={`/lab5/users/${row.user.id}`}>{row.user.name}</Link> : "Loading..."}</td>                               
                                <td>
                                    <Accordion
                                        title={truncateTitle(row.post.title)}
                                        content={row.post.title}
                                    />
                                </td>
                                <td>
                                    <Link to={`/lab5/posts/${row.post.id}/comments`}>{row.comments.length}</Link>
                                </td>
                            </tr>
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default Lab5Page;
