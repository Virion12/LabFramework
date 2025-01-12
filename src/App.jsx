import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RootLayout from './layouts/RootLayout.jsx'
import { Route, Routes } from 'react-router-dom'
import Lab1 from './pages/Lab1.jsx'
import Lab2 from './pages/Lab2.jsx'
import Lab3 from './pages/Lab3.jsx'
import Home from './pages/Home.jsx'
import NotFound from './pages/NotFound.jsx'
import { menuItems } from './data/MenuItems.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <RootLayout>
        <Routes>
          {menuItems.map((item)=>(
            <Route key={item.id} path={item.urlPattern} element={item.element}/>
          ))}
        </Routes>
        
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      </RootLayout>
    </>
  )
}

export default App
