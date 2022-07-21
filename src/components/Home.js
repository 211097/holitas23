import React from 'react'
import { Outlet } from 'react-router-dom'
import '../styleSheets/App.css'

function Home() {
  return (
    <div className="App">
      <section className="App-header">
        <Outlet />
      </section>
      

      
    </div >
  )
}

export default Home;