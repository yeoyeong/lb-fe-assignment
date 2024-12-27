import { routerList } from '@src/shared/util/routerList';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {
  return <RouterProvider router={createBrowserRouter(routerList)} />;
}

export default App;