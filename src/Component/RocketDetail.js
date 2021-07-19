import React from 'react';
import Launch from './RocketDetails/Launch'
import Country from './RocketDetails/Country';
import RocketName from './RocketDetails/RockeName';
import SuccessRate from './RocketDetails/SuccessrRate';

const RocketDetail = (props) => {

    return (
        <div className="bord">

            <div className="style">
                <span>
                    <img src="https://i.imgur.com/jHNFSY6.png"
                        alt="mission_patch"
                        width="50px"
                        height="60px">
                    </img>
                </span> <span className="rocketname">{props.rocket.name}</span></div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <Launch title="Launch Year" value={props.rocket.first_flight} />
                        <RocketName title="Rocket Name" value={props.rocket.name} />
                    </div>

                    <div className="col-md-6 ">
                        <Country title="Country" value={props.rocket.country} />
                        <SuccessRate title="Success Rate" value={props.rocket.success_rate_pct} />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RocketDetail;

