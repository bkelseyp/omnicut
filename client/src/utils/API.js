import axios from 'axios';


export default {
    getBarbers: function () {
        console.log('axios call');
        return axios.get("/api/barber");
    }
}
