import './app.scss'
// import Home from ".pages/home/Home";
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Watch from './pages/watch/Watch';
import { Register } from './pages/register/Register';

import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
  
} from "react-router-dom";

function App() {
 
  const user=false;
  
  return (
    <BrowserRouter>
    <Routes>
     <Route path="/" element={user ? <Home/> : <Navigate to="/register" replace />} />
     <Route path="/register" element={!user ? <Register/> : <Navigate to="/" replace />} />
     <Route path="/login" element={!user ? <Login/> : <Navigate to="/" replace />} />

     {
       user &&(<>
        <Route path="/movies" element={<Home type="movies"/>} />
       <Route path="/series" element={<Home type="series"/>} />
       <Route path="/watch" element={<Watch/>} />
       </>
       )
     }

     <Route
        path="*"
        element={<Navigate to="/register" replace />}
    />
     
    
    </Routes>
    </BrowserRouter>
  );

  // return (
  //   <>
  //     <Home/>
  //   </>
  // )
}

export default App;
