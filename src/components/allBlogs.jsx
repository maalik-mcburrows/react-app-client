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
                                        <h2>Title: {blog.title}</h2>
                                        <h3>Name: {blog.name}</h3>
                                        <p>Entry: {blog.entry}</p>
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