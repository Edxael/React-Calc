import React, { Component } from 'react';
import './style.css';

class ButtonTemp extends Component{
    handleButtonClick(){
        if(this.props.clearDisplay)
            this.props.clearDisplay();
        else if(this.props.displayOutput)
            this.props.displayOutput();
        else
            this.props.displayInput(this.props.btnValue);
    }

    render(){
        return(
            <button onClick={this.handleButtonClick.bind(this)} className="btn btn-default">{this.props.btnValue}</button>
        );
    }
}

export default ButtonTemp;
