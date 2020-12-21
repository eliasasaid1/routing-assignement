import React, { Component } from 'react';

class Course extends Component {
    render () {
        const { match } = this.props;
        return (
            <div>
                <h1>{match.params.title}</h1>
                <p>You selected the Course with ID: {match.params.courseId}</p>
            </div>
        );
    }
}

export default Course;