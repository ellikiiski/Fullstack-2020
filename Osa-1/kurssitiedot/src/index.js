import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return (
    <div>
      <p>
        {props.part} {props.exrs}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part part={props.part1} exrs={props.exrs1} />
      <Part part={props.part2} exrs={props.exrs2} />
      <Part part={props.part3} exrs={props.exrs3} />
    </div>
  )
}

const Total = (props) => {
  const totalExrs = props.exrs1 + props.exrs2 + props.exrs3
  return (
    <div>
      <p>
        Number of exercises {totalExrs}
      </p>
    </div>
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
  }

  return (
    <div>
      <Header course={course.name}/>
      <Content part1={course.parts[0].name} part2={course.parts[1].name} part3={course.parts[2].name}
        exrs1={course.parts[0].exercises} exrs2={course.parts[1].exercises} exrs3={course.parts[2].exercises} />
      <Total exrs1={course.parts[0].exercises} exrs2={course.parts[1].exercises} exrs3={course.parts[2].exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))