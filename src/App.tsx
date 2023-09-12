
import {RouterProvider} from 'react-router-dom'
import { router } from './routes';
//import { useEffect } from 'react';
import './App.css';

function App() {

    return(                                                                                                
      <>
        <RouterProvider
          router={router}
        />
      </>
    
  );
}

export default App;