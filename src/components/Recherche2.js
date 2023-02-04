import axios from 'axios';
import React, { useEffect, useState } from 'react';
import EnchereWS from './EnchereWS';

function Recherche2() {

    const url="https://s5final-production.up.railway.app/recherche"
    const [data,setData]=useState({
        motCle:"",
        date:"",
        categorie:"",
        prixMax:""
    })
    const cats=new Array();
    cats.push("Boisson");
    cats.push("Tennis");
    cats.push("Smartphone");
    cats.push("Art");

    const [resultat,setResultat]=useState([]);
    const [image,setImage]=useState([]);

    var lien=""
    
    // const resultat=EnchereWS.getEnchereList();
    useEffect(() =>{
        axios
            .get("https://s5final-production.up.railway.app/encheres/actuel" )
            .then((res)=>setResultat(res.data));
        lien="/login";
        if(sessionStorage.getItem("idUtilisateur"))
        lien="/rencherir?idenchere=";
        // axios.get("https://s5final-production.up.railway.app/api/data/mongo ")
        // .then((res)=>setImage(res.data)
            // console.log(res.data)
        // );
    },[]) 


    function submit(e){
        e.preventDefault();
        axios
        .post(url,{
            motCle:data.motCle,
            date: data.date,
            categorie:data.categorie,
            prixMax:data.prixMax
        })
            .then((res)=>{
                console.log(res.data)
                setResultat(res.data)
            })
    }

    function handle(e){
        const newdata ={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        // console.log(newdata)
    }

    return (
        <div >
            <div >
            <form onSubmit={(e)=>submit(e)} className="d-flex justify-content-center align-items-top">
                <div className="form-group">
                    <label htmlFor="inputText" className="col-sm-10 control-label">mot cle:</label>
                    <div className="col-sm-16">
                        <input onChange={(e)=>handle(e)} id="motCle" className="form-control" value={data.motCle} placeholder='motCle' type="text" name='motCle'/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputText" className="col-sm-2 control-label">Jusqu'au</label>
                    <div className="col-sm-16">
                    <input onChange={(e)=>handle(e)} id="date"  className="form-control" value={data.date}  type="date" name='date'/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="inputText" className="col-sm-10 control-label">Prix Max</label>
                    <div className="col-sm-16">
                    <input onChange={(e)=>handle(e)} id="prixMax" className="form-control" value={data.prixMax}  type="number" name='prixMax'/>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="selectList" className="col-sm-2 control-label">categories</label>
                    <div className="col-sm-16">
                    <select className="form-control" onChange={(e)=>handle(e)} id="categorie">
                        <option value=""></option>{                
                            cats.map(
                            (list,index) =>
                                <option value={index+1}>{list}</option>
                            )
                            }
                   </select>
                    </div>
                </div>
                <button className="btn btn-primary" style={{ height: "40px",marginTop: "22px" }}>Rechercher</button>
            </form>   
            <br/>
            <br/>
            </div>                    
            
            
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
                    <th className="col-md-1">Rencherir</th>
                    <th className="col-md-1">fiche</th>
                </tr>
            </thead>
            <tbody>
                {
                    resultat.map(
                        list =>
                        <tr key={list.id}>
                            <td className="col-md-1">{list.identifiant}</td>
                            <td className="col-md-2">{list.date}</td>
                            <td className="col-md-2">{list.produit}</td>
                            <td className="col-md-2">{list.description}</td>
                            <td className="col-md-1">{list.nomCategorie}</td>
                            <td className="col-md-2">{list.prix}</td>
                            <td className="col-md-1"><a href={"/login?idenchere=" +list.id}>Rencherir</a></td>
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

export default Recherche2;






{/* <div className="container">
                {resultat.map((list, index) => {
                    if (index % 3 === 0) {
                    return (
                        <React.Fragment key={list.id}>
                        <div className="row">
                            {list
                            .slice(index, index + 3)
                            .map((product) => (
                                <div className="col-md-4" key={list.id}>
                                <div className="card">
                                    <img
                                    src={product.image}
                                    className="card-img-top"
                                    alt={product.name}
                                    />
                                    <div className="card-body">
                                    <h5 className="card-title">{product.name}</h5>
                                    <p className="card-text">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing
                                        elit.
                                    </p>
                                    </div>
                                </div>
                                </div>
                            ))}
                        </div>
                        </React.Fragment>
                    );
                    }
                return null;
            })}
    </div>    */}