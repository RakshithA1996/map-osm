import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import moon from "../images/moon.png";
import sun from "../images/sun.png";
import setDark from "../redux/actions/setDark";

class NavBar extends Component {
    constructor(){
        super();
        this.state = {
            sidebarData : [
                {
                    href:"#home",
                    class:"fa fa-fw fa-home",
                    label:"Home"
                },
                {
                    href:"#services",
                    class:"fa fa-fw fa-wrench",
                    label:"Services"
                },
                {
                    href:"#clients",
                    class:"fa fa-fw fa-user",
                    label:"Clients"
                },
                {
                    href:"#contact",
                    class:"fa fa-fw fa-envelope",
                    label:"Contact"
                },
            ]
        }
    }

    setColorMode = (mode) => {
        if(mode){
            this.props.setMode("IS_LIGHT")
        }else{
            this.props.setMode("IS_DARK")
        }
    }

    render(){
        const {sidebarData} = this.state;
        const {mode} = this.props;
        return(
            <div className="NavBar" style={mode?{background:"#5e5e5e"}:{}}>
                <div className="NavBar__Para" style={mode?{color:"#f5b000"}:{}} >Dashboard</div>
                <div className="NavBar__DarkMode">
                    <div className="NavBar__DarkMode--Para">
                        <img className="NavBar__DarkMode--Para__Img" src={mode?sun:moon} alt="mode"></img>
                        <span>{mode?"Light":"Dark"} Mode</span>
                    </div>
                    <label class="switch" for="checkbox">
                        <input type="checkbox" id="checkbox" onChange={()=>this.setColorMode(mode)} checked={mode} />
                        <div class="slider round"></div>
                    </label>
                </div>
                <div className="NavBar__Sidebar">
                    {sidebarData.map((data,index)=>{
                        return (
                            <a key={index} className="NavBar__Sidebar--Para" href={data.href}><i id="iconFA" className={data.class}></i> {data.label}</a>
                        )
                    })}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {mode:state.dark.mode};
}

const mapDispatchToProps = dispatch => ({
    setMode : data => dispatch(setDark(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);