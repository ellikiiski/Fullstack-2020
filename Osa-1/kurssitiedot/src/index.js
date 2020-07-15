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
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} part2={part2} part3={part3}
        exrs1={exercises1} exrs2={exercises2} exrs3={exercises3} />
      <Total exrs1={exercises1} exrs2={exercises2} exrs3={exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))