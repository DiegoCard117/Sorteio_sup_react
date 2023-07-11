import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import { Sorteios }  from './pages/Sorteios';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home /> }/>
        <Route path='/sorteios' element= { <Sorteios /> }/>
      </Routes>
    </Router>
  )
}