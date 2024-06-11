import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import './App.css'
import Main from './components/main/Main'
import Aside from './components/aside/Aside'

function App() {

  return (
   <div className='bg-black max-h-screen overflow-hidden'>
   <Router>
    <div className="flex items-start max-h-screen">
      <Aside/>
    <Routes>
      <Route path='/' element={<Main/>}/>
    </Routes>
    </div>
   </Router>
   </div>
  )
}

export default App
