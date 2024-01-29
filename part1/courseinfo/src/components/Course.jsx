import React from 'react';
import Header from './Header';
import Content from './Content';
import Total from './Total';

const Course = ({course, total}) => {
    return (
        <div>
            <Header course={course} />
            <Content parts={course.parts}/>
            <Total total={total} />
        </div>
    );
}

export default Course;
