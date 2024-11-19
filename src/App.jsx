import './App.css'
import { Link } from 'react-router-dom';

function App() {
  return (
    <>
      <h1>WELCOME TO THE HOME PAGE TRAVELLER!!!</h1>
      <p>This is just a recreation used for practice purposes</p>
      <Link to={"my-path"}>Enter 'My Path' Traveller</Link>
    </>
  )
}

export default App;
