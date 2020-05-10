import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


export default class Filiere extends Component {

  
    /*deleteCandidat = (id) => {
        Axios.delete('http://localhost:5000/candidats/'+id)
        .then(this.props.deleteCandidat(id))
    }*/
    render() {
        return (
            <tr>
            <td>{this.props.data.ID_Admin}</td>
            <td>{this.props.data.Libelle_Filiere}</td>
            <td>{this.props.data.Niveau}</td>
            <td> {this.props.data.Nom_Complet}</td>
          
           
            </tr>
            
        )
    }
}
//export default connect(null,{deleteCandidat})(Candidat);
