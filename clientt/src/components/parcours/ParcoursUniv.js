import React, { Component } from 'react'
import ParcourUniv from './ParcourUniv'
import {getParcourUniv} from '../../actions/ParcourUnivActions';
import {connect} from 'react-redux';
import axios from 'axios';

 class ParcoursUniv extends Component {

    componentDidMount(){
       // console.log(this.props.candidats)
    axios.get('http://localhost:5000/parcoursUniv')
    .then(res => this.props.getParcourUniv(res.data))
    }
   

    render() {
       
        return (
            <div>
              {this.props.parcoursUniv.map((parcourUniv)=>(
            <ParcourUniv data={parcourUniv}/>
        ))} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        parcoursUniv : state.parcourUniv.parcoursUniv
    }
}

export default connect(mapStateToProps,{getParcourUniv})(ParcoursUniv);