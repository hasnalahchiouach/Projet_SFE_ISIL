import React, { Component } from 'react'
import Filiere from './Filiere'
import {getFilieres} from '../../actions/FiliereActions';
import {connect} from 'react-redux';
import axios from 'axios';

 class Filieres extends Component {

    componentDidMount(){
       // console.log(this.props.candidats)
    axios.get('http://localhost:5000/filieres')
    .then(res => this.props.getFilieres(res.data))
    }
   

    render() {
       
        return (
            <div class="card">
            
            <div class="card-body">
                <h4 class="card-title">
                   

                  
                </h4>
                <p class="card-text">
                   
                
                    <table  class="table">
              <thead style={{backgroundColor:'#ba6b57',color:'white'}}>
                <tr>
                  <th scope="col">ID Admin</th>
                  <th scope="col">Libelle_Filiere</th>
                  <th scope="col">Niveau</th>
                  <th scope="col">Nom_Complet</th>
                
                </tr>
                </thead>
              <tbody>
              {this.props.filieres.map((filiere)=>(
            <Filiere data={filiere}/>
        ))} 
               

               



              </tbody>
            </table>
           
           
             
                   
                   
                  
                   
                </p>
            </div>
        </div>
            
        )
    }
}

const mapStateToProps = (state) => {
    return{
        filieres : state.filiere.filieres
    }
}

export default connect(mapStateToProps,{getFilieres})(Filieres);