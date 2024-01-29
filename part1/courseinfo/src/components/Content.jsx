import React from 'react';
import Part from './Part';

const Content = ({ parts }) => {
    console.log('Content parts.', parts)
    return (
        <div>
            {parts.map((part) => {
                return <Part
                    key={part.id}
                    part={part.name}
                    exercises={part.exercises}
                />
            })}
        </div>
    )
}

export default Content;
