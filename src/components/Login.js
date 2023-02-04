import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login(props) {

    const history=useNavigate();
    const [error, setError] = useState('');

    const url="https://s5final-production.up.railway.app/utilisateur/login"
    const [data,setData]=useState({
        identifiant:"",
        mdp:""
    })      
    const [par,setPar]=useState("");
    // const[identifiant,setIdentifiant]=useState("");
    // const[mdp,setMdp]=useState("");

    const [token,setToken]=useState([]);
    useEffect(() =>{
        setData({"identifiant":"Bema","mdp":"maharo000"})
        const params=new URLSearchParams(window.location.search);
        setPar(params.get('idenchere'))
    },[])

    function submit(e){
        e.preventDefault();
        axios
        .post(url,{
            identifiant:data.identifiant,
            mdp:data.mdp
        })
            .then((res)=>{
                // console.log(res.data)
                setToken(res.data)
                console.log(res.data.idUtilisateur)
                sessionStorage.setItem("token",res.data.valeur)
                sessionStorage.setItem("idUtilisateur",res.data.idUtilisateur)
                sessionStorage.setItem("idenchere",par)
                history('/rencherir?idenchere='+par+'&iduser='+res.data.idUtilisateur)
            })
            .catch((error)=>{
                setError(error.message);
                sessionStorage.removeItem("token");
                sessionStorage.removeItem("idUtilisateur");
                sessionStorage.removeItem("idenchere");
                window.alert("informations incorrectes");
            });
    };

    function handle(e){
        const newdata ={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }
    
    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={(e)=>submit(e)}>
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Identifiant</label>
                <input onChange={(e)=>handle(e)} type="text"  id="identifiant"   value={data.identifiant} name="identifiant" className="form-control"/>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Mot de passe</label>
                <input onChange={(e)=>handle(e)} type="password" id="mdp" value={data.mdp} name="mdp"  className="form-control"/>
                </div>
                <button className="btn btn-primary">Connexion</button>
            </form>
            <br/>
            <p><a href="/">Accueil</a></p>
        </div>
    );
}

export default Login;