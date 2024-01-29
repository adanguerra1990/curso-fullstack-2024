import React from 'react';
import Course from './Course';

const CourseList = ({ courses }) => {
    console.log('lista', courses)
    return (
        <div>
            {courses.map(course => {
                const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

                return (
                    <Course
                        key={course.id}
                        course={course}
                        total={totalExercises}
                    />
                )
            })}
        </div>
    );
}

export default CourseList;
