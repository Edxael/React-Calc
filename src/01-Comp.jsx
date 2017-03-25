import React, { Component } from 'react';
import logo from './IMG/git3.png';
import './style.css';


class Comp_01 extends Component{
    render(){
        return(
            <div className="container">

                    <br/>
                    <div>Hello from 01-Comp.jsx</div>
                    <br/>
                    <img src={logo} alt="Logo" />
                    <br/>
                    <div>Hello again from 01-Comp.jsx</div>

                    {/* this is a commet */}

            </div>
        )
    }
}

export default Comp_01;
