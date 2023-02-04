// import React from 'react';
// import { NavLink } from 'react-router-dom';

// const Navigation = () => {
//     var urlhisto="/about";
//     if(sessionStorage.getItem("idUtilisateur"))
//     urlhisto="/historique";
    
//     return (
//         <div className="navigation">
//             <ul>
//                 <NavLink to="/" className={(nav) => (nav.isActive ? "nav_active" : "")}>
//                     <li>Accueil</li>
//                 </NavLink>
//                 <NavLink to="/liste" className={(nav) => (nav.isActive ? "nav_active" : "")}>
//                     <li>Liste des encheres</li>
//                 </NavLink>
//                 <NavLink to="/login" className={(nav) => (nav.isActive ? "nav_active" : "")}>
//                     <li>Login</li>
//                 </NavLink>
//                 <NavLink to={urlhisto} className={(nav) => (nav.isActive ? "nav_active" : "")}>
//                     <li>Historique</li>
//                 </NavLink>
//             </ul>
            
//         </div>
//     );
// };

// export default Navigation;



import React from "react";
import { Nav, Navbar } from "react-bootstrap";

const Navigation = () => { 
    var urlhisto="/";
    if(sessionStorage.getItem("idUtilisateur"))
    urlhisto="/historique"; 

    return (
    <Navbar bg="light" expand="lg">
        <Navbar.Brand href="/">Encheres en ligne</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/liste">Liste</Nav.Link>
            <Nav.Link href={urlhisto}>Historique</Nav.Link>
            <Nav.Link href="/login">Log in</Nav.Link>
        </Nav>
        </Navbar.Collapse>
    </Navbar>
    )
}


export default Navigation;
