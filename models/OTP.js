import mongoose from 'mongoose';

const otpSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  otp: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: 300 // Document will be automatically deleted after 300 seconds (5 minutes)
  }
});

export default mongoose.models.OTP || mongoose.model('OTP', otpSchema);
