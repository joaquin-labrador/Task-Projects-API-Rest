import HttpError from "../helpers/errorhandler.js";

const invalidRoute = (req, res, next) => {
    const error = new HttpError("Not Found", 404);
    return next(error);
};

export default invalidRoute;