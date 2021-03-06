import React, { Component } from 'react';
import { Link,Route } from 'react-router-dom';
import './Courses.css';
import Course from  '../Course/Course';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return <article className="Course" key={course.id}><Link to={`/courses/${course.id}/${encodeURIComponent(course.title)}`} > {course.title}</Link></article>;
                        } )
                    }
                </section>
                <Route path={`/courses/:courseId/:title`} component={Course}/>
            </div>
        );
    }
}

export default Courses;