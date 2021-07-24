import React from 'react';
// import DatePicker from './Date/DatePicker';
import Mui from './Mui';

// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';


function Button(props) {
    // const [selectedDate, setSelectedDate] = useState(null)
    // const [selectedEndDate, setSelectedEndDate] = useState(null)
    return (
        <div className="app-bar">
            <div className="filter">
                <div className="container">
                    <div className="items">
                        <div className="left">
                            <div className="mr_4">
                                <button className="selected"
                                    autoFocus
                                    onClick={props.allRocket}>All</button>
                            </div>
                            <div className="mr_4">
                                <button className="" onClick={props.upcomingRocket}>Upcoming</button>
                            </div>
                            <div className="mr_4">
                                <button className="" onClick={props.pastRocket}>Past</button>
                            </div>
                        </div>
                        <Mui />

                    </div>
                </div>
            </div>
        </div>
    );
}
export default Button;
// <div className="app-bar">
//     <div className="content">
//         <div className="items">
//             <div className="left">
//                 <div className="mr-4">
//                     <button className="selected" autoFocus onClick={props.allRocket}>All</button>
//                 </div>
//                 <div className="mr-4">
//                     <button className="upcoming" onClick={props.upcomingRocket}>Upcoming</button>
//                 </div>
//                 <div className="mr-4">
//                     <button className="past" onClick={props.pastRocket}>Past</button>
//                 </div>
//                 <div className="mui">
//                     Successful
//                     <Mui />

{/* <DatePicker
                                selected={selectedDate}
                                onChange={date => setSelectedDate(date)}
                                dateFormat='MMMM d, yyyy'
                                placeholderText="Start Date"
                                showYearDropdown
                                scrollableYearDropdown
                                dropdownMode="select"

                            />
                            <div style={{ display: 'inline-block', paddingLeft: '10px' }}>
                                <DatePicker
                                    selected={selectedEndDate}
                                    onChange={date => setSelectedEndDate(date)}
                                    dateFormat="MMMM d, yyyy"
                                    placeholderText="End Date"

                                />
                            </div> */}
        //                 </div>
        //                 <div>
        //                     <DatePicker />
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
