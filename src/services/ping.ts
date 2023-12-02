/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Imports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
import axios from "axios";
// @ts-ignore
import axiosTime from 'axios-time';
axiosTime(axios);

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Functions                                                     |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
export async function ping(url: string, time: number) {
    try {
        const response = await axios.get(url);
        // @ts-ignore
        if(response.timings.elapsedTime < time){
            // @ts-ignore
            return {success: true, time: response.timings.elapsedTime}
        }

        // @ts-ignore
        return {success: false, time: response.timings.elapsedTime}
    } catch(err) {
        return {success: false, error: err}
    }
}