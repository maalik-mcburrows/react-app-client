import React, { Component } from 'react';

class AllBlogs extends Component {
    state = {
        blogs: []
    };

    loadData = async () => {
        const response = await fetch("http://localhost:3535/blogs");
        const data = await response.json();
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
                                        <h2>Blog Title: {blog.title}</h2>
                                        <h3>Blog Author Name: {blog.name}</h3>
                                        <p>Entry: {blog.entry}</p>
                                        <b>Comment Author Name: {blog.first_name + ' ' + blog.last_name}</b>
                                        <p>Comment: {blog.text}</p>
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