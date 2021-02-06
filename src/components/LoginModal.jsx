import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { toast } from 'react-toastify';
import close from "../images/close.png"
import closeW from "../images/closeW.png"

class LoginModal extends Component {
    constructor(){
        super();
        this.state = {
            name:"",
            password:"",
        }
    }

    setName = (e) => {
        this.setState({name:e.target.value});
    }

    setPassword = (e) => {
        this.setState({password:e.target.value});
    }

    sumbitLoginCheck = () => {
        const {name, password} = this.state;
        if(name === "admin123" && password === "password@123"){
            this.props.submitted();
        }else{
            toast.error("username and password not valid");
        }
    }

    render(){
        const {mode} = this.props;
        return(
            <div className="LoginModal">
                <div className="LoginModal__Container" style={mode?{background:"#292929"}:{}}>
                    <div className="LoginModal__Container--Header">
                        <div className="LoginModal__Container--Header__Para" style={mode?{color:"#f5b000"}:{}}>Login</div>
                        <img 
                            className="LoginModal__Container--Header__Img" 
                            onClick={this.props.toggleLogin} src={mode?closeW:close} alt="close" 
                        />
                    </div>
                    <div className="LoginModal__Container--Body">
                        <input style={mode?{background:"#292929",color:"#ffffff"}:{}} onChange={this.setName} placeholder="username" className="LoginModal__Container--Body__Input" />
                        <input style={mode?{background:"#292929",color:"#ffffff"}:{}} onChange={this.setPassword} placeholder="password" type="password" className="LoginModal__Container--Body__Input" />
                    </div>
                    <div className="LoginModal__Container--Footer">
                        <button style={mode?{background:"#f5b000"}:{}} onClick={this.sumbitLoginCheck} className="LoginModal__Container--Footer__Button">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {mode:state.dark.mode};
}

export default connect(mapStateToProps)(LoginModal);