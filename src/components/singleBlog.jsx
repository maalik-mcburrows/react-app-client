import React, { Component } from 'react';

class SingleBlog extends Component {
    state = {
        blog: []
    };

    loadData = async () => {
        const { id } = this.props.match.params
        const response = await fetch(`http://localhost:3535/blogs/${id}`);
        const data = await response.json();
        console.log(data);
        return data;
    };

    componentDidMount = async () => {
        const blogData = await this.loadData();
        this.setState({
            blog: blogData                              
        });
    };

    render() {
        const { blog } = this.state;
        return(
            <div>
            <h2>Blog Title: {blog.title}</h2>
            <h3>Blog Author Name: {blog.name}</h3>
            <p>Entry: {blog.entry}</p>

        </div>
        )
    }
};

export default SingleBlog;