import React, { Component } from 'react';

class Comments extends Component {
    state = {
        comments: []
    };

    loadData = async () => {
        const { id } = this.props.match.params
        const response = await fetch(`http://localhost:3535/blogs/${id}/comments`);
        const data = await response.data();
        console.log(data);
        return data;
    }

    componentDidMount = async () => {
        const commentData = await this.loadData();
        this.setState({
            comments: commentData
        });
    }

    render() {
        console.log(this.state.comments)
        const { comments } = this.state;
        return(
            <ul>
                {comments.length > 0 ? (
                    comments.map(comment => (
                        <li key={comment.id}>
                            <p><b>{comment.first_name + " "} {comment.last_name + ": "}</b>{comment.text}</p>
                        </li>
                    ))
                ) : (
                    <li><b>No comments on this post.</b></li>
                    )}
            </ul>
        )
    }
};

export default Comments;