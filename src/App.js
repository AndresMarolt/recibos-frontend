import './App.css';
import {BrowserRouter, Routes, Route, Redirect } from 'react-router-dom'

import Receipt from './components/Receipt/Receipt';
import AdminLayout from './components/Admin/AdminLayout/AdminLayout';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<PrivateRoute/>}>
              <Route exact path='/' element={<Receipt/>}/>
            </Route>
            <Route path="/login" element={<Login/>} />
            <Route exact path='/admin/' element={<PrivateRoute/>}>
              <Route exact path='/admin/' element={<AdminLayout/>}/>
              <Route exact path='/admin/*' element={<AdminLayout/>}/>
            </Route>
            <Route path="/error" element={<div>ERROR</div>}/>
          </Routes>
        </BrowserRouter>
        
      </div>
  );
}

export default App;
