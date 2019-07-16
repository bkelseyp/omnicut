import React from 'react';
import VendorCard from '../VendorCard';
import './style.css';
// import DummyBarbers from '../VendorWrapper/DummyBarbers';


class VendorList extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('mount call')
        this.props.loadBarbers();
    }


    render() {
        // console.log('DummyBarbers', DummyBarbers);
        // console.log('props', this.props.barbers)
        // console.log('dummy', DummyBarbers)
        const dbBarbers = this.props.barbers.map(barber => (
            <VendorCard
                name={barber.name}
                price={barber.basePrice}
                message={barber.bio}
                key={barber.id}
                HandleModalOpen={this.props.HandleModalOpen}                
            />

        ))
        return (
            <div className='vendor-list col-md-9 col-12'>
                {dbBarbers}
            </div>
        )
    }
}

export default VendorList;