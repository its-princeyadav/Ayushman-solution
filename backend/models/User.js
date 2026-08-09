const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Name is required."],
            trim: true,
            minlength: [2, "Name must be at least 2 characters."],
            maxlength: [100, "Name cannot exceed 100 characters."],
        },
        email: {
            type: String,
            required: [true, "Email is required."],
            trim: true,
            lowercase: true,
            unique: true,
            match: [EMAIL_RE, "Enter a valid email address."],
        },
        phone: {
            type: String,
            trim: true,
            default: "",
        },
        password: {
            type: String,
            required: [true, "Password is required."],
            select: false,
        },
        role: {
            type: String,
            default: "user",
        },
    },
    { timestamps: true }
);

// Hashes on create and on any future password change - controllers never
// need to (and never should) hash the password themselves.
// Note: this mongoose version does not pass a `next` callback to async pre
// hooks - resolving the promise (or throwing) is what signals completion.
userSchema.pre("save", async function hashPassword() {
    if (!this.isModified("password")) return;

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});

// For a future login endpoint: query with .select("+password") first, since
// the field is select:false above.
userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
    return bcrypt.compare(candidatePassword, this.password);
};

module.exports = mongoose.model("User", userSchema);
