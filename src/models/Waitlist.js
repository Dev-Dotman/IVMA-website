import mongoose from 'mongoose';

const WaitlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  whatsappNumber: {
    type: String,
    required: [true, 'WhatsApp number is required'],
    trim: true,
  },
  businessType: {
    type: String,
    required: [true, 'Business type is required'],
    enum: ['small-shop', 'online-store', 'retail', 'warehouse', 'manufacturing', 'other'],
  },
  status: {
    type: String,
    enum: ['pending', 'notified', 'joined'],
    default: 'pending',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Add index for email for faster lookups
WaitlistSchema.index({ email: 1 });

// Prevent model recompilation in development
export default mongoose.models.Waitlist || mongoose.model('Waitlist', WaitlistSchema);
