import React, { Component } from 'react'
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';


export default class Candidat extends Component {

    state={
        showAdminToggle : false
    }
    showAdmin=()=>{
        this.setState({showAdminToggle:!this.state.showAdminToggle })
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
                    onClick={this.showAdmin} 
                    className="fa fa-sort-down " 
                    style={{cursor:'pointer'}}>
                    </i>
                </h4>
                <p class="card-text">
                    {(this.state.showAdminToggle)?(
                    <ul  class="list-group">
                        <li class="list-group-item"> {this.props.data.ID_Admin}</li>
                    <li class="list-group-item"> {this.props.data.NomAd}</li>
                    <li class="list-group-item">{this.props.data.PrenomAd}</li>
                    <li class="list-group-item">{this.props.data.AgeAd}</li>
                    <li class="list-group-item">{this.props.data.E_mailAd}</li>
                    <li class="list-group-item">{this.props.data.Profession}</li>
                    

                   
                    </ul>
                    ): null}
                   
                </p>
            </div>
        </div>
            
        )
    }
}
//export default connect(null,{deleteCandidat})(Candidat);
