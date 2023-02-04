import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './pages/About';
import FicheEnchere from './pages/FicheEnchere';
import Home from './pages/Home';
import ListeEnchere from './pages/ListeEnchere';
import Recherche from './pages/Recherche';
import"../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LoginPage from './pages/LoginPage';
import RencherirPage from './pages/RencherirPage';
import HistoriquePage from './pages/HistoriquePage';
import Login from './components/Login';
import EnchereChecker from './components/EnchereCheker';
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Recherche/>}/>
        <Route path="/*" element={<Login/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/liste" element={<Recherche/>}/>
        <Route path="/fiche" element={<FicheEnchere/>}/>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/rencherir" element={<RencherirPage/>}/>
        <Route path="/historique" element={<HistoriquePage/>}/>
      </Routes>
      <EnchereChecker/>
    </BrowserRouter>
  );
};

export default App;


// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [documents, setDocuments] = useState([]);

//   useEffect(() => {
//     fetch("https://s5final-production.up.railway.app/api/data/mongo")
//       .then((response) => response.json())
//       .then((data) => setDocuments(data));
//   }, []);

//   return (
//     <div>
//       <h1>List of Documents</h1>
//       {documents.map((document) => (
//         <div key={document.id}>
//           <h2>{document.title}</h2>
//           <p>{document.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default App;

