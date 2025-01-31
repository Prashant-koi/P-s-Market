
import {Route, Routes, BrowserRouter} from 'react-router-dom'
// import Header from './components/header'
import {UserContextProvider} from'./UserContext'
// import FrontPage from './components/frontpage'
import Layout from './components/Layout'

function App() {
  

  return (
    <UserContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

        </Route>
      </Routes>
      </BrowserRouter>
      </UserContextProvider>
      
    
  )
}

export default App
