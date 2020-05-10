import React, { Component } from 'react'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Annonce.css'
import {getInformations} from '../../actions/InformationActions';
import axios from 'axios';

class Annonce extends Component {

    /*deleteCandidat = (id) => {
        Axios.delete('http://localhost:5000/candidats/'+id)
        .then(this.props.deleteCandidat(id))
    }*/
    state = {
        annonce: {},
        filieres: []
    }
    componentDidMount = async () => {
        await this.setState({
            annonce: this.props.annonces.find(element => element.ID_Annonce == this.props.match.params.id)
        })
        await this.setState({
            filieres: this.props.filieres.filter(element => element.Niveau == this.state.annonce.Niveau)
        })
        console.log(this.state.filieres)
        axios.get('http://localhost:5000/informations')
    .then(res => this.props.getInformations(res.data))
    
    }
    render() {
        return (
            <div className="flex-container">
                <div style={{ flexGrow: 1 }}></div>
                <div style={{ flexGrow: 4 }}>


                    <h3>Filieres Ouvertes</h3>

                    <ul class="list-group">
                        {
                            this.state.filieres.map(element => {
                                return (
                                    <Link to={"/annonceFiliere/"+element.ID_Filiere}><li style={{ fontSize: "20px" }} class="list-group-item py-0">{element.Libelle_Filiere}</li></Link>
                                    
                                )
                            })
                        }
                    </ul>
                </div>
                <div style={{ flexGrow: 1 }}></div>
                <div style={{ flexGrow: 4, marginTop: 50 }}>
                    <table className="table table-bordered table-sm">

                        <tbody>
                            <tr>
                                <th colspan="2" style={{ textAlign: "center" }}>{this.state.annonce.Titre_Annonce}</th>
                            </tr>
                            <tr>
                                <th scope="row">Date limite de Préinscription en ligne 	</th>
                                <td>{new Date(this.state.annonce.Date_Limite).toLocaleDateString("en-US")}</td>

                            </tr>
                            <tr>
                                <th scope="row">Affichage des résultats de la sélection	</th>
                                <td>{new Date(this.state.annonce.Date_Resultat_Preinscription).toLocaleDateString("en-US")}</td>

                            </tr>
                            {this.state.annonce.Date_Concours ?
                            <tr>
                                <th scope="row">Concours d'admission (Test écrit)	</th>
                                <td>
                                
                                {new Date(this.state.annonce.Date_Concours).toLocaleDateString("en-US")}
                            
                            
                            </td>

                            </tr>
                            :  null  }
                            <tr>
                                <th scope="row">Procedure de sélection</th>
                                <td>{this.state.annonce.Procédure_Selection}</td>
                            </tr>
                            {this.state.annonce.Date_Resultat_Concours ? 
                             <tr>
                                <th scope="row">Affichage des résultats du test écrit	</th>
                                <td>{new Date(this.state.annonce.Date_Resultat_Concours).toLocaleDateString("en-US")}</td>
                            </tr>
                      :null  }
                           
                        </tbody>
                    </table>


                </div>
                <div style={{ flexGrow: 1 }}></div>
                <button  style={{ height:'45px' ,width:'150px', float:'left', marginRight:20, marginTop:20,backgroundColor:'#b49c73',borderRadius:'20px',color:'white'}} onClick={()=>this.props.history.push('/annonce')}> Back to home</button>
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        annonces: state.annonce.annonces,
        filieres: state.filiere.filieres
    }
}
export default connect(mapStateToProps, {getInformations})(Annonce);
