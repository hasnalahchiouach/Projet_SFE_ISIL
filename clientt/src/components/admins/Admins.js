import React, { Component } from 'react'
import Admin from './Admin'
import {getAdmins} from '../../actions/AdminActions';
import {connect} from 'react-redux';
import axios from 'axios';

 class Admins extends Component {

    componentDidMount(){
       // console.log(this.props.candidats)
    axios.get('http://localhost:5000/admins')
    .then(res => this.props.getAdmins(res.data))
    }
   

    render() {
       
        return (
            <div>
              {this.props.admins.map((admin)=>(
            <Admin data={admin}/>
        ))} 
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        admins : state.admin.admins
    }
}

export default connect(mapStateToProps,{getAdmins})(Admins);