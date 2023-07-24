import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Application from './pages/Dashboard/Application'
import Customers from './pages/Dashboard/Customers'
import Favorited from './pages/Dashboard/Favorited'
import Reports from './pages/Dashboard/Reports'
import Subscription from './pages/Dashboard/Subscription'
import UserManagement from './pages/Dashboard/UserManagement'
import Settings from './pages/Dashboard/Settings'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/dashboard' element={<Application />} />
        <Route path='/dashboard/customers' element={<Customers />} />
        <Route path='/dashboard/favorited' element={<Favorited />} />
        <Route path='/dashboard/reports' element={<Reports />} />
        <Route path='/dashboard/subscription' element={<Subscription />} />
        <Route path='/dashboard/user-management' element={<UserManagement />} />
        <Route path='/dashboard/settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
