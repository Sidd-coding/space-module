import React from 'react';

const Mui = (props) => {
  return (
    <div className="right">
      <div className="mr_4">
        Successful
        <label className="switch" >
          <input type="checkbox" onChange={props.muiRocket} checked={props.checked} />
          <span className="slider" ></span>
        </label>
      </div>
    </div>
  )
};

export default Mui;



// onClick = { props.muiRocket }

        // <div class="MuiFormGroup-root">
    //   <label class="MuiFormControlLabel-root 
    //   MuiFormControlLabel-labelPlacementStart">
    //     <span class="MuiSwitch-root jss1">
    //       <span class="MuiButtonBase-root 
    //       MuiIconButton-root jss7 
    //       MuiSwitch-switchBase jss2 
    //       MuiSwitch-colorSecondary"
    //         aria-disabled="false">
    //         <span class="MuiIconButton-label">
    //           <input class="jss10 MuiSwitch-input"
    //             name="successful"
    //             type="checkbox"
    //             value="" />
    //           <span class="MuiSwitch-thumb jss3">
    //           </span>
    //         </span>
    //       </span>
    //       <span class="MuiSwitch-track jss4">
    //       </span>
    //     </span>
    //     <span class="MuiTypography-root 
    //                 MuiFormControlLabel-label 
    //                 MuiTypography-body1">
    //       <span class="successful">
    //         Successful
    //       </span>
    //     </span>
    //   </label>
    // </div>
