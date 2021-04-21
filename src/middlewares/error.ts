import {NextFunction, Request, Response, ErrorRequestHandler, Errback} from "express";

// import {TuResponse} from "../helpers/tu_response";


export class Error {
    // private tuResponse: TuResponse;

    constructor() {
        // this.tuResponse = new TuResponse();
    }

    public errorHandler = (err: any, req: Request, res: Response, next: NextFunction) => {
        // return this.tuResponse.tu_error_response(
        //     res,
        //     err.status || 500,
        //     err.message,
        //     err.data || {}
        // )
        return
    }
}
