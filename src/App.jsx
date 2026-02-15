import { Route, Routes } from 'react-router-dom'
import './App.css'
import StopWatch from './components/StopWatch'
import Dashboard from './components/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/stopwatch" element={<StopWatch />} />
    </Routes>
  )
}