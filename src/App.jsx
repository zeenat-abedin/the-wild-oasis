import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Login from './pages/Login'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account" element={<Account/>} />
        <Route path="bookings" element={<Bookings/>} />
        <Route path="cabins" element={<Cabins/>} />
        <Route path="login" element={<Login/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App