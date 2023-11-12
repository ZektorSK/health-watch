const express = require('express');
const app = express();

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Express configuration                                         |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const PORT = process.env.PORT || 8000;

const body_parser = require('body-parser');
app.use(body_parser.urlencoded({extended: true}));

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Route imports                                                 |
|   - - - - - -                                                   |
|   Import routes here.                                           |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const api = require('./routes/api');
app.use('/api', api);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));