/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Services                                                      |
|   - - - - - -                                                   |
|   Import services here                                          |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
import { Request, Response } from 'express';
import * as PingService from '../services/ping';

/*
| - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - |
|   Functions                                                     |
| _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ _ |
*/
export async function ping(req: Request, res: Response) {
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