import React, { Component } from 'react'
import './EspaceAdmin.css'

import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import AddCandidat from '../candidats/AddCandidat'
export default class EspaceAdmin extends Component {
    render() {
        return (
            <div>
                <Link className='Link1' to='/annonce'>Gestion Annonces</Link><br></br>
                 <Link className='Link3'  to='/filiere/add'>Gestion des Filieres</Link><br></br>
                 <Link  className='Link2' to='/candidat'>Gestion Candidats</Link><br></br>
                 <Link  className='Link4' to='/admin/add'>Gestion Compte</Link><br></br>
                 
               
            </div>
        )
    }
}
