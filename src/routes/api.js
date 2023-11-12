/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Imports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const express = require('express');
const router = express.Router();

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Api Controllers                                               |
|   - - - - - -                                                   |
|   Import controllers here                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const PingController = require('../controllers/ping');

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   API routes                                                    |
|   - - - - - -                                                   |
|   API routes used for the actual functionality of the program.  |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/

router.get('/', (req, res) => {
    res.json({message: 'Welcome to `Health Checker`'});
});

router.post('/ping', async (req, res) => {
    return PingController.ping(req, res);
});

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Exports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
module.exports = router;