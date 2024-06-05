import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import Dashboard from './pages/Dashboard'
import Account from './pages/Account'
import Bookings from './pages/Bookings'
import Cabins from './pages/Cabins'
import Login from './pages/Login'
import PageNotFound from './pages/PageNotFound'
import Settings from './pages/Settings'
import NewUsers from './pages/Users'
import GlobalStyles from './styles/GlobalStyles'
import AppLayout from './ui/AppLayout'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000
    }
  }
})

function App() {
  return (
    <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools initialIsOpen={false} />
    <GlobalStyles/>
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout/>}>
        <Route index element={<Navigate replace to="dashboard"/>}/>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="account" element={<Account/>} />
        <Route path="bookings" element={<Bookings/>} />
        <Route path="cabins" element={<Cabins/>} />
        <Route path="settings" element={<Settings />} />
        <Route path="users" element={<NewUsers />} />
        </Route>
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />       
      </Routes>
    </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App