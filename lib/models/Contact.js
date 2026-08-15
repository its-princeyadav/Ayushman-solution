import mongoose from "mongoose";
import { SERVICE_OPTIONS } from "../../data/contactInfo";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Full name is required."],
      trim: true,
      minlength: [2, "Full name must be at least 2 characters."],
      maxlength: [100, "Full name cannot exceed 100 characters."],
    },
    email: {
      type: String,
      required: [true, "Email is required."],
      trim: true,
      lowercase: true,
      match: [EMAIL_RE, "Enter a valid email address."],
    },
    phone: {
      type: String,
      trim: true,
      default: "",
    },
    company: {
      type: String,
      trim: true,
      maxlength: [150, "Company name cannot exceed 150 characters."],
      default: "",
    },
    service: {
      type: String,
      required: [true, "Please select a service."],
      enum: {
        values: SERVICE_OPTIONS,
        message: "Please select a valid service.",
      },
    },
    subject: {
      type: String,
      required: [true, "Subject is required."],
      trim: true,
      minlength: [3, "Subject must be at least 3 characters."],
      maxlength: [200, "Subject cannot exceed 200 characters."],
    },
    message: {
      type: String,
      required: [true, "Message is required."],
      trim: true,
      minlength: [10, "Message must be at least 10 characters."],
      maxlength: [3000, "Message cannot exceed 3000 characters."],
    },
    consent: {
      type: Boolean,
      required: [true, "Consent is required to submit this form."],
      validate: {
        validator: (value) => value === true,
        message: "Consent is required to submit this form.",
      },
    },
    status: {
      type: String,
      enum: ["new", "contacted", "closed"],
      default: "new",
    },
  },
  { timestamps: true }
);

contactSchema.statics.SERVICE_OPTIONS = SERVICE_OPTIONS;

export default mongoose.models.Contact || mongoose.model("Contact", contactSchema);
