import React, { Component } from 'react'
import TextInputGroup from '../helpers/TextInputGroup'
import {connect} from 'react-redux';
import {addParcourUniv} from '../../actions/ParcourUnivActions'
import Axios from 'axios';
import uuid from 'react-uuid'

class AddParcourUniv extends Component {
    state={
        ID_Univ:uuid(),
        CNE:'',
        Annee_Univ:'',
        Type_Univ:'',
        Nom_Univ:'',
        Diplome_Univ:'',
        Libelle_Diplome:'',
        Moyenne_Diplome:'',
        Mention_Diplome:'',
        errors:{}

    }


    onChangeInput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    submit=(e)=>{
        e.preventDefault();
        if(this.state.CNE==""){
            this.setState({errors:{CNE:'The CNE is Required'}})
            return;
        }
        if(this.state.Annee_Univ==""){
            this.setState({errors:{Annee_Univ:'The Annee_Univ is Required'}})
            return;
        }
        if(this.state.Type_Univ==""){
            this.setState({errors:{Type_Univ:'The Type_Univ is Required'}})
            return;
        }
        if(this.state.Nom_Univ==""){
            this.setState({errors:{Nom_Univ:'The Nom_Bac is Required'}})
            return;
        }
       
    
        if(this.state.Diplome_Univ==""){
            this.setState({errors:{Diplome_Univ:'The Diplome_Univ is Required'}})
            return;
        }
        if(this.state.Libelle_Diplome==""){
            this.setState({errors:{Libelle_Diplome:'The Libelle_Diplome is Required'}})
           
        }
        if(this.state.Moyenne_Diplome==""){
            this.setState({errors:{Moyenne_Diplome:'The Moyenne_Diplome is Required'}})
           
        }
      
       
        Axios.post('http://localhost:5000/addparcouruniv',this.state)
        .then(this.props.addParcourUniv(this.state))
        .then(this.props.history.push('/parcoursUniv'))

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                    <button className="btn btn-dark" style={{float:'left', marginLeft:20, marginTop:200}} onClick={()=>this.props.history.push('/parcoursUniv')}>Back to home</button>
                    </div>
                    <div className="col-md-4" style={{marginTop:20}}>

                    <form onSubmit={this.submit} >

               <div class="card">
                  
                   <div class="card-body">
                       <h4 class="card-title">Form Cursus Universitaire</h4>
                       <div class="card-text">

                           <TextInputGroup
                           type="text"
                           label="CNE"
                           name="CNE"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.CNE}
                           
                           />

                        <TextInputGroup
                           type="text"
                           label="Annee_Univ"
                           name="Annee_Univ"
                           value={this.state.Annee_Univ}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Annee_Univ}
                           
                           />
                           
                           <label style={{marginRight:'350px',marginTop:'0px'}}>TypeUniv</label>
                <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="Public" name="Type_Univ" value="Public" onChange={this.onChangeInput}/>
                <label class="custom-control-label" for="Public">Public</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="Privee" name="Type_Univ" value="Privée" onChange={this.onChangeInput}/>
                <label class="custom-control-label" for="Privee">Privée</label>
                </div>
                           
                           <TextInputGroup
                           type="text"
                           label="Nom_Univ"
                           name="Nom_Univ"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Nom_Univ}
                           
                           />
                           
                           <TextInputGroup
                           type="text"
                           label="Diplome_Univ"
                           name="Diplome_Univ"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Diplome_Univ}
                           
                           />
                           
                           <TextInputGroup
                           type="text"
                           label="Libelle_Diplome"
                           name="Libelle_Diplome"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Libelle_Diplome}
                           
                           />
                           
                           <TextInputGroup
                           type="text"
                           label="Moyenne_Diplome"
                           name="Moyenne_Diplome"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Moyenne_Diplome}
                           
                           />
                           
                           <label style={{marginRight:'350px',marginTop:'10px'}}>MentionDiplome </label>

                            <select name="Mention_Diplome" value={this.state.Mention_Diplome} onChange={this.onChangeInput} style={{width:'380px', height:'38px',fontSize:'15px',marginTop:'4px',marginBottom:'10px'}}>
                            <option value="Aucune"></option>
                            <option value="Très Bien">Très Bien</option>
                            <option value="Bien">Bien</option>
                            <option value="Assez Bien">Assez Bien</option>
                            <option value="Passable">Passable</option>
                            </select>
                           

                          
                         
                   
            
                        
                           
                        <button style={{width:'250px', marginLeft:'70px',marginTop:'20px'}} className="btn btn-dark btn-block">Ajouter Cursus Universitaire</button>
                                </div>
                                </div>
               </div>
               </form>


                    </div>

                </div>
               
            </div>
                    
        )
    }
}
export default connect(null,{addParcourUniv})(AddParcourUniv);