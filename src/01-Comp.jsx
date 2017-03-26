import React, { Component } from 'react';
import logo1 from './IMG/git3.png';
import logo2 from './IMG/pf1.png';
import './style.css';


class Comp_01 extends Component{
    render(){
        return(
            <div className="container">

                    <div className="top trans">
                        <br/>
                        <div>Hello from 01-Comp.jsx</div>
                        <br/>
                        {/* this is a commet */}
                    </div>


                    <div className="bottom1 trans">
                        <div className="name"> <p>by: Edmundo Rubio</p> </div>
                        <div><a href="https://github.com/Edxael" target="blank"> <img className="icon" src={logo1} alt="??" /></a></div>
                        <div><a href="http://www.mycode.website/" target="blank"> <img className="icon" src={logo2} alt="??" /></a></div>
                    </div>

            </div>
        )
    }
}

export default Comp_01;
