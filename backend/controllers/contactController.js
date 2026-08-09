const Contact = require("../models/Contact");
const asyncHandler = require("../utils/asyncHandler");

// POST /api/contact
const createContact = asyncHandler(async (req, res) => {
    const { fullName, email, phone, company, service, subject, message, consent } = req.body;

    // Schema (models/Contact.js) handles trimming/lowercasing/required/enum/
    // length validation - Mongoose throws a ValidationError (caught by
    // asyncHandler -> errorHandler) if anything is invalid.
    const contact = await Contact.create({
        fullName,
        email,
        phone,
        company,
        service,
        subject,
        message,
        consent,
    });

    res.status(201).json({
        success: true,
        message: "Your enquiry has been submitted successfully.",
        data: { id: contact._id },
    });
});

module.exports = { createContact };
