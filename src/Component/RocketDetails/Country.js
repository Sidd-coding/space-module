import React from 'react';


const Country = props => {
    return (
        <div className="row">
            <div className="col-sm-3 col-3 col-md-6 pt-1 font-weight-bold fs-5">
                {props.title}
            </div>
            <div className="col-sm-9 col-9 fs-5 col-md-6 pt-1 text-right
                            ">
                {props.value}
            </div>
        </div>
    )
};
export default Country;