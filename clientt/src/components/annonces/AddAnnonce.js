import React, { Component } from 'react'
import TextInputGroup from '../helpers/TextInputGroup'
import { connect } from 'react-redux';
import { addAnnonce } from '../../actions/AnnonceActions'
import Axios from 'axios';
import classnames from 'classnames'


class AddAnnonce extends Component {
    state = {

        Titre_Annonce: '',
        Annee_Universitaire: '',
        Date_Limite: '',
        Date_Resultat_Preinscription: '',
        Date_Concours: null,
        Date_Resultat_Concours: null,
        Procedure_Selection: '',
        Niveau: '',
        //Validation:false,
        errors: {}

    }


    onChangeInput = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    submit = (e) => {
        e.preventDefault();
        if (this.state.Titre_Annonce == "") {
            this.setState({ errors: { Titre_Annonce: 'The Titre_Annonce is Required' } })
            return;
        }
        if (this.state.Annee_Universitaire == "") {
            this.setState({ errors: { Annee_Universitaire: 'The Annee_Universitaire is Required' } })
            return;
        }
        if (this.state.Date_Limite == "") {
            this.setState({ errors: { Date_Limite: 'The Date_Limite is Required' } })
            return;
        }
        if (this.state.Date_Resultat_Preinscription == "") {
            this.setState({ errors: { Date_Resultat_Preinscription: 'The "Date Resultat de Selection" is Required' } })
            return;
        }
        if (this.state.Date_Concours == "" && this.state.Niveau == "LP") {
            this.setState({ errors: { Date_Concours: 'The Date_Concours is Required' } })
            return;
        }
        if (this.state.Date_Resultat_Concours == "" && this.state.Niveau == "LP") {
            this.setState({ errors: { Date_Resultat_Concours: 'The Date_Resultat_Concours is Required' } })
            return;
        }
        if (this.state.Procedure_Selection == "") {
            this.setState({ errors: { Procedure_Selection: 'The Procedure_Selection is Required' } })
            return;
        }
        if (this.state.Niveau == "") {
            this.setState({ errors: { Niveau: 'The Niveau is Required' } })

        }




        Axios.post('http://localhost:5000/addannonce/', this.state)
            .then(this.props.addAnnonce(this.state))
            .then(this.props.history.push('/annonce'))

    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <button style={{ height: '40px', width: '200px', float: 'left', marginLeft: 20, marginTop: 200, backgroundColor: '#ba6b57', borderRadius: '20px', color: 'white', borderColor: '#ba6b57' }} onClick={() => this.props.history.push('/annonce')}> Listes des annonces </button>
                    </div>
                    <div className="col-md-9" style={{ marginTop: 20 }}>

                        <form onSubmit={this.submit} >

                            <div class="card">

                                <div class="card-body">
                                    <h4 class="card-title">Form Annonce</h4>
                                    <div class="card-text">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <TextInputGroup
                                                    type="text"
                                                    label="Titre_Annonce"
                                                    name="Titre_Annonce"
                                                    value={this.state.name}
                                                    onChange={this.onChangeInput}
                                                    error={this.state.errors.Titre_Annonce}

                                                />
                                                <TextInputGroup
                                                    type="text"
                                                    label="Annee_Universitaire"
                                                    name="Annee_Universitaire"
                                                    value={this.state.name}
                                                    onChange={this.onChangeInput}
                                                    error={this.state.errors.Annee_Universitaire}

                                                />

                                                <TextInputGroup
                                                    type="Date"
                                                    label="Date_Limite"
                                                    name="Date_Limite"
                                                    value={this.state.name}
                                                    onChange={this.onChangeInput}
                                                    error={this.state.errors.Date_Limite}

                                                />
                                                <TextInputGroup
                                                    type="Date"
                                                    label="Date des résultats de selection"
                                                    name="Date_Resultat_Preinscription"
                                                    value={this.state.name}
                                                    onChange={this.onChangeInput}
                                                    error={this.state.errors.Date_Resultat_Preinscription}

                                                />

                                                <div className="form-group">
                                                    <label style={{ float: 'left' }} for="">Date Concours d'admission </label>
                                                    <input type="Date" value={this.state.name} onChange={this.onChangeInput} name="Date_Concours" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">


                                                
                                                <div className="form-group">
                                                    <label style={{ float: 'left' }} for="">Date des résultats du test écrit </label>
                                                    <input type="Date" value={this.state.name} onChange={this.onChangeInput} name="Date_Resultat_Concours" />
                                                </div>
                                                <label style={{ marginRight: '350px', marginTop: '10px' }}>Procedure_Selection </label>
                                                <textarea rows="3" cols="65" name="Procedure_Selection" value={this.state.Procedure_Selection} onChange={this.onChangeInput}></textarea>

                                                <label style={{ marginRight: '500px' }}>Niveau</label>
                                                <select className={classnames('form-control', {
                                                    'is-invalid': this.state.errors.Niveau
                                                })} name="Niveau" value={this.state.Niveau} onChange={this.onChangeInput} style={{ width: '390px', height: '38px', fontSize: '15px', marginTop: '3px', marginBottom: '10px' }}>
                                                    <option value=""></option>
                                                    <option value="DUT">DUT</option>
                                                    <option value="LP">LP</option>

                                                    <div className="invalid-feedback">{this.state.errors.Niveau}</div>
                                                </select>







                                                <button style={{ marginTop: '70px', borderRadius: '30px', width: '200px', marginLeft: '100px', backgroundColor: '#ba6b57', borderColor: '#b49c73' }} className="btn btn-dark btn-block">Ajouter Annonce</button>

                                            </div>

                                        </div>

                                    </div>
                                </div>
                            </div>
                        </form>


                    </div>
                    <div className="col-md-1"></div>

                </div>

            </div>

        )
    }
}
export default connect(null, { addAnnonce })(AddAnnonce);