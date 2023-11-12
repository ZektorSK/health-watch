const express = require('express');
const router = express.Router();

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   API routes                                                    |
|   - - - - - -                                                   |
|   API routes used for the actual functionality of the program.  |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/

router.get('/', (req, res) => {
    res.json({message: "Welcome to `Health Checker`"});
});

router.post('/ping', (req, res) => {
   res.json({message: req.body})
});

module.exports = router;