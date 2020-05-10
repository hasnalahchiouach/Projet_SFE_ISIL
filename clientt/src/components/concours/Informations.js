import React, { Component } from 'react'
import Information from './Information'
import {getInformations} from '../../actions/InformationActions';
import {connect} from 'react-redux';
import axios from 'axios';

 class Informations extends Component {

    componentDidMount(){
       // console.log(this.props.candidats)
    axios.get('http://localhost:5000/informations')
    .then(res => this.props.getInformations(res.data))
    }
   

    render() {
       
        return (
            <div>
              {this.props.infos.map((info)=>(
            <Information data={info}/>
        ))} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        infos : state.information.infos
    }
}

export default connect(mapStateToProps,{getInformations})(Informations);