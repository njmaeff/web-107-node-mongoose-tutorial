import {RequestHandler} from "express";
import {connect} from "./connect";

/**
 * withMongoose is a wrapper which connects to mongoose beforehand and allows
 * us to use an asynchronous function as a handler. If there is an error thrown
 * in the handler, this wrapper function will catch the error and return it as
 * a JSON response.
 * @param fn - handler function for express
 */
export const withMongoose: (handler: RequestHandler) => RequestHandler = (fn) => async function (req, res, next) {
    try {
        await connect();
        await fn.call(this, req, res, next)
    } catch (e) {
        res.status(400).json({error: e.message});
    }
}
