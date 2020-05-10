import React, { Component } from 'react'
import ParcourBac from './ParcourBac'
import {getParcourBac} from '../../actions/ParcourBacActions';
import {connect} from 'react-redux';
import axios from 'axios';

 class ParcoursBac extends Component {

    componentDidMount(){
       // console.log(this.props.candidats)
    axios.get('http://localhost:5000/parcoursBac')
    .then(res => this.props.getParcourBac(res.data))
    }
   

    render() {
       
        return (
            <div>
              {this.props.parcoursBac.map((parcourBac)=>(
            <ParcourBac data={parcourBac}/>
        ))} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        parcoursBac : state.parcourBac.parcoursBac
    }
}

export default connect(mapStateToProps,{getParcourBac})(ParcoursBac);