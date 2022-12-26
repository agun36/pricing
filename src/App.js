import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { PricingPage } from './pages/pricingPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PricingPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
