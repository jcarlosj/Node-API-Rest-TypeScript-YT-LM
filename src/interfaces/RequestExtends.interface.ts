import { Request } from "express";
import { JwtPayload } from "jsonwebtoken";

export interface RequestExtends extends Request {
    authUser?: JwtPayload | { id: string, email: string };
}