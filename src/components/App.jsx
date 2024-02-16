import '../styles/App.css'

import { RouterProvider } from 'react-router-dom'
import { appRouter } from '../router/AppRouter'
import Navbar from './Navbar'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <main>
        <RouterProvider router={appRouter}/>
      </main>
    </div>
  )
}

export default App
