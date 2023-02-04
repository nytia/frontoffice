// import axios from 'axios';
// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import EnchereWS from './EnchereWS';

// function RencherirComponent() {

//     const history=useNavigate();
//     const [error, setError] = useState('');

    
//     const url="https://s5final-production.up.railway.app/rencherir"
//     const [idenchere,setIdenchere]=useState("");
//     const [iduser,setIduser]=useState("");
//     const [data,setData]=useState({
//         montant:"",
//         autre:""
//     })

//     console.log('idenchere'+idenchere);
//     const [encherissement,setEncherissement]=useState();
//     const params=new URLSearchParams(window.location.search);

//     // this.state= {
//     //     id:null,
//     //     encherissement:null
//     // }
    
//     useEffect(() =>{
//         // EnchereWS.getLastMise(this.state.id).then((res)=>{
//         //     setEncherissement(res.data)
//         // })
//         setData({"montant":"2000"})
//         const params=new URLSearchParams(window.location.search);
//         setIdenchere(params.get('idenchere'))
//         setIduser(sessionStorage.getItem("idUtilisateur"))
//         console.log('iduser'+iduser)
//     },[])

//     function submit(e){
//         e.preventDefault();
//         axios
//         .post(url,{
//             prix:data.montant,
//             idenchere:params.get('idenchere'),
//             idutilisateur:sessionStorage.getItem("idUtilisateur")
//         })
//             .then((res)=>{
//                 console.log(res.data)
//                 // history('/liste');
//                 // setResultat(res.data)
//             })
//             .catch((error=>{
//                 setError(error.message);
//                 window.alert('Un probleme vous empeche de rencherir sur cette enchere')
//                 // history('/liste')
//             }))
//     }


//     function handle(e){
//         const newdata ={...data}
//         newdata[e.target.id] = e.target.value
//         setData(newdata)
//         // console.log(newdata)
//     }

//     return (
//         <div>
//             <form onSubmit={(e)=>submit(e)} className="d-flex justify-content-center align-items-top">
//                 <div className="form-group">
//                     <label htmlFor="inputText">Mise</label>
//                     <input onChange={(e)=>handle(e)} id="prix" type="text" className="form-control" value={data.montant} name="prix"/>
//                 </div>
//                 <input onChange={(e)=>handle(e)} id="autre" type="hidden" value={data.autre} name="autre"/>
//                 <button type="submit" className="btn btn-primary">Soumettre</button>
//             </form>
//         </div>
//     );
// }

// export default RencherirComponent;


import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RencherirComponent() {

    const history=useNavigate();
    const [idenchere,setIdenchere]=useState("");
    const [inputValue, setInputValue] = useState('');
    const url="https://s5final-production.up.railway.app/rencherir"
    const params=new URLSearchParams(window.location.search);
    // const params=new URLSearchParams(window.location.search);
    const [error, setError] = useState('');
    useEffect(() =>{
        // const params=new URLSearchParams(window.location.search);
        setIdenchere(params.get('idenchere'))
        console.log("idench"+params.get('idenchere'));
        console.log("idus"+sessionStorage.getItem("idUtilisateur"));
    },[])
    function submit(e){
            e.preventDefault();
            axios
            .post(url,{
                prix:inputValue,
                idenchere:params.get('idenchere'),
                idutilisateur:sessionStorage.getItem("idUtilisateur")
            })
                .then((res)=>{
                    console.log(res.data)
                    history('/');
                    // setResultat(res.data)
                })
                .catch((error=>{
                    setError(error.message);
                    window.alert('Un probleme vous empeche de rencherir sur cette enchere')
                    // history('/liste')
                }))
        }

  const handleInputChange = event => {
    setInputValue(event.target.value);
  };

  return (
    <form  onSubmit={(e)=>submit(e)} className="d-flex justify-content-center align-items-top">
      <div className="form-group">
      <label htmlFor="inputText">Mise</label>
        <input type="number" value={inputValue} className="form-control" onChange={handleInputChange} name="prix" id="prix" />
      </div>
      <button type="submit" className="btn btn-primary" style={{ height: "40px",marginTop: "22px" }}>Rencherir</button>
    </form>
  );
}

export default RencherirComponent;
