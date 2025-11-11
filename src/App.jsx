import React from 'react'
import AppRoute from './routes/appRoute'
import { ToastContainer } from 'react-toastify'


function App() {
  return (
    <div >
      <AppRoute />
      <ToastContainer position='top-center' />
    </div>
  )
}

export default App
