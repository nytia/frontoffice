// import axios from 'axios';
// import React, { Component, useState } from 'react';
// import CategorieWS from './CategorieWS';
// import Recherche2 from './Recherche2';

// class RechercheComponent extends Component{
//     constructor(props){
//         super(props)

//         this.state= {
//             liste:[],
//             url:"https://s5final-production.up.railway.app/recherche"
//         }
//         this.data={
//             motCle:"",
//             date:"",
//             categorie:"",
//             prixMax:""
//         }
//     })
//     }

//     componentDidMount(){
//         CategorieWS.getCategories().then((res)=>{
//             this.setState({liste: res.data})
//         });
//     }<


//     // const [data,setData]=useState({
//     //     motCle:"",
//     //     date:"",
//     //     categorie:"",
//     //     prixMax:""
//     // })

    

//     render(){
//     return (
//         <div>
//             <form onSubmit={(e)=>this.props.submit(e)}>
//                 mot cle: <input onChange={(e)=>this.props.handle(e)} id="motCle" value={data.motCle} placeholder='motCle' type="text" name='motCle'/>
//                 date: <input onChange={(e)=>this.props.handle(e)} id="date" value={data.date}  type="date" name='date'/>
//                 categorie: <input onChange={(e)=>this.props.handle(e)} id="categorie" value={data.categorie}  type="number" name='categorie'/>
//                 prixMax: <input onChange={(e)=>this.props.handle(e)} id="prixMax" value={data.prixMax}  type="number" name='prixMax'/>
//                 <button>Ajouter</button>
//             </form>
//         </div>
//     )
//     };
// }

// export default RechercheComponent;