import React from 'react';

const Launch = props => {
    return (
        <div className="row">
            <div className="col-sm-6 col-6 col-md-6 pt-1 font-weight-bold fs-5 text-nowrap">
                {props.title}
            </div>
            <div className="col-sm-6 col-6 col-md-6 pt-1 text-right fs-5">
                {props.value}
            </div>
        </div>
    );
    // } <div className="col-sm-9 col-9 fs-5 col-md-6 pt-1 text-right 
    // text-nowrap"></div>
}

export default Launch;