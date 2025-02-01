
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

function App() {
  

  return (
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={<FrontPage />} />
        <Route path='/nasdaq' element={<Nasdaq />} />
        <Route path='/snp' element={<Snp />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />

        </Route>
      </Routes>
      </BrowserRouter>
      </UserContextProvider>
      
    
  )
}

export default App
