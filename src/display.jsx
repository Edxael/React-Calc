import React, { Component } from 'react';
import './style.css';


class DisplayP extends Component{
    render(){
        return(
            <input type="text" className="display-cl" value={this.props.expression} />
        );
    }
}

export default DisplayP;
