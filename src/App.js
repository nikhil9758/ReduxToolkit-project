import logo from './logo.svg';
import './App.css';
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomeLayout from './Pages/HomeLayout';
import Landing from './Pages/Landing';
import {loader as CartLoader} from './Pages/Landing'
import { Provider } from 'react-redux';
import {store} from './store';

const router=createBrowserRouter([
      {
        path:'/',
        element:<HomeLayout/>,
        children:[
          {
            index:true,
            element:<Landing/>,
            loader: CartLoader
          }
        ]
      }
    ])

function App() {
  return (
    <div className="App">
      <Provider store={store}>
          <RouterProvider router={router}/>
      </Provider>
    </div>
  );
}

export default App;
