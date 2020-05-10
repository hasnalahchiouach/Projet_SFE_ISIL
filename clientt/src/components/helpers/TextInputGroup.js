import React, { Component } from 'react'
import classnames from 'classnames'

export default class TextInputGroup extends Component {
    render() {
        return (
            
                 <div className="form-group">
                    <label style={{float:'left'}} for="">{this.props.label} </label>
                    <input type={this.props.type} 
                    className={classnames('form-control',{
                        'is-invalid':this.props.error
                    })}
                    value={this.props.value} onChange={this.props.onChange}  name={this.props.name} />  
                    <div className="invalid-feedback">{this.props.error}</div>
                    </div>
           
        )
    }
}
