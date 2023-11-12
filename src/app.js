/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Imports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const express = require('express');
const app = express();
const body_parser = require('body-parser');
const api = require('./routes/api');

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Express configuration                                         |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const PORT = process.env.PORT || 8000;

app.use(body_parser.urlencoded({extended: true}));

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Route imports                                                 |
|   - - - - - -                                                   |
|   Import routes here.                                           |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
app.use('/api', api);

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Express run                                                   |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));