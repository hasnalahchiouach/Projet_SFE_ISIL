import React, { Component } from 'react'
import Annonce from './Annonce'
import { getAnnonces, deleteAnnonce } from '../../actions/AnnonceActions';
import { getFilieres } from '../../actions/FiliereActions';
import { connect } from 'react-redux';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Annonces.css'


class Annonces extends Component {

    componentDidMount() {
        // console.log(this.props.candidats)
        axios.get('http://localhost:5000/annonces')
            .then(res => this.props.getAnnonces(res.data))
        axios.get('http://localhost:5000/filieres')
            .then(res => this.props.getFilieres(res.data))
    }
    deleteAnnonce = (id) => {
        axios.delete('http://localhost:5000/annonces/' + id)
            .then(this.props.deleteAnnonce(id))
    }

    render() {

        return (
            <div>
                <Link className='Link1' to='/annonce/add'>Nouvelle Annonce</Link><br></br>
                {this.props.annonces.map((annonce) => (
                    <div class="annonce">
                         <button className='button' onClick={this.deleteAnnonce.bind(this, annonce.ID_Annonce)}
                            style={{
                                    backgroundColor:'#ba6b57' ,
                                    color: 'white',
                                    padding: '5px 20px',
                                    textAlign: 'center',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    borderRadius: '20px',
                                    marginLeft: '550px',
                                    marginTop:'20px',
                                    borderColor:'#ba6b57'
                                     }}>Supprimer Annonce</button>
                                     
                        <Link className='Link5' to={"/annonce/edit/" + annonce.ID_Annonce}>  Modifier Annonce</Link>
                       

                        <div class="title-annonce">
                            {annonce.Titre_Annonce} {annonce.Annee_Universitaire}

                            <Link to={'/annonce/' + annonce.ID_Annonce}>Voir les details </Link>
                        </div>

                      

                    <div className="img-annonce">
                        <img src="est-logo.png" height='100' className="" alt="" />
                    </div>
                        
                      
                      
                  </div>
        ))
    } 
          
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        annonces: state.annonce.annonces,
    }
}

export default connect(mapStateToProps, { getAnnonces, getFilieres, deleteAnnonce })(Annonces);