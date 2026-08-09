// Centralized error handler - keeps internal details (stack traces,
// connection strings, filesystem paths) out of every response body.
function errorHandler(err, req, res, next) { // eslint-disable-line no-unused-vars
    console.error(err);

    if (err.name === "ValidationError") {
        return res.status(400).json({
            success: false,
            message: "Please correct the highlighted fields.",
        });
    }

    if (err.name === "CastError") {
        return res.status(400).json({
            success: false,
            message: "Invalid request.",
        });
    }

    res.status(err.statusCode || 500).json({
        success: false,
        message: "Something went wrong. Please try again later.",
    });
}

function notFound(req, res) {
    res.status(404).json({
        success: false,
        message: "Route not found.",
    });
}

module.exports = { errorHandler, notFound };
