import React, { Component } from 'react'
import TextInputGroup from '../helpers/TextInputGroup'
import { connect } from 'react-redux';
import { addCandidat } from '../../actions/CandidatActions'
import Axios from 'axios';
import uuid from 'react-uuid'
import classnames from 'classnames'

class AddCandidat extends Component {
  state = {
    step: 1,
    CNE: '',
    CIN: '',
    Prenom: '',
    Nom: '',
    DateNaissance: '',
    Adresse: '',
    Sexe: '',
    E_mail: '',
    EtatCivil: '',
    Nationalite: '',
    CodePostal: '',
    Telephone: '',
    Niveau_Demande: '',
    //Validation:false,
    errors: {},
    ID_BAC: uuid(),
    Annee_Bac: '',
    Serie_Bac: '',
    Session_Bac: '',
    Moyenne_Bac: '',
    Mention_Bac: '',
    ID_Univ: uuid(),
    Annee_Univ: '',
    Type_Univ: '',
    Nom_Univ: '',
    Diplome_Univ: '',
    Libelle_Diplome: '',
    Moyenne_Diplome: '',
    Mention_Diplome: '',
  }


  onChangeInput = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }
  nextto2 = () => {
    if (this.state.CNE == "") {
      this.setState({ errors: { CNE: 'The CNE is Required' } })
      return;
    }
    if (this.state.CIN == "") {
      this.setState({ errors: { CIN: 'The CIN is Required' } })
      return;
    }
    if (this.state.Prenom == "") {
      this.setState({ errors: { Prenom: 'The LastName is Required' } })
      return;
    }
    if (this.state.Nom == "") {
      this.setState({ errors: { Nom: 'The FirstName is Required' } })
      return;
    }
    if (this.state.DateNaissance == "") {
      this.setState({ errors: { DateNaissance: 'The DN is Required' } })
      return;
    }
    if (this.state.Adresse == "") {
      this.setState({ errors: { Adresse: 'The Adresse is Required' } })
      return;
    }
    if (this.state.Sexe == "") {
      this.setState({ errors: { Sexe: 'The Sexe is Required' } })
      return;
    }
    if (this.state.E_mail == "") {
      this.setState({ errors: { E_mail: 'The Email is Required' } })
      return;
    }
    if (this.state.EtatCivil == "") {
      this.setState({ errors: { EtatCivil: 'The EtatCivil is Required' } })
      return;
    }
    if (this.state.Nationalite == "") {
      this.setState({ errors: { Nationalite: 'The Nationality is Required' } })
      return;
    }

    if (this.state.CodePostal == "") {
      this.setState({ errors: { CodePostal: 'The CodePostal is Required' } })
      return;
    }
    if (this.state.Telephone == "") {
      this.setState({ errors: { Telephone: 'The Telephone is Required' } })
      return;
    }
    if (this.state.Niveau_Demande == "") {
      this.setState({ errors: { Niveau_Demande: 'The level is Required' } })
      return;
    }

    this.setState({
      step: this.state.step + 1
    });
  }
  nextto3 = () => {
    if (this.state.Annee_Bac == "") {
      this.setState({ errors: { Annee_Bac: 'The Annee_Bac is Required' } })
      return;
    }
    if (this.state.Serie_Bac == "") {
      this.setState({ errors: { Serie_Bac: 'The Serie_Bac is Required' } })
      return;
    }
    if (this.state.Session_Bac == "") {
      this.setState({ errors: { Session_Bac: 'The Session_Bac is Required' } })
      return;
    }


    if (this.state.Moyenne_Bac == "") {
      this.setState({ errors: { Moyenne_Bac: 'The Moyenne_Bac is Required' } })
      return;
    }
    if (this.state.Mention_Bac == "") {
      this.setState({ errors: { Mention_Bac: 'The Mention_Bac is Required' } })
      return;
    }

    this.setState({
      step: this.state.step + 1
    });
  }
  nextto4 = () => {
    if (this.state.Annee_Univ == "") {
      this.setState({ errors: { Annee_Univ: 'The Annee_Univ is Required' } })
      return;
    }
    if (this.state.Type_Univ == "") {
      this.setState({ errors: { Type_Univ: 'The Type_Univ is Required' } })
      return;
    }
    if (this.state.Nom_Univ == "") {
      this.setState({ errors: { Nom_Univ: 'The Nom_Univ is Required' } })
      return;
    }


    if (this.state.Diplome_Univ == "") {
      this.setState({ errors: { Diplome_Univ: 'The Diplome_Univ is Required' } })
      return;
    }
    if (this.state.Libelle_Diplome == "") {
      this.setState({ errors: { Libelle_Diplome: 'The Libelle_Diplome is Required' } })
      return;

    }
    if (this.state.Moyenne_Diplome == "") {
      this.setState({ errors: { Moyenne_Diplome: 'The Moyenne_Diplome is Required' } })
      return;

    }
    if (this.state.Mention_Diplome == "") {
      this.setState({ errors: { Mention_Diplome: 'The Mention_Diplome is Required' } })
      return;

    }
    this.setState({
      step: this.state.step + 1
    });
  }



  // Go back to prev step
  prevStep = () => {
    this.setState({
      step: this.state.step - 1
    });
  };

  submit = () => {

    Axios.post('http://localhost:5000/addpost/', this.state)
    /*.then(this.props.addCandidat(this.state))
    .then(this.props.history.push('/candidat'))
*/
  }


  render() {
    switch (this.state.step) {
      case 1:
        return (
          <div className="row container" style={{ marginTop: 50 }}>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <TextInputGroup
                type="text"
                label="CNE"
                name="CNE"
                value={this.state.CNE}
                onChange={this.onChangeInput}
                error={this.state.errors.CNE}

              />

              <TextInputGroup
                type="text"
                label="CIN"
                name="CIN"
                value={this.state.CIN}
                onChange={this.onChangeInput}
                error={this.state.errors.CIN}

              />

              <TextInputGroup
                type="text"
                label="Prenom"
                name="Prenom"
                value={this.state.Prenom}
                onChange={this.onChangeInput}
                error={this.state.errors.Prenom}

              />

              <TextInputGroup
                type="text"
                label="Nom"
                name="Nom"
                value={this.state.Nom}
                onChange={this.onChangeInput}
                error={this.state.errors.Nom}

              />

              <TextInputGroup
                type="date"
                label="DateNaissance"
                name="DateNaissance"
                value={this.state.DateNaissance}
                onChange={this.onChangeInput}
                error={this.state.errors.DateNaissance}

              />

              <TextInputGroup
                type="text"
                label="Adresse"
                name="Adresse"
                value={this.state.Adresse}
                onChange={this.onChangeInput}
                error={this.state.errors.Adresse}

              />
              <label>Sexe</label>
              <div class="custom-control form-group custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="male" name="Sexe" value="Homme" onChange={this.onChangeInput}  />
                <label class="custom-control-label" for="male">Homme</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="female" name="Sexe" value="Femme" onChange={this.onChangeInput} />
                <label class="custom-control-label" for="female">Femme</label>

                <br></br>

              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <TextInputGroup
                type="email"
                label="E_mail"
                name="E_mail"
                value={this.state.E_mail}
                onChange={this.onChangeInput}
                error={this.state.errors.E_mail}

              />


              <label style={{ marginRight: '350px', marginTop: '10px' }}>EtatCivil </label>

              <select className={classnames('form-control', {
                'is-invalid': this.state.errors.EtatCivil
              })} name="EtatCivil" value={this.state.EtatCivil} onChange={this.onChangeInput} style={{ width: '435px', height: '38px', fontSize: '15px', marginTop: '3px', marginBottom: '10px' }}>
                <option value=""></option>
                <option value="Célibataire">Célibataire</option>
                <option value="Marié">Marié</option>
                <option value="Fiancé">Fiancé</option>
                <option value="Divorcé">Divorcé</option>
                <div className="invalid-feedback">{this.state.errors.EtatCivil}</div>
              </select>





              <TextInputGroup
                type="text"
                label="Nationalite"
                name="Nationalite"
                value={this.state.Nationalite}
                onChange={this.onChangeInput}
                error={this.state.errors.Nationalite}

              />


              <TextInputGroup
                type="text"
                label="CodePostal"
                name="CodePostal"
                value={this.state.CodePostal}
                onChange={this.onChangeInput}
                error={this.state.errors.CodePostal}
              />


              <TextInputGroup
                type="text"
                label="Telephone"
                name="Telephone"
                value={this.state.Telephone}
                onChange={this.onChangeInput}
                error={this.state.errors.Telephone}

              />



              <label style={{ marginRight: '350px', marginTop: '10px' }}>NiveauDemande </label>

              <select className={classnames('form-control', { 'is-invalid': this.state.errors.Niveau_Demande })} name="Niveau_Demande" value={this.state.Niveau_Demande} onChange={this.onChangeInput} style={{ width: '435px', height: '38px', fontSize: '15px', marginTop: '3px', marginBottom: '10px' }}>
                <option value=""></option>
                <option value="DUT">DUT</option>
                <option value="LP">LP</option>
                <div className="invalid-feedback">{this.state.errors.Niveau_Demande}</div>
              </select>

              <button className="btn btn-dark" style={{ marginLeft: 20 }} onClick={this.nextto2}>Next</button>

            </div>


          </div>
        );
      case 2:
        return (
          <div className="row container" style={{ marginTop: 50 }}>
            <div className="col-md-1">
            </div>
            <div className="col-md-5">
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
                value={this.state.Serie_Bac}
                onChange={this.onChangeInput}
                error={this.state.errors.Serie_Bac}

              />
              <label style={{ marginRight: '350px', marginTop: '0px' }}>Session_Bac</label>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="Normal" name="Session_Bac" value="Normal" onChange={this.onChangeInput} />
                <label class="custom-control-label" for="Normal">Normal</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="Rattrapage" name="Session_Bac" value="Rattrapage" onChange={this.onChangeInput} />
                <label class="custom-control-label" for="Rattrapage">Rattrapage</label>
              </div>
            </div>

            <div className="col-md-1"></div>
            <div className="col-md-5">






              <TextInputGroup
                type="text"
                label="Moyenne_Bac"
                name="Moyenne_Bac"
                value={this.state.Moyenne_Bac}
                onChange={this.onChangeInput}
                error={this.state.errors.Moyenne_Bac}

              />


              <label style={{ marginRight: '350px', marginTop: '10px' }}>Mention_Bac </label>

              <select className={classnames('form-control', { 'is-invalid': this.state.errors.Mention_Bac })} name="Mention_Bac" value={this.state.Mention_Bac} onChange={this.onChangeInput} style={{ width: '435px', height: '38px', fontSize: '15px', marginTop: '4px', marginBottom: '10px' }}>
                <option value=""></option>
                <option value="Très Bien">Très Bien</option>
                <option value="Bien">Bien</option>
                <option value="Assez Bien">Assez Bien</option>
                <option value="Passable">Passable</option>
                <div className="invalid-feedback">{this.state.errors.Mention_Bac}</div>

              </select>

            </div>
            <div className="col-md-6" style={{ marginTop: 30 }}>
              <button className="btn btn-dark" style={{ marginLeft: '20' }} onClick={this.prevStep}>previous</button>
            </div>
            <div className="col-md-6" style={{ marginTop: 30 }}>
              <button className="btn btn-dark" style={{ marginLeft: '20' }} onClick={this.nextto3}>Next</button>
            </div>
            <div className="col-md-6" style={{ marginTop: 30 }}>
              <button className="btn btn-dark" style={{ marginLeft: '20' }} >Yes</button>
            </div>


          </div>
        );
      case 3:
        return (
          <div className="row container" style={{ marginTop: 50 }}>
            <div className="col-md-1">
            </div>
            <div className="col-md-5">
              <TextInputGroup
                type="text"
                label="Annee_Univ"
                name="Annee_Univ"
                value={this.state.Annee_Univ}
                onChange={this.onChangeInput}
                error={this.state.errors.Annee_Univ}

              />

              <label style={{ marginRight: '350px', marginTop: '0px' }}>TypeUniv</label>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="Public" name="Type_Univ" value="Public" onChange={this.onChangeInput} />
                <label class="custom-control-label" for="Public">Public</label>
              </div>
              <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" class="custom-control-input" id="Privee" name="Type_Univ" value="Privée" onChange={this.onChangeInput} />
                <label class="custom-control-label" for="Privee">Privée</label>
              </div>

              <TextInputGroup
                type="text"
                label="Nom_Univ"
                name="Nom_Univ"
                value={this.state.Nom_Univ}
                onChange={this.onChangeInput}
                error={this.state.errors.Nom_Univ}

              />

              <TextInputGroup
                type="text"
                label="Diplome_Univ"
                name="Diplome_Univ"
                value={this.state.Diplome_Univ}
                onChange={this.onChangeInput}
                error={this.state.errors.Diplome_Univ}

              />
            </div>
            <div className="col-md-1">
            </div>
            <div className="col-md-5">


              <TextInputGroup
                type="text"
                label="Libelle_Diplome"
                name="Libelle_Diplome"
                value={this.state.Libelle_Diplome}
                onChange={this.onChangeInput}
                error={this.state.errors.Libelle_Diplome}

              />

              <TextInputGroup
                type="text"
                label="Moyenne_Diplome"
                name="Moyenne_Diplome"
                value={this.state.Moyenne_Diplome}
                onChange={this.onChangeInput}
                error={this.state.errors.Moyenne_Diplome}

              />

              <label style={{ marginRight: '50px', marginTop: '10px', width: '435px' }}>MentionDiplome </label>

              <select className={classnames('form-control', { 'is-invalid': this.state.errors.Mention_Diplome })} name="Mention_Diplome" value={this.state.Mention_Diplome} onChange={this.onChangeInput} style={{ width: '380px', height: '38px', fontSize: '15px', marginTop: '4px', marginBottom: '10px' }}>
                <option value=""></option>
                <option value="Très Bien">Très Bien</option>
                <option value="Bien">Bien</option>
                <option value="Assez Bien">Assez Bien</option>
                <option value="Passable">Passable</option>
                <div className="invalid-feedback">{this.state.errors.Mention_Diplome}</div>

              </select>

            </div>

            <div className="col-md-6" style={{ marginTop: 30 }}>
              <button className="btn btn-dark" style={{ marginLeft: '20' }} onClick={this.prevStep}>previous</button>
            </div>
            <div className="col-md-6" style={{ marginTop: 30 }}>
              <button className="btn btn-dark" style={{ marginLeft: '20' }} onClick={this.nextto4}>Next</button>
            </div>
          </div>
        );
      case 4:
        return (
          <div className="row container" style={{ marginTop: 50 }} >
            <div className="col-md-6" style={{ marginTop: 30 }}>
              <button className="btn btn-dark" style={{ marginLeft: '20', marginBottom: '10px' }} onClick={()=>this.setState({step:1})}>Change info</button>
            </div>
            <table style={{ marginLeft: '50px' }} class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">CNE</th>
                  <th scope="col">CIN</th>
                  <th scope="col">Prenom</th>
                  <th scope="col">Nom</th>
                  <th scope="col">DateNaissance</th>
                  <th scope="col">Adresse</th>
                  <th scope="col">Sexe</th>


                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.CNE}</td>
                  <td>{this.state.CIN}</td>
                  <td>{this.state.Prenom}</td>
                  <td> {this.state.Nom}</td>
                  <td> {this.state.DateNaissance}</td>
                  <td> {this.state.Adresse}</td>

                  <td> {this.state.Sexe}</td>
                </tr>



              </tbody>
            </table>
            <table style={{ marginLeft: '50px' }} class="table">
              <thead class="thead-dark">
                <tr>

                  <th scope="col">Email</th>
                  <th scope="col">EtatCivil</th>
                  <th scope="col">Nationalite</th>
                  <th scope="col">CodePostal</th>
                  <th scope="col">Telephone</th>
                  <th scope="col">Niveau_Demande</th>

                </tr>
              </thead>
              <tbody>
                <tr>

                  <td> {this.state.E_mail}</td>
                  <td> {this.state.EtatCivil}</td>
                  <td> {this.state.Nationalite}</td>
                  <td> {this.state.CodePostal}</td>
                  <td> {this.state.Telephone}</td>
                  <td> {this.state.Niveau_Demande}</td></tr>



              </tbody>
            </table>
            <table style={{ marginLeft: '50px', marginBottom: '30px' }} class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Annee_Bac</th>
                  <th scope="col">Serie_Bac</th>
                  <th scope="col">Session_Bac</th>
                  <th scope="col">Moyenne_Bac</th>
                  <th scope="col">Mention_Bac</th>


                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.Annee_Bac}</td>
                  <td>{this.state.Serie_Bac}</td>
                  <td>{this.state.Session_Bac}</td>
                  <td> {this.state.Moyenne_Bac}</td>
                  <td> {this.state.Mention_Bac}</td>

                </tr>



              </tbody>
            </table>

            <table style={{ marginLeft: '50px' }} class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Annee_Univ</th>
                  <th scope="col">Type_Univ</th>
                  <th scope="col">Nom_Univ</th>
                  <th scope="col">Diplome_Univ</th>
                  <th scope="col">Libelle_Diplome</th>
                  <th scope="col">Moyenne_Diplome</th>
                  <th scope="col">Mention_Diplome</th>


                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>{this.state.Annee_Univ}</td>
                  <td>{this.state.Type_Univ}</td>
                  <td>{this.state.Nom_Univ}</td>
                  <td> {this.state.Diplome_Univ}</td>
                  <td> {this.state.Libelle_Diplome}</td>
                  <td> {this.state.Moyenne_Diplome}</td>
                  <td> {this.state.Mention_Diplome}</td>

                </tr>

              </tbody>
            </table>

            <div className="col-md-6" style={{ marginTop: 30 }}>
              <button style={{ width: '250px', marginLeft: '990px' }} className="btn btn-dark btn-block" onClick={this.submit}>Ajouter</button>
            </div>

          </div>


        );

      /*return (
          <div>
              <div className="row">
                  <div className="col-md-4">
                  <button className="btn btn-dark" style={{float:'left', marginLeft:20, marginTop:200}} onClick={()=>this.props.history.push('/candidat')}>Back to home</button>
                  </div>
                  <div className="col-md-4" style={{marginTop:20}}>

                  <form onSubmit={this.submit} >

             <div class="card">
                
                 <div class="card-body">
                     <h4 class="card-title">Form Candidat</h4>
                     <div class="card-text">


                       
                 
                         
                              </div>
                              </div>
             </div>
             </form>


                  </div>

              </div>
             
          </div>
                  
      )*/
    }
  }
}
export default connect(null, { addCandidat })(AddCandidat);