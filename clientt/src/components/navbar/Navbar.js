import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Navbar extends Component {
    render() {
        return (
            <div>
                
                <nav className="navbar navbar-expand-sm " style={{backgroundColor:'#ba6b57'}}>
                <a className="navbar-brand" href="#" style={{color:'#84142d'} } > <h5>{this.props.titre} </h5></a>
                
                   
                
                    <ul className="navbar-nav mr-auto mt-2 mt-lg-0" >
                    <li className="nav-item active">
                            <Link className="nav-link" to="/annonce"style={{color:'white'} }>Accueil </Link>
                        </li>
                       
                    <li className="nav-item active">
                            <Link className="nav-link" to="/espaceAdmin" style={{color:'white'} }>Espace Admin </Link>
                        </li>
                      
                       
        

                      
                       
                       

                    </ul>
                   
                
            </nav>
            </div>
        )
    }
}
