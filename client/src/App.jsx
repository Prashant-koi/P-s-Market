import {Route, Routes, BrowserRouter} from 'react-router-dom'
// import Header from './components/header'
import {UserContextProvider} from'./UserContext'
// import FrontPage from './components/frontpage'
import Layout from './components/Layout'
import Nasdaq from './components/Nasdaq'
import Snp from './components/Snp'
import FrontPage from './components/frontpage'
import LoginPage from './components/Login'
import SignUp from './components/Signup'
import { ProtectedRoute } from './components/ProtectedRoute'
import YourStocks from './components/YourStock'
import StockView from './components/StockView'

function App() {
  

  return (
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        {/* Public routes  */}
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path="/" element={

          <ProtectedRoute>
          <Layout />
          </ProtectedRoute>
          
          }>
        <Route index element={<FrontPage />} />
        <Route path='/nasdaq' element={<Nasdaq />} />
        <Route path='/snp' element={<Snp />} />
        <Route path='/yourstocks' element={<YourStocks />} />
        <Route path='/stock/:symbol' element={<StockView />} />

        </Route>
      </Routes>
      </BrowserRouter>
      </UserContextProvider>
      
    
  )
}

export default App
