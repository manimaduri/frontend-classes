import './App.css'
import Hello from './components/Hello'

function App() {

  return (
    <div>
      <h1> React + Typescript setup complete</h1>
      <Hello name={"78"}></Hello>
      {/* a welcome component that accepts props title string, subtitle : string, year:number */}
      {/* <Welcome title="this is react project" subtitle={"using typescript"} year={2026} /> */}
       </div>
    
  )
}

export default App
