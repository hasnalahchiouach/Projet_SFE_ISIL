import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


export default class Candidat extends Component {

  
    /*deleteCandidat = (id) => {
        Axios.delete('http://localhost:5000/candidats/'+id)
        .then(this.props.deleteCandidat(id))
    }*/
    render() {
        return (
      
                   
                  
                   
            <tr>
            <td>{this.props.data.CNE}</td>
            <td>{this.props.data.CIN}</td>
            <td>{this.props.data.Prenom}</td>
            <td> {this.props.data.Nom}</td>
            <td> {this.props.data.DateNaissance}</td>
            <td>{this.props.data.Adresse}</td>
            <td>{this.props.data.Sexe}</td>
            <td>{this.props.data.E_mail}</td>
            <td>{this.props.data.EtatCivil}</td>
            <td>{this.props.data.Nationalite}</td>
            <td>{this.props.data.CodePostal}</td>
            <td>{this.props.data.Telephone}</td>
            <td> {this.props.data.NiveauDemande}</td>
            </tr>
            
        )
    }
}
//export default connect(null,{deleteCandidat})(Candidat);
