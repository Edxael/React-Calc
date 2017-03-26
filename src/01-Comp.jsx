import React, { Component } from 'react';
import logo1 from './IMG/git3.png';
import logo2 from './IMG/pf1.png';
import './style.css';
import DisplayP from './display.jsx';
import ButtonTemp from './button.jsx';

class Comp_01 extends Component{

    constructor(){
            super();
            this.state = {
                expression: ""
            }
                this.displayUserInput = this.displayUserInput.bind(this);
                this.happyInput = this.happyInput.bind(this);
                this.clearDisplayPanel = this.clearDisplayPanel.bind(this);
                this.displayUserOutput = this.displayUserOutput.bind(this);
        }

        displayUserInput(userInput){
            userInput = this.state.expression + userInput;
            this.setState({
                expression: userInput
            });
            console.log(this.state.expression);
        }

        displayUserOutput(){
            try{
                let userOutput = eval(this.state.expression);
                this.setState({
                    expression:userOutput
                });
            }
            catch(e){
                this.setState({
                    expression: "Error!!"
                })
            }
        }

        clearDisplayPanel(){
            this.setState({
                expression: ""
            });
        }


        happyInput(userInput){
            this.setState({
                expression: "HELLO ;-) ..."
            });
            console.log(this.state.expression);
        }





    render(){
        return(
            <div className="container">

                    <div className="top trans">
                        <br/>
                        <div>Basic React.js Calculator</div>
                        <DisplayP expression={this.state.expression}/>
                        <br/><br/>
                        <div className="btn-cont">
                            <div className="btn-row">
                                <ButtonTemp btnValue=";-)" displayInput={this.happyInput}/>
                                <ButtonTemp btnValue="(" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue=")" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="/" displayInput={this.displayUserInput}/>
                            </div>
                            <div className="btn-row">
                                <ButtonTemp btnValue="7" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="8" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="9" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="*" displayInput={this.displayUserInput}/>
                            </div>
                            <div className="btn-row">
                                <ButtonTemp btnValue="4" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="5" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="6" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="-" displayInput={this.displayUserInput}/>
                            </div>
                            <div className="btn-row">
                                <ButtonTemp btnValue="1" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="2" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="3" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="+" displayInput={this.displayUserInput}/>
                            </div>
                            <div className="btn-row">
                                <ButtonTemp btnValue="0" displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="." displayInput={this.displayUserInput}/>
                                <ButtonTemp btnValue="CLR" clearDisplay={this.clearDisplayPanel}/>
                                <ButtonTemp btnValue="=" displayOutput={this.displayUserOutput}/>
                            </div>
                        </div>
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
