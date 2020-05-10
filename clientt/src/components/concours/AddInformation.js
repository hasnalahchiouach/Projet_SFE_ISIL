import React, { Component } from 'react'
import TextInputGroup from '../helpers/TextInputGroup'
import {connect} from 'react-redux';
import {addInformation} from '../../actions/InformationActions'
import {getFilieres} from '../../actions/FiliereActions'
import Axios from 'axios';


class AddInformation extends Component {
    state={
        
        ID_Filiere:'',
        Libelle_Concours:'',
        Objectifs_Concours:'',
        Conditions_Acces:'',
        Procedure_Selection:'',
        //Validation:false,
        errors:{}

    }


    onChangeInput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    submit=(e)=>{
        e.preventDefault();
        if(this.state.ID_Filiere==""){
            this.setState({errors:{ID_Filiere:'The ID_Filiere is Required'}})
            return;
        }
        if(this.state.Libelle_Concours==""){
            this.setState({errors:{Libelle_Concours:'The Libelle_Concours is Required'}})
           
        }
       
      
       
        Axios.post('http://localhost:5000/addinformation/',this.state)
        .then(this.props.addInformation(this.state))
        .then(this.props.history.push('/information'))

    }
    componentDidMount(){
        Axios.get('http://localhost:5000/filieres')
    .then(res => this.props.getFilieres(res.data))
    }
    

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                    <button className="btn btn-dark" style={{float:'left', marginLeft:20, marginTop:200}} onClick={()=>this.props.history.push('/informaion')}>Back to home</button>
                    </div>
                    <div className="col-md-4" style={{marginTop:20}}>

                    <form onSubmit={this.submit} >

               <div class="card">
                  
                   <div class="card-body">
                       <h4 class="card-title">Informations Filiere</h4>
                       <div class="card-text">


                       <label style={{marginRight:'350px',marginTop:'10px'}}>ID_Filiere </label>

        <select name="ID_Filiere" value={this.state.ID_Filiere} onChange={this.onChangeInput} style={{width:'380px', height:'38px',fontSize:'15px',marginTop:'3px',marginBottom:'10px'}}>
                    <option value=""></option>
                    {
                        this.props.filieres.map(filiere=>{
                            return(
                                <option value={filiere.ID_Filiere}>{filiere.Libelle_Filiere}</option>

                            )
                        })
                    }
                   
                    </select>




                           <TextInputGroup
                           type="text"
                           label="Libelle_Concours"
                           name="Libelle_Concours"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Libelle_Concours}
                           
                           />

                <label style={{marginRight:'350px',marginTop:'10px'}}>ObjectifsConcours </label>
               <textarea   style={{width:'390px'}} name="Objectifs_Concours" value={this.state.Objectifs_Concours} onChange={this.onChangeInput} ></textarea>
                          
             <label style={{marginRight:'350px',marginTop:'10px'}}>ConditionsConcours </label>
             <textarea   style={{width:'390px'}} name="Conditions_Acces" value={this.state.Conditions_Acces} onChange={this.onChangeInput}></textarea>
                            
            <label style={{marginRight:'350px',marginTop:'10px'}}>Procedure_Selection </label>
            <textarea   style={{width:'390px'}} name="Procedure_Selection" value={this.state.Procedure_Selection} onChange={this.onChangeInput}></textarea>
                         
                        
                           
                        <button style={{width:'250px', marginLeft:'70px',marginTop:'20px'}} className="btn btn-dark btn-block">Ajouter</button>
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
const mapStateToProps = (state) => {
    return{
        filieres : state.filiere.filieres
    }
}
export default connect(mapStateToProps,{addInformation,getFilieres})(AddInformation);