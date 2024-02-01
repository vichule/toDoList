import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './app/store.js'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Home } from './pages/home/home.jsx'
import { UserPage } from './pages/userpage/userpage.jsx'
import { UserProjects } from './pages/userprojects/userprojects.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/userpage' element={<UserPage/>}/>
          <Route path='/userprojects' element={<UserProjects/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
