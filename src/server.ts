import express, {json, Request, Response} from "express";
import { json as jsonParser } from "body-parser";

import logger from "morgan";
import cors from "cors";

// import { SupportController } from "./support/support-ticket/controller/support.controller";
// import { Authentication } from "./middlewares/authentication";
import { Error } from "./middlewares/error";
// import {SupportFeedbackController} from "./support/support-feedback/controller/support_feedback.controller";


class Server {
    private app: express.Application;
    // private authenticationMiddleware: Authentication;
    // private supportController: SupportController;
    // private supportFeedbackController: SupportFeedbackController;
    private error: Error

    constructor() {
        this.app = express();
        this.configuration();

        // this.authenticationMiddleware = new Authentication();
        this.error = new Error();

        // this.supportController = new SupportController();
        // this.supportFeedbackController = new SupportFeedbackController();

        this.routes();
    }

    public configuration() {
        this.app.set('port', process.env.PORT || 3000);
        this.app.use(logger("dev"));
        this.app.use(jsonParser());
        this.app.use(cors());
    }

    public routes() {
        // this.app.use(
        //     "/api/v1/support-ticket",
        //     this.authenticationMiddleware.authorizeToken,
        //     this.authenticationMiddleware.getAuthorization,
        //     this.supportController.router
        // );
        //
        // this.app.use(
        //     "/api/v1/support-feedback",
        //     this.authenticationMiddleware.authorizeToken,
        //     this.authenticationMiddleware.getAuthorization,
        //     this.supportFeedbackController.router
        // )

        this.app.use("/", (req: Request, res: Response) => {
            res.send('Welcome to REST API');
        });

        // error handler
        this.app.use(this.error.errorHandler)
    }

    public start() {
        this.app.listen(this.app.get('port'), () => {
            console.log(`Server is listening ${this.app.get('port')} port.`);
        });
    }
}

const server = new Server();
server.start();
