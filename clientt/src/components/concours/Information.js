import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


export default class Information extends Component {

    state={
        showConcourToggle : false
    }
    showConcour=()=>{
        this.setState({showConcourToggle:!this.state.showConcourToggle })
    }
    /*deleteCandidat = (id) => {
        Axios.delete('http://localhost:5000/candidats/'+id)
        .then(this.props.deleteCandidat(id))
    }*/
    render() {
        return (
        <div class="card">
            
            <div class="card-body">
                <h4 class="card-title">
                    {this.props.data.name} 

                    <i 
                    onClick={this.showConcour} 
                    className="fa fa-sort-down " 
                    style={{cursor:'pointer'}}>
                    </i>
                </h4>
                <p class="card-text">
                    {(this.state.showConcourToggle)?(
                    <ul  class="list-group">
                    <li class="list-group-item"> {this.props.data.ID_Filiere}</li>
                    <li class="list-group-item">{this.props.data.Libelle_Concours}</li>
                    <li class="list-group-item">{this.props.data.Objectifs_Concours}</li>
                    <li class="list-group-item">{this.props.data.Conditions_Acces}</li>
                    <li class="list-group-item">{this.props.data.Procedure_Selection}</li>

                   
                  
                    </ul>
                    ): null}
                   
                </p>
            </div>
        </div>
            
        )
    }
}
//export default connect(null,{deleteCandidat})(Candidat);
