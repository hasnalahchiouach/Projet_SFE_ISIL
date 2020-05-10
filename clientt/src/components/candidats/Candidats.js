import React, { Component } from 'react'
import Candidat from './Candidat'
import {getCandidats} from '../../actions/CandidatActions';
import {connect} from 'react-redux';
import axios from 'axios';

 class Candidats extends Component {

    componentDidMount(){
       // console.log(this.props.candidats)
    axios.get('http://localhost:5000/candidats')
    .then(res => this.props.getCandidats(res.data))
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
                  <th scope="col">CNE</th>
                  <th scope="col">CIN</th>
                  <th scope="col">Prenom</th>
                  <th scope="col">Nom</th>
                  <th scope="col">DateNaissance</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Sexe</th>
                  <th scope="col">Email</th>
                  <th scope="col">EtatCivil</th>
                  <th scope="col">Nationalite</th>
                  <th scope="col">CodePostal</th>
                  <th scope="col">Telephone</th>
                  <th scope="col">Niveau_Demande</th>



                </tr>
                </thead>
              <tbody>
               

               



           
           
            {this.props.candidats.map((candidat)=>(
            <Candidat data={candidat}/>
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
        candidats : state.candidat.candidats
    }
}

export default connect(mapStateToProps,{getCandidats})(Candidats);