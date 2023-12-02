/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Imports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
import express from 'express';
import body_parser from 'body-parser';
import { router as api } from './routes/api';

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Express configuration                                         |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
const PORT = process.env.PORT || 8000;
const app = express();

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