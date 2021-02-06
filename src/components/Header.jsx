import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import blackNav from "../images/blackNav.svg";
import whiteNav from "../images/whiteNav.png";
import dark from "../images/dark.png";
import light from "../images/light.png";
import setDark from "../redux/actions/setDark";
import setNav from "../redux/actions/setNavbar";
import setLogin from "../redux/actions/setLogin";

class Header extends Component {

    setColorMode = (mode) => {
        if(mode){
            this.props.setMode("IS_LIGHT")
        }else{
            this.props.setMode("IS_DARK")
        }
    }

    setNav = (nav) => {
        if(nav){
            this.props.toggleNav("IS_NAV_FALSE")
        }else{
            this.props.toggleNav("IS_NAV_TRUE")
        }
    }

    render(){
        const {mode,nav,auth} = this.props;
        console.log(mode);
        return(
            <div className="Header" style={mode?{background:"#292929"}:{}}>
                <div className="Header__Title">
                    <img 
                        className="Header__Title--Img" 
                        onClick={()=>this.setNav(nav)} 
                        src={mode?whiteNav:blackNav} 
                        alt="blackNav" 
                    />
                    <span className="Header__Title--Para" style={mode?{color:"#ffffff"}:{}}>React-OSM-Map</span>
                </div>
                {/* <div className="Header__Right"> */}
                    {/* <img className="Header__Right--Img" onClick={()=>this.setColorMode(mode)} src={mode?light:dark} alt="darkLight" /> */}
                    <button 
                        className="Header__Login" 
                        style={mode?{background:"#5e5e5e",color:"#f5b000"}:{}}
                        onClick={()=>{
                            if(auth){
                                this.props.toggleLogout(auth)
                            }else{
                                this.props.toggleLogin()
                            }
                        }}
                    >
                        {auth?"Logout":"Login"}
                    </button>
                {/* </div> */}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {mode:state.dark.mode,nav:state.navbar.nav,auth: state.loginAuth.auth};
}

const mapDispatchToProps = dispatch => ({
    setMode : data => dispatch(setDark(data)),
    toggleNav : data => dispatch(setNav(data)),
    toggleAuth : data => dispatch(setLogin(data)),
})


export default connect(mapStateToProps, mapDispatchToProps)(Header);