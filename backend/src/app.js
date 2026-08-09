const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const contactRoutes = require("../routes/contactRoutes");
const { errorHandler, notFound } = require("../middleware/errorHandler");

const app = express();

// Allow frontend requests
app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

// Read JSON body
app.use(express.json());

// Read URL encoded body
app.use(express.urlencoded({ extended: true }));

// Read Cookies
app.use(cookieParser());

// Test Route
app.get("/", (req, res) => {
    res.json({
        success: true,
        message: "Ayushman Solutions Backend Running"
    });
});

app.use("/api/contact", contactRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = app;