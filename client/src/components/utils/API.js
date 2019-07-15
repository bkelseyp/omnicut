import axios from 'axios';

export default {
    getBarbers: function () {
        return axios.get("/api/routes/");
    }
}