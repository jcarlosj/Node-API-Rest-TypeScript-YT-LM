import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExtends extends Request {
    authUser?: string | JwtPayload;
}