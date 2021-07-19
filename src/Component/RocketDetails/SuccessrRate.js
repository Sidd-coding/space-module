import React from 'react';


const SuccessRate = props => {
    return (
        <div className="row">
            <div className="col-sm-6 col-6 fs-5 col-md-6 pt-1 font-weight-bold">
                {props.title}
            </div>
            <div className="col-sm-6 col-6 fs-5 col-md-6 pt-1 text-right">
                {props.value}%
            </div>
        </div>
    )
};

export default SuccessRate;