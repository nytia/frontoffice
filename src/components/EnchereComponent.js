import { Component } from "react";
import EnchereWS from "./EnchereWS";
import Recherche2 from "./Recherche2";

class EnchereComponent extends Component{
    constructor(props){
        super(props)

        this.state= {
            encheres:[]
        }
    }

    componentDidMount(){
        EnchereWS.getEnchereList().then((res)=>{
            this.setState({encheres: res.data})
        });
        this.setState(this.props.resulat)
    }

    render(){
        return(
            <div>
                <Recherche2/>
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
                                <th>prix</th>
                                <th>miser</th>
                                <th>fiche</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.encheres.map(
                                    list =>
                                    <tr key={list.id}>
                                        <td>{list.identifiant}</td>
                                        <td>{list.date}</td>
                                        <td>{list.produit}</td>
                                        <td>{list.description}</td>
                                        <td>{list.nomCategorie}</td>
                                        <td>{list.prix}</td>
                                        <td><a href={"rencherir?idenchere="+list.id}>Rencherir</a></td>
                                        <td><a href={"/fiche?id=" +list.id}>Voir detail</a></td>
                                    </tr>
                                    
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
export default EnchereComponent;
