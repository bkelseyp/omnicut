import React from 'react';
import Calendar from 'react-calendar'
import './style.css';


class VendorCalendar extends React.Component {
    constructor(props) {
        super(props);
            let newDate = new Date('03 Jul 2019 00:00:00 GMT-0400')

        this.state = {
           openDates: [ newDate.toString(),
                        ]
        }
    }

    tileClassName = ({date}) => {
        // console.log(date)
        date = date.toString()

        console.log("open dates" ,this.state.openDates[0])

        console.log('date', date);

        if(this.state.openDates.includes(date)){
            return "available"
        }
        else return "not"
    }
    
    render () {
        return(
            <>
        <Calendar tileClassName={this.tileClassName}/>
    </>
        )
    }
}
    

export default VendorCalendar;

