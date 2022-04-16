import './App.css';
import CoastersDetails from './pages/CoastersDetails/CoastersDetails';
import CoastersPage from './pages/CoastersPage/CoastersPage';
import IndexPage from './pages/IndexPage/IndexPage';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    < div className = "container">
      <Routes>


    <Route path="/" element={<IndexPage />} /> 
    <Route path="/galeria" element={<CoastersPage />} />
    <Route path="/detalles/:coaster_id" element={< CoastersDetails />} />
      </Routes>
    </div>
  )
};

export default App
