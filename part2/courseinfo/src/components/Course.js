import React from 'react'

const Header = ({course}) => {
  return (
    <h2>{course.name}</h2>
  )
}

const Part = ({part}) => {
  return (
    <p>
      {part.name} {part.exercises}
    </p>
  )
}

const Content = ({course}) => {
  const exercises = course.parts.map((part)=>part.exercises)
  const totalExercices = exercises.reduce((acc, partExercise, _idx, _src) =>{
    return acc + partExercise
  })
  console.log(totalExercices)
  return (
    <div>
      <div>
      {course.parts.map((part) => 
          <Part key={part.id} part={part} />
        )}
      </div>
      <div>
        <strong>total of {totalExercices} exercises</strong>
      </div>
    </div>
  )
}


const Course = ({course}) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
    </div>
  )
}


export default Course