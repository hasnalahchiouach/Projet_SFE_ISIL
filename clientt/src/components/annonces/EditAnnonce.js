import React, { Component } from 'react'
import TextInputGroup from '../helpers/TextInputGroup'
import { connect } from 'react-redux';
import { editAnnonce } from '../../actions/AnnonceActions'
import Axios from 'axios';
import classnames from 'classnames'


class EditAnnonce extends Component {
    state = {
        ID_Annonce: this.props.match.params.id,
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

    componentDidMount() {
        const ID_Annonce = this.props.match.params.id;
        const annonce = this.props.annonces.find(element => element.ID_Annonce == ID_Annonce);
        console.log(annonce);

        this.setState({
            ID_Annonce: annonce.ID_Annonce,
            Titre_Annonce: annonce.Titre_Annonce,
            Annee_Universitaire: annonce.Annee_Universitaire,
            Date_Limite:Date.parse(annonce.Date_Limite),
            Date_Resultat_Preinscription: annonce.Date_Resultat_Preinscription,
            Date_Concours: annonce.Date_Concours,
            Date_Resultat_Concours: annonce.Date_Resultat_Concours,
            Procedure_Selection: annonce.Procedure_Selection,
            Niveau: annonce.Niveau,
        })
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
        if (this.state.Date_Concours == ""  && this.state.Niveau == "LP") {
            this.setState({ errors: { Date_Concours: 'The Date_Concours is Required' } })
            return;
        }
        if (this.state.Date_Resultat_Concours == ""  && this.state.Niveau == "LP") {
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




       Axios.put('http://localhost:5000/annonces/' + this.props.match.params.id, this.state)
          //  .then(this.props.editAnnonce(this.state))
           // .then(this.props.history.push('/annonce'))
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <button style={{ height: '45px', width: '150px', float: 'left', marginLeft: 20, marginTop: 200, backgroundColor: '#b49c73', borderRadius: '20px', color: 'white' }} onClick={() => this.props.history.push('/annonce')}> Back to home</button>
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
                                                    value={this.state.Titre_Annonce}
                                                    onChange={this.onChangeInput}
                                                    error={this.state.errors.Titre_Annonce}

                                                />
                                                <TextInputGroup
                                                    type="text"
                                                    label="Annee_Universitaire"
                                                    name="Annee_Universitaire"
                                                    value={this.state.Annee_Universitaire}
                                                    onChange={this.onChangeInput}
                                                    error={this.state.errors.Annee_Universitaire}

                                                />

                                               
                                                <div className="form-group">
                                                    <label style={{ float: 'left' }} for="">Date_Limite </label>
                                                    <input type="Date" value={this.state.Date_Limite} onChange={this.onChangeInput} name="Date_Limite" />
                                                </div>
                                                <TextInputGroup
                                                    type="Date"
                                                    label="Date des résultats de selection"
                                                    name="Date_Resultat_Preinscription"
                                                    value={this.state.Date_Resultat_Preinscription}
                                                    onChange={this.onChangeInput}
                                                    error={this.state.errors.Date_Resultat_Preinscription}

                                                />
                                                <div className="form-group">
                                                    <label style={{ float: 'left' }} for="">Date Concours d'admission </label>
                                                    <input type="Date" value={this.state.Date_Concours} onChange={this.onChangeInput} name="Date_Concours" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">


                                            <div className="form-group">
                                                    <label style={{ float: 'left' }} for="">Date des résultats du test écrit </label>
                                                    <input type="Date" value={this.state.Date_Resultat_Concours} onChange={this.onChangeInput} name="Date_Resultat_Concours" />
                                                </div>

                                                <label style={{ marginRight: '350px', marginTop: '10px' }}>Procedure_Selection </label>
                                                <textarea rows="3" cols="65" name="Procedure_Selection" value={this.state.Procedure_Selection} onChange={this.onChangeInput}>{this.state.Procedure_Selection}</textarea>

                                                <label style={{ marginRight: '500px' }}>Niveau</label>
                                                <select className={classnames('form-control', {
                                                    'is-invalid': this.state.errors.Niveau
                                                })} name="Niveau" value={this.state.Niveau} onChange={this.onChangeInput} style={{ width: '390px', height: '38px', fontSize: '15px', marginTop: '3px', marginBottom: '10px' }}>
                                                    <option value=""></option>
                                                    <option value="DUT">DUT</option>
                                                    <option value="LP">LP</option>

                                                    <div className="invalid-feedback">{this.state.errors.Niveau}</div>
                                                </select>







                                                <button style={{ marginTop: '70px', borderRadius: '30px', width: '200px', marginLeft: '100px', backgroundColor: '#b49c73', borderColor: '#b49c73' }} className="btn btn-dark btn-block">Ajouter Annonce</button>

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
const mapStateToProps = (state) => {
    return {
        annonces: state.annonce.annonces,
    }
}
export default connect(mapStateToProps, { editAnnonce })(EditAnnonce);