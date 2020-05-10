import React, { Component } from 'react'
import TextInputGroup from '../helpers/TextInputGroup'
import {connect} from 'react-redux';
import {addAdmin} from '../../actions/AdminActions'
import Axios from 'axios';


class AddAdmin extends Component {
    state={
        ID_Admin:'',
        NomAd:'',
        PrenomAd:'',
        AgeAd:'',
        E_mailAd:'',
        Profession:'',
        //Validation:false,
        errors:{}

    }


    onChangeInput=(e)=>{
        this.setState({[e.target.name]:e.target.value})
    }


    submit=(e)=>{
        e.preventDefault();
        if(this.state.ID_Admin==""){
            this.setState({errors:{ID_Admin:'The ID_Admin is Required'}})
            return;
        }
        if(this.state.NomAd==""){
            this.setState({errors:{NomAd:'The NomAd is Required'}})
            return;
        }
        if(this.state.PrenomAd==""){
            this.setState({errors:{PrenomAd:'The PrenomAd is Required'}})
            return;
        }
        if(this.state.AgeAd==""){
            this.setState({errors:{AgeAd:'The AgeAd is Required'}})
            return;
        }
        if(this.state.E_mailAd==""){
            this.setState({errors:{E_mailAd:'The E_mailAd is Required'}})
            return;
        }
        if(this.state.Profession==""){
            this.setState({errors:{Profession:'The Profession is Required'}})
           
        }
       
        Axios.post('http://localhost:5000/addadmin/',this.state)
        .then(this.props.addAdmin(this.state))
        .then(this.props.history.push('/admin'))

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                    <button  style={{float:'left', marginLeft:20, marginTop:200,backgroundColor:'#ba6b57' ,color:'white',borderRadius:'10px',height:'40px'}} onClick={()=>this.props.history.push('/admin')}>Back to home</button>
                    </div>
                    <div className="col-md-4" style={{marginTop:20}}>

                    <form onSubmit={this.submit} >

               <div class="card">
                  
                   <div class="card-body">
                       <h4 class="card-title">Form Admins</h4>
                       <div class="card-text">


                       <TextInputGroup
                           type="text"
                           label="ID_Admin"
                           name="ID_Admin"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.ID_Admin}
                           
                           />
                           <TextInputGroup
                           type="text"
                           label="NomAd"
                           name="NomAd"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.NomAd}
                           
                           />

                        <TextInputGroup
                           type="text"
                           label="PrenomAd"
                           name="PrenomAd"
                           value={this.state.PrenomAd}
                           onChange={this.onChangeInput}
                           error={this.state.errors.PrenomAd}
                           
                           />
                           
                           <TextInputGroup
                           type="text"
                           label="AgeAd"
                           name="AgeAd"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.AgeAd}
                           
                           />
                           
                           <TextInputGroup
                           type="email"
                           label="E_mailAd"
                           name="E_mailAd"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.E_mailAd}
                           
                           />
                           
                           <TextInputGroup
                           type="text"
                           label="Profession"
                           name="Profession"
                           value={this.state.name}
                           onChange={this.onChangeInput}
                           error={this.state.errors.Profession}
                           
                           />
                           
                         
                        
                           
                        <button style={{width:'250px', marginLeft:'70px',backgroundColor:'#ba6b57',borderColor:'#ba6b57',borderRadius:'20px'}} className="btn btn-dark btn-block">Ajouter</button>
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
export default connect(null,{addAdmin})(AddAdmin);