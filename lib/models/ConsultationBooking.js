import mongoose from "mongoose";

// Mirrors lib/models/Contact.js's shape/conventions - one document per
// "Book a Consultation" submission from components/Common/BookingModal.
// Field names match the modal's own leadForm state (company/turnover, not
// companyName/yearlyTurnover) so there's no translation layer between the
// form and the API payload.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const consultationBookingSchema = new mongoose.Schema(
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
      required: [true, "Phone number is required."],
      trim: true,
    },
    company: {
      type: String,
      required: [true, "Company name is required."],
      trim: true,
      maxlength: [150, "Company name cannot exceed 150 characters."],
    },
    state: {
      type: String,
      required: [true, "State is required."],
      trim: true,
      maxlength: [100, "State cannot exceed 100 characters."],
    },
    solution: {
      type: String,
      required: [true, "Please select a solution."],
      trim: true,
    },
    turnover: {
      type: String,
      required: [true, "Please select your yearly turnover."],
      trim: true,
    },
    message: {
      type: String,
      trim: true,
      maxlength: [2000, "Message cannot exceed 2000 characters."],
      default: "",
    },
    selectedDate: {
      type: Date,
      required: [true, "Consultation date is required."],
    },
    selectedTime: {
      type: String,
      required: [true, "Consultation time is required."],
      trim: true,
    },
  },
  { timestamps: true }
);

consultationBookingSchema.index({ createdAt: -1 });

export default mongoose.models.ConsultationBooking ||
  mongoose.model("ConsultationBooking", consultationBookingSchema);
