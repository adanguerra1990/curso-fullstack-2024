import './App.css'

const Header = ({course}) => {
  console.log('header', course)
  return (
    <p> {course.name} </p>
  )
}

const Part = ({ part, exercises }) => {
  console.log('Part', part, exercises)

  return (
    <p> {part} {exercises}</p>
  )
}

const Content = ({ parts }) => {
  console.log('Content', parts)
  return (
    <div>
      {parts.map((part) => {
        console.log('Map', part);
        return <Part key={part.name} part={part.name} exercises={part.exercises} />
      })}
    </div>
  )
}

const Total = ({ total }) => {
  console.log('Total', total)

  return (
    <p>Number of exercises {total} </p>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };

  console.log(course)

  const totalExercises = course.parts.reduce((sum, part) => sum + part.exercises, 0);

  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />

      <Total total={totalExercises} />
    </div>
  )
}
export default App
