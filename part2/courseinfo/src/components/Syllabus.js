import React from 'react'
import Course from './Course'

const Syllabus = ({courses, title}) => {
  return (
    <div>
      <h1>{title}</h1>
      {courses.map((course) => 
          <Course key={course.id} course={course} />
        )}
    </div>
  )
}

export default Syllabus