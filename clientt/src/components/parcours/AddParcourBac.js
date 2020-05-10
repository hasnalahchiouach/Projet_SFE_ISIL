import React, { Component } from 'react'
import TextInputGroup from '../helpers/TextInputGroup'
import {connect} from 'react-redux';
import {addParcourBac} from '../../actions/ParcourBacActions'
import Axios from 'axios';
import uuid from 'react-uuid'

class AddParcourBac extends Component {
    state={
        ID_BAC:uuid(),
        CNE:'',
        Annee_Bac:'',
        Serie_Bac:'',
        Session_Bac:'',
        Moyenne_Bac:'',
        Mention_Bac:'',
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
        if(this.state.Annee_Bac==""){
            this.setState({errors:{Annee_Bac:'The Annee_Bac is Required'}})
            return;
        }
        if(this.state.Serie_Bac==""){
            this.setState({errors:{Serie_Bac:'The Serie_Bac is Required'}})
            return;
        }
        if(this.state.Session_Bac==""){
            this.setState({errors:{Session_Bac:'The Session_Bac is Required'}})
            return;
        }
       
    
        if(this.state.Moyenne_Bac==""){
            this.setState({errors:{Moyenne_Bac:'The Moyenne_Bac is Required'}})
            return;
        }
        if(this.state.Mention_Bac==""){
            this.setState({errors:{Mention_Bac:'The Mention_Bac is Required'}})
           
        }
        
       
        Axios.post('http://localhost:5000/addparcourbac',this.state)
        .then(this.props.addParcourBac(this.state))
        .then(this.props.history.push('/parcoursBac'))

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                    <button className="btn btn-dark" style={{float:'left', marginLeft:20, marginTop:200}} onClick={()=>this.props.history.push('/parcoursBac')}>Back to home</button>
                    </div>
                    <div className="col-md-4" style={{marginTop:20}}>

                    <form onSubmit={this.submit} >

               <div class="card">
                  
                   <div class="card-body">
                       <h4 class="card-title">Form Cursus Bac</h4>
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
                           label="Annee_Bac"
                           name="Annee_Bac"
                           value={this.state.Annee_Bac}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Annee_Bac}
                           
                           />
                           
                           <TextInputGroup
                           type="text"
                           label="Serie_Bac"
                           name="Serie_Bac"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Serie_Bac}
                           
                           />
                           
                        

                <label style={{marginRight:'350px',marginTop:'0px'}}>Session_Bac</label>
                <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="Normal" name="Session_Bac" value="Normal" onChange={this.onChangeInput}/>
                <label class="custom-control-label" for="Normal">Normal</label>
                </div>
                <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="Rattrapage" name="Session_Bac" value="Rattrapage" onChange={this.onChangeInput}/>
                <label class="custom-control-label" for="Rattrapage">Rattrapage</label>
                </div>
                         
                           
                           <TextInputGroup
                           type="text"
                           label="Moyenne_Bac"
                           name="Moyenne_Bac"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Moyenne_Bac}
                           
                           />
                           
                          
                          <label style={{marginRight:'350px',marginTop:'10px'}}>Mention_Bac </label>

                            <select name="Mention_Bac" value={this.state.Mention_Bac} onChange={this.onChangeInput} style={{width:'380px', height:'38px',fontSize:'15px',marginTop:'4px',marginBottom:'10px'}}>
                            <option value="Aucune"></option>
                            <option value="Très Bien">Très Bien</option>
                            <option value="Bien">Bien</option>
                            <option value="Assez Bien">Assez Bien</option>
                            <option value="Passable">Passable</option>
                            </select>
                         
                   
            
                        
                           
                        <button style={{width:'250px', marginLeft:'70px',marginTop:'20px'}} className="btn btn-dark btn-block">Ajouter Cursus Bac</button>
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
export default connect(null,{addParcourBac})(AddParcourBac);