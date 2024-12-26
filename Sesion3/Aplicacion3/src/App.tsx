
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './views/Home'
import Help from './views/Help'
import NoMatch from './views/NoMatch'
import Referencia from './views/Referencia'
import Preguntas from './views/Preguntas'
import ItemsList from './views/ItemsList'


function App() {


  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/items/:id" element={<ItemsList />} />  {/* Ruta con parámetro id para cumplir con el punto 2b*/}
        <Route path="/help" element={<Help/>}> {/*Ruta para cumplir con el punto 4 donde le anidamos dos rutas de referencia y preguntas */}
          <Route path="referencia" element={<Referencia/>}></Route>
          <Route path="preguntas" element={<Preguntas/>}></Route>
        </Route>
        <Route path="*" element={<NoMatch/>}></Route> {/*Todas las rutas que no sean las definidas llevar a NoMatch 
                                                        de pagina no entrada. para cumplir con el punto 3*/}

      </Routes>
    </Router>

    </>
  )
}


export default App
