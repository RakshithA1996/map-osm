import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

class Footer extends Component {
    render(){
        const {mode} = this.props;
        return(
            <div className="Footer" style={mode?{background:"#404040",color:"#ffffff"}:{}}>
                This application will display the map of United States, India, United Kingdom
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {mode:state.dark.mode};
}

export default connect(mapStateToProps)(Footer);

// #404040