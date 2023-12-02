/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Imports                                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
import express, { Request, Response } from 'express';
export const router = express.Router();

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Api Controllers                                               |
|   - - - - - -                                                   |
|   Import controllers here                                       |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
import * as PingController from '../controllers/ping'; 

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   API routes                                                    |
|   - - - - - -                                                   |
|   API routes used for the actual functionality of the program.  |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/

router.get('/', (req: Request, res: Response) => {
    res.json({message: 'Welcome to `Health Checker`'});
}); 

router.post('/ping', async (req: Request, res: Response) => {
    return PingController.ping(req, res);
});