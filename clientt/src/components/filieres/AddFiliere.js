import React, { Component } from 'react'
import TextInputGroup from '../helpers/TextInputGroup'
import { connect } from 'react-redux';
import { addFiliere } from '../../actions/FiliereActions'
import Axios from 'axios';
import classnames from 'classnames'



class AddAFiliere extends Component {
    state = {
        ID_Admin: '',
        Libelle_Filiere: '',
        Niveau: '',
        Nom_Complet: '',

        errors: {}

    }


    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submit = (e) => {
        e.preventDefault();
        if (this.state.ID_Admin == "") {
            this.setState({ errors: { ID_Admin: 'The ID_Admin is Required' } })
            return;
        }
        if (this.state.Libelle_Filiere == "") {
            this.setState({ errors: { Libelle_Filiere: 'The Libelle_Filiere is Required' } })
            return;
        }
        if (this.state.Niveau == "") {
            this.setState({ errors: { Niveau: 'The Niveau is Required' } })

        }
        if (this.state.Nom_Complet == "") {
            this.setState({ errors: { Nom_Complet: 'The Nom_Complet is Required' } })

        }

        Axios.post('http://localhost:5000/addfiliere/', this.state)
            .then(this.props.addFiliere(this.state))
            .then(this.props.history.push('/filiere'))
        //.then(this.props.history.push('/admin'))

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-4">
                        <button  style={{ height : '40px' ,width:'200px',float: 'left', marginLeft: 20, marginTop: 200,backgroundColor:'#ba6b57',borderRadius:'20px' , borderColor:'#ba6b57',color:'white' }} className="btn1"  onClick={() => this.props.history.push('/filiere')}>Listes des Filieres</button>
                    </div>
                    <div className="col-md-4" style={{ marginTop: 20 }}>

                        <form onSubmit={this.submit} >

                            <div class="card">

                                <div class="card-body">
                                    <h4 class="card-title">Form Filieres</h4>
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
                                            label="Libelle_Filiere"
                                            name="Libelle_Filiere"
                                            value={this.state.name}
                                            onChange={this.onChangeInput}
                                            error={this.state.errors.Libelle_Filiere}

                                        />
                                        <TextInputGroup
                                            type="text"
                                            label="Nom_Complet"
                                            name="Nom_Complet"
                                            value={this.state.name}
                                            onChange={this.onChangeInput}
                                            error={this.state.errors.Nom_Complet}

                                        />
                                        <label style={{ marginRight: '350px', marginTop: '10px' }}>Niveau </label>

                                        <select className={classnames('form-control', {
                                            'is-invalid': this.state.errors.Niveau
                                        })} name="Niveau" value={this.state.Niveau} onChange={this.onChangeInput} style={{ width: '390px', height: '38px', fontSize: '15px', marginTop: '3px', marginBottom: '10px' }}>
                                            <option value=""></option>
                                            <option value="DUT">DUT</option>
                                            <option value="LP">LP</option>

                                            <div className="invalid-feedback">{this.state.errors.Niveau}</div>
                                        </select>






                                        <button style={{ width: '250px', marginLeft: '70px', backgroundColor: '#ba6b57', color: 'white' ,borderRadius:'30px'}} className="btn btn-light btn-block">Ajouter</button>
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
export default connect(null, { addFiliere })(AddAFiliere);