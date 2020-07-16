## OSA 1
### Tehtävänannot

#### Kurssitiedot
#### 1.1
Luo create-react-app:illa uusi sovellus. Muuta index.js muotoon

<pre>import React from 'react'
import ReactDOM from 'react-dom'

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
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))</pre>

ja poista ylimääräiset tiedostot (App.js, App.css, App.test.js, logo.svg, serviceWorker.js).

Koko sovellus on nyt ikävästi yhdessä komponentissa. Refaktoroi sovelluksen koodi siten, että se koostuu kolmesta uudesta komponentista: Header, Content ja Total. Kaikki data pidetään edelleen komponentissa App, joka välittää tarpeelliset tiedot kullekin komponentille props:ien avulla. Header huolehtii kurssin nimen renderöimisestä, Content osista ja niiden tehtävämääristä ja Total tehtävien yhteismäärästä.

Komponentin App runko tulee olemaan suunnilleen seuraavanlainen:

<pre>const App = () => {
  // const-määrittelyt

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}</pre>
