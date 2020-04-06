import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        // console.log(this.props);
        console.log(this.state.blog);
        const { blog } = this.state;
        return (
            <div>
                { blog.map(blog => {
                    return( 
                        <div key = {blog.id}>
                            <h3>Blog Title: {blog.title}</h3>
                            <em>Blog Author Name: {blog.name}</em>
                            <p>Entry: {blog.entry}</p>
                            <Link to={`/blogs/${blog.id}/comments`}>View Comments for this Post</Link>
                        </div>
                    );
                })}
            </div>
        )
    }
};

export default SingleBlog;