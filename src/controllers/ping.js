/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Services                                                      |
|   - - - - - -                                                   |
|   Import services here                                          |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const PingService = require('../services/ping');

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Functions                                                     |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
async function ping(req, res) {
    if (req.body.url && req.body.time){

        const result = await PingService.ping(req.body.url, req.body.time);

        if (result.success){
            res.json({message: "Successful ping", data: result});
        }else{
            res.json({message: "Unsuccessful ping", data: result});
        }
    }else{
        res.json({message: "Wrong data"});
    }
}

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Exports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
module.exports = {
    ping: ping
}