import React from 'react';


const RocketName = props => {
    return (
        <div className="row">
            <div className="col-sm-6 col-6 fs-5 col-md-6 pt-1 font-weight-bold">
                {props.title}
            </div>
            <div className="col-sm-6 col-6 col-md-6 pt-1 text-right fs-5 ">
                {props.value}
            </div>
        </div>
    )
};

export default RocketName;