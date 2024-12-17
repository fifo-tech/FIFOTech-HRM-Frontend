import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { routes } from './routes'

const App = () => {
  console.log(routes)
  const router = createBrowserRouter(routes);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
