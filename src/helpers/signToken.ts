import {Request} from "express";
import jwt from "jsonwebtoken";

import config from "../config";

export  const signToken = (req: Request) => {
    const { adminRecruiterId, subRecruiterId } = req;

    return jwt.sign({
        data: {
            adminRecruiterId,
            subRecruiterId
        }
    }, config.secret!);
}
