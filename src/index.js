import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard/Dashboard';
import Data_Kos from './pages/Data_Kos';
import Data_Fasilitas from './pages/Data_Fasilitas';
import Karyawan from './pages/Karyawan';
import Tamu from './pages/Tamu';
import Manajemen_Kontrak from './pages/Manajemen_Kontrak';
import Manajemen_Plan from './pages/Manajemen_Plan';
import Invoice from './pages/Invoice';
// import Login from './pages/Login';
import Sidebar from './components/Sidebar';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <BrowserRouter>
    {/* <Routes>
      <Route path="/Login" exact element={<Login />} />
    </Routes> */}

      <Sidebar>
      <Routes>
        <Route path="/" exact element={<Dashboard />} />
        <Route path="/Data_Kos" exact element={<Data_Kos />} />
        <Route path="/Data_Fasilitas" exact element={<Data_Fasilitas />} />
        <Route path="/Karyawan" exact element={<Karyawan />} />
        <Route path="/Tamu" exact element={<Tamu />} />
        <Route path="/Manajemen_Kontrak" exact element={<Manajemen_Kontrak />} />
        <Route path="/Manajemen_Plan" exact element={<Manajemen_Plan />} />
        <Route path="/Invoice" exact element={<Invoice />} />
      </Routes>
      </Sidebar>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

