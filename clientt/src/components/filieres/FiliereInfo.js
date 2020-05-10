import React, { Component } from 'react'
import {getInformations} from '../../actions/InformationActions';
import {connect} from 'react-redux';
import axios from 'axios';

class FiliereInfo extends Component {
   
    componentDidMount(){
        // console.log(this.props.candidats)
  
    }
    render() {
        const idfiliere = this.props.match.params.idfiliere
        const filiere = this.props.filieres.find( filiere => filiere.ID_Filiere ==  idfiliere)
        const info = this.props.infos.find( info => info.ID_Filiere ==  idfiliere)
        return (
            <div>
                <h1>{filiere.Libelle_Filiere}</h1>
                {
                    info?   
                    <div>
                        <h3>{info.Libelle_Concours}</h3>
                        <h3>{info.Libelle_Concours}</h3>
                        <h3>{info.Libelle_Concours}</h3>
                    </div>  
                    : <h6>No info</h6>
                }
              
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return{
        filieres:state.filiere.filieres,
        infos : state.information.infos
    }
}

export default connect(mapStateToProps,{getInformations})(FiliereInfo);