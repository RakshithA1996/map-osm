import React, { Component }  from 'react';
import { connect } from 'react-redux';

class DetailsCard extends Component {
    render(){
        const {cardDetails} = this.props;
        return(
            <div className="DetailsCard">
                <div className="DetailsCard__Row">
                    <div className="DetailsCard__Row--Label">Curreny symbol</div>
                    <div className="DetailsCard__Row--Sep"> : </div>
                    <div className="DetailsCard__Row--Para">{cardDetails.symbol} ({cardDetails.currency})</div>
                </div>
                <div className="DetailsCard__Row">
                    <div className="DetailsCard__Row--Label">Speed Unit</div>
                    <div className="DetailsCard__Row--Sep"> : </div>
                    <div className="DetailsCard__Row--Para">{cardDetails.speed}</div>
                </div>
                <div className="DetailsCard__Row">
                    <div className="DetailsCard__Row--Label">Distance Unit</div>
                    <div className="DetailsCard__Row--Sep"> : </div>
                    <div className="DetailsCard__Row--Para">{cardDetails.distance}</div>
                </div>
                <div className="DetailsCard__Row">
                    <div className="DetailsCard__Row--Label">Volume Unit</div>
                    <div className="DetailsCard__Row--Sep"> : </div>
                    <div className="DetailsCard__Row--Para">{cardDetails.volume}</div>
                </div>
                <div className="DetailsCard__Row">
                    <div className="DetailsCard__Row--Label">Timezone</div>
                    <div className="DetailsCard__Row--Sep"> : </div>
                    <div className="DetailsCard__Row--Para">{cardDetails.timezone}</div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {cardDetails:state.coordinate.cardDetails};
}

export default connect(mapStateToProps)(DetailsCard);