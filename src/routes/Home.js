import React, { Component } from 'react';
import Header from '../components/Header';
import LoadCountry from '../components/LoadCountry';
import LoginModal from '../components/LoginModal';
import MapComponent from '../components/MapComponent';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import DetailsCard from '../components/DetailsCard';
import setLogin from "../redux/actions/setLogin";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            isLogin: false,
            isSubmit:false
        }
    }

    componentDidMount() {
    }

    toggleLogin = () => {
        this.setState({isLogin:!this.state.isLogin})
    }

    submitted = () => {
        this.setState({isSubmit:!this.state.isSubmit},()=>{
            if(this.state.isSubmit){
                this.setLogout(this.props.auth);
                this.toggleLogin();
            }
        })
    }

    setLogout = (auth) => {
        if(auth){
            this.props.toggleAuth("IS_LOGOUT_FALSE")
        }else{
            this.props.toggleAuth("IS_LOGOUT_TRUE")
        }
    }

    render() {
        const {isLogin} = this.state;
        const {mode, nav, cardDetails, auth} = this.props;
        return (
            <div className="Home">
                <Header 
                    isLogin={isLogin} 
                    toggleLogout={this.setLogout} 
                    toggleLogin={this.toggleLogin} 
                />
                <div 
                    className="Home__Body" 
                    style={
                        nav ? {
                            gridTemplateColumns: window.screen.availWidth < 700 ? "0 1fr" : "1fr 5fr"
                        }:{
                            gridTemplateColumns:"0fr 5fr"
                        }
                    }
                >
                    <div className="Home__Body--SideBar" style={mode?{background:"#5e5e5e"}:{}}>
                        {nav ? <NavBar /> : ""}
                    </div>
                    <div className="Home__Body--Map">
                        <div className="Home__Body--SideBarMobile" style={mode?{background:"#5e5e5e"}:{}}>
                            {nav ? <NavBar /> : ""}
                        </div>
                        <MapComponent />
                        {auth?<div className="Home__Form">
                            <LoadCountry />
                        </div>:""}
                        {auth?<div className="Home__Card">
                            { cardDetails.symbol === "" ? "" : <DetailsCard />}
                        </div>:""}
                    </div>
                </div>
                <Footer />
                {isLogin ? <LoginModal submitted={this.submitted} toggleLogin={this.toggleLogin} /> : ""}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        mode:state.dark.mode, 
        nav: state.navbar.nav, 
        cardDetails:state.coordinate.cardDetails,
        auth: state.loginAuth.auth
    };
}

const mapDispatchToProps = dispatch => ({
    toggleAuth : data => dispatch(setLogin(data)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);