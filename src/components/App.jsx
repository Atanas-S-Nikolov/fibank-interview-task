import '../styles/App.css'

import { RouterProvider } from 'react-router-dom'
import { appRouter } from '../router/AppRouter'

function App() {

  return (
    <div className='app'>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default App
