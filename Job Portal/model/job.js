// models/Job.js
const mongoose = require('mongoose');
const jobSchema = new mongoose.Schema({
  title: { type: String, required: true, text: true },
  company: { type: String, required: true, index: true },
  location: String,
  type: { type: String, enum: ['Full-time','Part-time','Contract','Internship'], default: 'Full-time' },
  salary: String,
  description: { type: String, text: true },
  requirements: [String],
  postedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date,
  isActive: { type: Boolean, default: true }
});
jobSchema.index({ title: 'text', description: 'text' }); // full-text
module.exports = mongoose.model('Job', jobSchema);
