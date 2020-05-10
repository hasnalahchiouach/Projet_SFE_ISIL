
import React, { Component } from 'react'
import axios from 'axios';
import { withRouter} from 'react-router-dom'


 class Login extends Component {
    state = {
        E_mail : '' ,
        Password : ''
    }
    login = (e) => {
        e.preventDefault();
     axios.post('http://localhost:5000/admins/login',this.state)
        .then(res => {
            if(res.data[0].E_mail == this.state.E_mail  && res.data[0].Password == this.state.Password)
            {
                this.props.login();
                //this.props.history.push("/");
            }
            else{
                
            }
            
        });  
    }
  //  
    handlChange = (e) =>{
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    render() {
        return (
            <div>
                  <div className='col-md-6'>
                 <form onSubmit={this.login} style={{marginTop:'100px',marginLeft:'100px'}}>
                <div className="form-group">
                    <input type="email" name="E_mail" onChange={this.handlChange} className="form-control" id="exampleInputEmail1"placeholder="Email"/>
                </div>
                <div class="form-group">
                    <input type="password" name="Password" onChange={this.handlChange} className="form-control" id="exampleInputPassword1" placeholder="Mot de passe"/>
                </div>
                <button type="submit" className="btn btn-info btn-block my-4" style={{backgroundColor:'#b49c73',borderRadius:'30px',width:'300px' , borderColor:'#b49c73',marginLeft:'80px'}} >Se connecter </button>
                </form>
                  </div>
                  </div>
            
        )
    }
}
export default withRouter(Login);