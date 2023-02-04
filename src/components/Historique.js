import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Historique(props) {

    // navigate=useNavigate();

    const [resultat,setResultat]=useState([]);

    const url="https://s5final-production.up.railway.app/historiques/";

    useEffect(() =>{
        axios
        .get("https://s5final-production.up.railway.app/historiques/"+sessionStorage.getItem("idUtilisateur") )
        .then((res)=>setResultat(res.data));
        
    },[]) 

    return (
        <div>
            <div className="row">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="col-md-1">Vendeur</th>
                                <th className="col-md-2">date</th>
                                <th className="col-md-2">produit</th>
                                <th className="col-md-2">description</th>
                                <th className="col-md-1">Categorie</th>
                                <th className="col-md-2">prix</th>
                                <th className="col-md-1">fiche</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                resultat.map(
                                    (list,index) =>
                                    <tr key={index}>
                                        <td className="col-md-1">{list.identifiant}</td>
                                        <td className="col-md-2">{list.date}</td>
                                        <td className="col-md-2">{list.produit}</td>
                                        <td className="col-md-2">{list.description}</td>
                                        <td className="col-md-1">{list.nomCategorie}</td>
                                        <td className="col-md-2">{list.prix}</td>
                                        <td className="col-md-1"><a href={"/fiche?id=" +list.id}>Voir detail</a></td>
                                    </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
        </div>
    );
}

export default Historique;