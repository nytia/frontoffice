import axios from "axios";
import { Component } from "react";
import EnchereWS from "./EnchereWS";

class FicheComponent extends Component{
    constructor(props){
        super(props)
        const params=new URLSearchParams(window.location.search);
        const id=params.get('id');
        // const [image,setImage]=useState([]);
        console.log('idenchere'+id);
        this.state= {
            id:id,
            fiche:null,
            image:null
        }
    }

    componentDidMount(){
        EnchereWS.getEnchereById(this.state.id).then((res)=>{
            this.setState({fiche: res.data})
        });
         axios.get("https://s5final-production.up.railway.app/api/data/mongo ")
            .then((res)=>this.setState({image:res.data})
            // console.log(res.data)
        );
    }

    render(){
        return(
            <div>
                <h2 className="text-center">Liste des Encheres</h2>
                <div className="row">
                    <table className="table table-striped table bordered" border='1'>
                        <thead>
                            <tr>
                                <th>Vendeur</th>
                                <th>date</th>
                                <th>produit</th>
                                <th>description</th>
                                <th>Categorie</th>
                                <th>duree</th>
                                <th>prix</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr key={this.state.fiche?.id}>
                                <td>{this.state.fiche?.identifiant}</td>
                                <td>{this.state.fiche?.date}</td>
                                <td>{this.state.fiche?.produit}</td>
                                <td>{this.state.fiche?.description}</td>
                                <td>{this.state.fiche?.nomCategorie}</td>
                                <td>{this.state.fiche?.duree}</td>
                                <td>{this.state.fiche?.prix}</td>
                            </tr> 
                        </tbody>
                    </table>
                </div>
                    {/* {this.state.image.map((item,index) => (
                    <div class="card" key={index} >
                        <img src={item.image} alt="Image"  class="card-img-center"/>
                    </div>
                     ))}  */}
            </div>
        )
    }
}
export default FicheComponent;
