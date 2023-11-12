/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Imports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const axios = require("axios");
const axiosTime = require('axios-time');
axiosTime(axios);

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Functions                                                     |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
async function ping(url, time) {
    try {
        const response = await axios.get(url);

        if(response.timings.elapsedTime < time){
            return {success: true, time: response.timings.elapsedTime}
        }

        return {success: false, time: response.timings.elapsedTime}
    } catch(err) {
        return {success: false, error: err}
    }
}

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Exports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
module.exports = {
    ping
}