
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Help from './views/Help'
import NoMatch from './views/NoMatch'
import Referencia from './views/Referencia'
import Preguntas from './views/Preguntas'

function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/help" element={<Help/>}>
          <Route path="referencia" element={<Referencia/>}></Route>
          <Route path="preguntas" element={<Preguntas/>}></Route>
        </Route>
        <Route path="*" element={<NoMatch/>}></Route>
        
      </Routes>
    </Router>

    </>
  )
}


export default App
