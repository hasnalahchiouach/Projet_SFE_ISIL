import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


export default class ParcourBac extends Component {

    state={
        showParcourToggle : false
    }
    showParcour=()=>{
        this.setState({showParcourToggle:!this.state.showParcourToggle })
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
                    onClick={this.showParcour} 
                    className="fa fa-sort-down " 
                    style={{cursor:'pointer'}}>
                    </i>
                </h4>
                <p class="card-text">
                    {(this.state.showParcourToggle)?(
                        
                    <ul  class="list-group">
                    <li class="list-group-item"> {this.props.data.CNE}</li>
                    <li class="list-group-item">{this.props.data.Annee_Bac}</li>
                    <li class="list-group-item">{this.props.data.Serie_Bac}</li>
                    <li class="list-group-item">{this.props.data.Session_Bac}</li>
                    <li class="list-group-item">{this.props.data.Moyenne_Bac}</li>
                    <li class="list-group-item">{this.props.data.Mention_Bac}</li>
                   
                    

                   
                    </ul>
                    ): null}
                   
                </p>
            </div>
        </div>
            
        )
    }
}
//export default connect(null,{deleteCandidat})(Candidat);
