import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AllBlogs extends Component {
    state = {
        blogs: []
    };

    loadData = async () => {
        const response = await fetch('http://localhost:3535/blogs');
        const data = await response.json();
        console.log(data);
        return data;
    };

    componentDidMount = async () => {
        const blogData = await this.loadData();
        this.setState({
            blogs: blogData
        });
    };

    render() {
        const { blogs } = this.state;
        return(
            <div>
                <ul>
                    { blogs.map(blog => {
                            return( 
                                <li key = {blog.id}>
                                    <div>
                                        <h3>Blog Title: {blog.title}</h3>
                                        <em>Blog Author Name: {blog.name}</em>
                                        <Link to={`/blogs/${blog.id}`}>View this Entry</Link>
                                    </div>
                                </li>
                            );
                        })}
                </ul>
            </div>
        )
    }
};

export default AllBlogs;